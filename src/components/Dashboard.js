import { useEffect } from "react";
import DashboardJobAnalytics from "../components/Dashboard/v2/DashboardJobAnalytics";
import Hero from "../components/Dashboard/v2/Hero";
import layoutTwo from "../components/layout/layoutTwo";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getDashboardHomeData } from "../redux/slices/dashboardSlices/getDashboardHomeSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, dashboardHomeData } = useAppSelector(
    (state) => state.getDashboardHomeData
  );

  useEffect(() => {
    dispatch(getDashboardHomeData());
  }, []);

  return (
    <div className="dashboard">
      <Hero
        totalJobs={dashboardHomeData?.total_jobs || 0}
        totalApplicants={dashboardHomeData?.total_applicants || 0}
        totalApplicantsNotReviewed={
          dashboardHomeData?.total_applicants_not_reviewed || 0
        }
      />
      <DashboardJobAnalytics
        recentCandidates={dashboardHomeData?.recent_candidates}
        topJobs={dashboardHomeData?.top_jobs}
      />
    </div>
  );
};

export default layoutTwo(Dashboard);