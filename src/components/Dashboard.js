import DashboardJobAnalytics from "../components/Dashboard/DashboardJobAnalytics";
import Hero from "../components/Dashboard/Hero";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Hero />
      <DashboardJobAnalytics />
    </div>
  );
};

export default Dashboard;
