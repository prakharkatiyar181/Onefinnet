import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import moment from "moment";

const colors = ["#75DEFF", "#72A2FF", "#8A6DFF"];

const DashboardJobAnalytics = () => {
  const rowsWithIndex = [{
    first_name: "Test",
    last_name: "user",
    job_name: "Test 1",
    ai_rating: "Test 1",
    applied_date: "Test 1"
  },{
    first_name: "Test",
    last_name: "user",
    job_name: "Test 1",
    ai_rating: "Test 1",
    applied_date: "Test 1"
  }];
  
  const responsiveBarData = [{
    job_id: 1,
    job_name: "Job 1",
    Reviewed: 40,
    "Not Reviewed": 60,
    "Not ReviewedColor": "rgba(238, 238, 238, 1)",
    ReviewedColor: colors[1]
  },{
    job_id: 2,
    job_name: "Job 2",
    Reviewed: 50,
    "Not Reviewed": 50,
    "Not ReviewedColor": "rgba(238, 238, 238, 1)",
    ReviewedColor: colors[2]
  },{
    job_id: 3,
    job_name: "Job 3",
    Reviewed: 60,
    "Not Reviewed": 40,
    "Not ReviewedColor": "rgba(238, 238, 238, 1)",
    ReviewedColor: colors[3]
  }]

  return (
    <div className="dashboard-body">
      <div className="latest-candidates">
        <div className="data-container-title">
          <h2>Latest Candidates</h2>
          <Button
            className="draft-mail-button"
            variant="text"
          >
            Mail Candidates
            <Icon icon="lucide:chevron-right" width={20} height={20} />
          </Button>
        </div>
        <table className="latest-candidates-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Job Name</th>
              <th>AI Rating</th>
              <th>Applied Date</th>
            </tr>
          </thead>
          <tbody>
            {rowsWithIndex.map((row) => (
              <tr
                key={row.application_id}
                style={{ cursor: "pointer" }}
              >
                <td>{row.first_name + " " + row.last_name}</td>
                <td>{row.job_name}</td>
                <td>{row.ai_rating}</td>
                <td>{moment.unix(row.applied_date).format("Do MMM YY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="job-postings">
        <div className="data-container-title">
          <h2>Your Job Postings</h2>
          <Button className="draft-mail-button" variant="text">
            View All Jobs
            <Icon icon="lucide:chevron-right" width={20} height={20} />
          </Button>
        </div>
        <div style={{ width: 441, height: 370 }}>
          <ResponsiveBar
            margin={{ left: 10, right: 10, bottom: 80 }}
            colors={({ data, id }) => String(data[`${id}Color`])}
            enableLabel={false}
            enableGridY={false}
            enableGridX={true}
            colorBy="indexValue"
            padding={0.5}
            borderRadius={3}
            layout="horizontal"
            keys={["Reviewed", "Not Reviewed"]}
            tooltipLabel={"Job 1"}
            indexBy="job_id"
            axisLeft={null}
            axisRight={null}
            axisTop={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 32,
            }}
            isInteractive={true}
            data={responsiveBarData}
          />
        </div>
          <div className="legend-container">
            {responsiveBarData.map((job) => (
              <div className="legend" key={job.job_id}>
                <div className="color" style={{ backgroundColor: job.ReviewedColor }} />
                <div className="job-name">{job.job_name.split("-")[0]}</div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default DashboardJobAnalytics;