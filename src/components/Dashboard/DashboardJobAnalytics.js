import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const colors = ["#75DEFF", "#72A2FF", "#8A6DFF"];

const DashboardJobAnalytics = () => {
  const rowsWithIndex = [
    {
      first_name: "Jane",
      last_name: "Doe",
      job_name: "Private Equity 2025",
      sub_job_name: "Full-Time Analyst",
      ai_rating: "7.8",
      applied_date: "June 25, 2024",
      email: 'emailexample.com'
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      job_name: "Private Equity 2025",
      sub_job_name: "Full-Time Analyst",
      ai_rating: "7.8",
      applied_date: "June 25, 2024",
      email: 'emailexample.com'
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      job_name: "Private Equity 2025",
      sub_job_name: "Full-Time Analyst",
      ai_rating: "7.8",
      applied_date: "June 25, 2024",
      email: 'emailexample.com'
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      job_name: "Private Equity 2025",
      sub_job_name: "Full-Time Analyst",
      ai_rating: "7.8",
      applied_date: "June 25, 2024",
      email: 'emailexample.com'
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      job_name: "Private Equity 2025",
      sub_job_name: "Full-Time Analyst",
      ai_rating: "7.8",
      applied_date: "June 25, 2024",
      email: 'emailexample.com'
    }
  ];

  const responsiveBarData = [
    {
      job_id: 1,
      job_name: "Private Equity Associate",
      Reviewed: 40,
      "Not Reviewed": 60,
      "Not ReviewedColor": "rgba(238, 238, 238, 1)",
      ReviewedColor: colors[0]
    },
    {
      job_id: 2,
      job_name: "Private Equity Associate",
      Reviewed: 50,
      "Not Reviewed": 50,
      "Not ReviewedColor": "rgba(238, 238, 238, 1)",
      ReviewedColor: colors[1]
    },
    {
      job_id: 3,
      job_name: "Private Equity Associate",
      Reviewed: 60,
      "Not Reviewed": 40,
      "Not ReviewedColor": "rgba(238, 238, 238, 1)",
      ReviewedColor: colors[2]
    }
  ];

  return (
    <div className="dashboard-body">
      <div className="latest-candidates">
        <div className="data-container-title">
          <h2>Latest Candidates</h2>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="latest candidates table">
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: '13px' }}><b>Candidate Name</b></TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: '13px' }}><b>Job Name</b></TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: '13px' }}><b>Rating</b></TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: '13px' }}><b>Applied Date</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsWithIndex.map((row, index) => (
                <TableRow key={index} hover style={{ cursor: "pointer" }}>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                      <span style={{ fontSize: '13px', marginRight: '8px' }}>{index + 1}</span>
                      <div>
                        <span><b>{row.first_name + " " + row.last_name}</b></span>
                        <div style={{ fontSize: '11px' }}>{row.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ fontSize: '12px' }}>{row.job_name}</div>
                    <div style={{ fontSize: '12px' }}>{row.sub_job_name}</div>
                  </TableCell>
                  <TableCell><div style={{ fontSize: '12px', textAlign: 'center' }}>{row.ai_rating}</div></TableCell>
                  <TableCell><div style={{ fontSize: '12px' }}>{row.applied_date}</div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="job-postings">
        <div className="data-container-title">
          <h2>Your Job Postings</h2>
        </div>
        <div style={{ width: 510, height: 370 }}>
          <ResponsiveBar
            margin={{ left: 10, right: 10, bottom: 100 }}
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