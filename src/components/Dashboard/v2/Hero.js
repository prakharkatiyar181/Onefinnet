import { Icon } from "@iconify/react";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie"; 
import SparkleAnimation from '../../../assets/lottie/sparkle.json'; // Ensure this file exists in the correct directory
import WorkingOnLaptopAnimation from '../../../assets/lottie/manWorking.json'; // Keep this if you're using an external URL
import { Button } from "@mui/material"; // Ensure this import is present

const GATEWAY_BASE = process.env.REACT_APP_API_GATEWAY_BASE;
const JOBS_BASE =
  GATEWAY_BASE === "https://api.dev.ecndev.io"
    ? "https://jobs.dev.ecndev.io"
    : "https://jobs.onefinnet.com";
const IMAGE_BASE = process.env.REACT_APP_IMG_BASE;

type HeroProps = {
  totalJobs: number;
  totalApplicants: number;
  totalApplicantsNotReviewed: number;
};

const Hero = ({ totalJobs, totalApplicants, totalApplicantsNotReviewed }: HeroProps) => {
  const [firmDetailsData, setFirmDetailsData] = useState(null);
  const [aiCredits, setAiCredits] = useState(null);
  const [userInfo, setUserInfo] = useState({ first_name: "" });
  const [privateJobBoardUrl, setPrivateJobBoardUrl] = useState("");
  const navigate = useNavigate();

  const formattedCredits = aiCredits ? new Intl.NumberFormat("en-us").format(aiCredits) : null;
  const isPieEmpty = totalApplicantsNotReviewed === 0 && totalApplicants === 0;

  // Fetching data instead of using Redux
  useEffect(() => {
    const fetchFirmDetails = async () => {
      const response = await fetch("/api/firm-details"); // Replace with actual API
      const data = await response.json();
      setFirmDetailsData(data);
    };

    const fetchAiCredits = async () => {
      const response = await fetch("/api/ai-credits"); // Replace with actual API
      const data = await response.json();
      setAiCredits(data?.total_available_credits);
    };

    const fetchUserInfo = async () => {
      const response = await fetch("/api/user-info"); // Replace with actual API
      const data = await response.json();
      setUserInfo(data);
    };

    const fetchPrivateJobBoardUrl = async () => {
      const response = await fetch("/api/private-job-board-url"); // Replace with actual API
      const data = await response.json();
      setPrivateJobBoardUrl(data?.suggested_url);
    };

    fetchFirmDetails();
    fetchAiCredits();
    fetchUserInfo();
    fetchPrivateJobBoardUrl();
  }, []);

  return (
    <div className="dashboard-hero">
      <div className="card">
        <h2>Welcome back, {userInfo.first_name || ""}</h2>
        <p>
          Here's what's changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here
        </p>
        <img
          className="wave-image"
          src={`${IMAGE_BASE || ""}/enterprise/3d-glassyl-silky-waves.png`}
          alt="Background image"
          style={{ opacity: "0.4" }}
        />
      </div>

      <div className="feature-list">
        <div className="feature feature-1">
          {totalJobs === 0 ? (
            <div className="feature-1-card-empty-fallback">
              <div className="stats-wrapper">
                <div className="stats-item">
                  <div>
                    <div className="icon-wrapper" style={{ background: "#0034bb" }}>
                      <Icon icon="lucide:briefcase-business" width={18} height={18} />
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stats-number">{totalJobs}</div>
                    <div className="stats-subtext">Total Jobs</div>
                  </div>
                </div>
                <div className="stats-item">
                  <div>
                    <div className="icon-wrapper" style={{ background: "#C09F80" }}>
                      <Icon icon="lucide:users" width={18} height={18} />
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stats-number">{totalApplicants}</div>
                    <div className="stats-subtext">Applicants</div>
                  </div>
                </div>
              </div>
              <div className="fallback-bottom-wrapper">
                <div className="fallback-text">
                  It seems like you haven't yet hosted a job! <span>Create Now</span>
                </div>
                <Button
                  onClick={() => navigate("/job-creations?view=basic-details")}
                  variant="contained"
                  className="host-job-button"
                >
                  <Icon icon="lucide:ticket-check" width={18} height={18} />
                  Host Job
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="feature-1-card">
                <div className="feature-1-card-item">
                  <div>
                    <div className="icon-wrapper" style={{ background: "#0034bb" }}>
                      <Icon icon="lucide:briefcase-business" width={18} height={18} />
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stats-number">{totalJobs}</div>
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
                    <div className="stats-number">{totalApplicants}</div>
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
                    <div className="stats-number">{formattedCredits || ""}</div>
                    <div className="stats-subtext">AI Credits</div>
                  </div>
                </div>
                <div className="feature-1-card-item"></div>
              </div>
            </>
          )}
        </div>
        <div className="feature feature-2">
          <div>
            <div className="chart-wrapper">
              <ResponsivePie
                innerRadius={0.7}
                enableArcLinkLabels={false}
                isInteractive={!isPieEmpty}
                enableArcLabels={false}
                colors={{ datum: "data.color" }}
                data={[
                  {
                    id: "Reviewed",
                    label: "Reviewed",
                    value: isPieEmpty ? 1 : totalApplicants - totalApplicantsNotReviewed,
                    color: "hsl(258, 61%, 62%)"
                  },
                  {
                    id: "Not Reviewed",
                    label: "Not Reviewed",
                    value: totalApplicantsNotReviewed,
                    color: "rgba(33, 33, 33, 0.1)"
                  }
                ]}
              />
            </div>
            <Button
              onClick={() => {
                navigate("/analytics");
              }}
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
          onClick={() => {
            if (privateJobBoardUrl) {
              window.open(`${JOBS_BASE}/${privateJobBoardUrl}`, "_blank");
            }
          }}
          className="feature feature-3"
        >
          <div className="header">
            <Lottie
              style={{
                position: "absolute",
                left: -34,
                top: -5
              }}
              speed={0.5}
              options={{
                loop: true,
                autoplay: true,
                animationData: WorkingOnLaptopAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
              width={178}
              height={124}
            />
            <div className="company-logo-container">
              {firmDetailsData?.display_picture && (
                <img src={firmDetailsData?.display_picture} alt="Company logo" />
              )}
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
