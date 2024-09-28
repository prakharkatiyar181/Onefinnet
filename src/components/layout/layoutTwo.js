import { useEffect, useState } from "react"; 
import DashboardJobAnalytics from "../../components/Dashboard/v2/DashboardJobAnalytics";
import Hero from "../../components/Dashboard/v2/Hero";
import layoutTwo from "../../components/layout/layoutTwo";

const Dashboard = () => {
  const [dashboardHomeData, setDashboardHomeData] = useState(null);

  useEffect(() => {
    const fetchDashboardHomeData = async () => {
      try {
        const response = await fetch('/api/dashboard-home-data'); // Replace with your API endpoint
        const data = await response.json();
        setDashboardHomeData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardHomeData();
  }, []);

  return (
    <div className="dashboard">
      <Hero
        totalJobs={dashboardHomeData?.total_jobs || 0}
        totalApplicants={dashboardHomeData?.total_applicants || 0}
        totalApplicantsNotReviewed={dashboardHomeData?.total_applicants_not_reviewed || 0}
      />
      <DashboardJobAnalytics
        recentCandidates={dashboardHomeData?.recent_candidates}
        topJobs={dashboardHomeData?.top_jobs}
      />
    </div>
  );
};

export default layoutTwo(Dashboard);
