import { Icon } from "@iconify/react";
import { ResponsivePie } from "@nivo/pie";
import { Button } from "@mui/material"; // Ensure this import is present

const Hero = () => {
  return (
    <div className="dashboard-hero">
      <div className="card">
        <h2>Welcome back, Recruiter</h2>
        <p>
          Here's what's changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here
        </p>
      </div>

      <div className="feature-list">
        <div className="feature feature-1">
            <div className="feature-1-card">
              <div className="feature-1-card-item">
                <div>
                  <div className="icon-wrapper" style={{ background: "#0034bb" }}>
                    <Icon icon="lucide:briefcase-business" width={18} height={18} />
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-number">15</div>
                  <div className="stats-subtext">Total Jobs</div>
                </div>
              </div>
              <div className="feature-1-card-item">
                <div>
                  <div className="icon-wrapper" style={{ background: "#C09F80" }}>
                    <Icon icon="lucide:users" width={18} height={18} />
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-number">1500</div>
                  <div className="stats-subtext">Applicants</div>
                </div>
              </div>
            </div>
            <div className="feature-1-card">
              <div className="feature-1-card-item">
                <div>
                  <div className="icon-wrapper" style={{ background: "#6578FC" }}>
                    <Icon icon="lucide:ticket-check" width={18} height={18} />
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-number">20,000</div>
                  <div className="stats-subtext">AI Credits</div>
                </div>
              </div>
              <div className="feature-1-card-item"></div>
            </div>
        </div>
        <div className="feature feature-2">
          <div>
            <div className="chart-wrapper">
              <ResponsivePie
                innerRadius={0.7}
                enableArcLinkLabels={false}
                isInteractive={true}
                enableArcLabels={false}
                colors={{ datum: "data.color" }}
                data={[
                  {
                    id: "Reviewed",
                    label: "Reviewed",
                    value: 27,
                    color: "hsl(258, 61%, 62%)"
                  },
                  {
                    id: "Not Reviewed",
                    label: "Not Reviewed",
                    value: 73,
                    color: "rgba(33, 33, 33, 0.1)"
                  }
                ]}
              />
            </div>
            <Button
              className="view-analytics-link"
            >
              <div>View Analytics</div>
              <Icon icon="lucide:chevron-right" width={20} height={20} />
            </Button>
          </div>
          <div className="chart-color-lables-container">
            <div className="lable">
              <div>
                <div className="color-chip" style={{ background: "rgba(133, 98, 216, 1)" }} />
              </div>
              <div className="text">Reviewed</div>
            </div>
            <div className="lable">
              <div>
                <div className="color-chip" style={{ background: "rgba(217, 217, 217, 1)" }} />
              </div>
              <div className="text">Not Reviewed</div>
            </div>
          </div>
        </div>
        <div
          className="feature feature-3"
        >
          <div className="header">
            <div className="company-logo-container">
              <img src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg" alt="Company logo" />
            </div>
          </div>
          <div className="title">Private Job Board</div>
          <div className="sub-title">
            Your private job postings will appear here, accessible to the public via a
            company-specific URL.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
