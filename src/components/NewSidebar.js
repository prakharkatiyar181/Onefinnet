import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import SparkleAnimation from "../assets/lottie/sparkle.json";

const NewSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({ roles: [] });
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const fetchUserInfo = async () => {
    // Replace with actual API call to fetch user information
    const response = await fetch("/api/user-info");
    const data = await response.json();
    setUserInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const activeHandler = () => {
    setActive(!active);
  };
  const menuHandleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={active ? "new-side-bar collapse" : "new-side-bar"}>
      {!active ? (
        <div className="expended-view">
          <div className="item">
            {url.map((item) =>
              item.subLink.length === 0 ? (
                item.urlLink === "/permission" ? (
                  (userInfo.roles.includes("enterprise-admin") ||
                    userInfo.roles.includes("recruiter-admin")) && (
                    <Link
                      to={item.urlLink}
                      className={
                        location.pathname === item.urlLink
                          ? "top-head active"
                          : "top-head"
                      }
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  )
                ) : (
                  <Link
                    to={item.urlLink}
                    className={
                      location.pathname === item.urlLink ||
                      (location.pathname === "/job-creations" &&
                        item.urlLink === "/jobs") ||
                      (location.pathname === "/candidates/details" &&
                        item.urlLink === "/jobs") ||
                      (location.pathname === "/job/applicants" &&
                        item.urlLink === "/jobs")
                        ? "top-head active"
                        : "top-head"
                    }
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                )
              ) : (
                <Accordion
                  className="menu"
                  disableGutters={true}
                  defaultExpanded={
                    item.subLink
                      ?.map((ind) => ind.linkTitleUrl)
                      .includes(location.pathname) ||
                    location.pathname === "/users/user" ||
                    location.pathname === "/mails/template"
                  }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <div
                      className={
                        location.pathname === item.urlLink
                          ? "title-head active "
                          : "title-head"
                      }
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={"list "}>
                    {item.subLink.map((link) => (
                      <Link
                        to={link.linkTitleUrl}
                        className={
                          location.pathname === link.linkTitleUrl ||
                          (location.pathname === "/users/user" &&
                            link.linkTitleUrl.includes("/users")) ||
                          (location.pathname === "/mails/template" &&
                            link.linkTitleUrl.includes("/mails/template"))
                            ? "a active1"
                            : "a"
                        }
                      >
                        {link.linkTitle}
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </div>
          <div className="request-credit-card">
            <div className="title">
              Use AI to <span>fasten your Hiring</span> process
            </div>
            <div className="sub-title">
              Minimize the need for manual handling in the recruitment process.
            </div>
            <RequestCreditButton />
          </div>
        </div>
      ) : (
        <div className="collapse-view">
          {url.map((item) =>
            item.subLink.length === 0 ? (
              <p
                className={
                  location.pathname === item.urlLink
                    ? "top-head active"
                    : "top-head"
                }
              >
                <Link to={item.urlLink}>{item.icon}</Link>
              </p>
            ) : (
              <>
                <p
                  id="demo-positioned-button"
                  aria-controls={openMenu ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                  className={openMenu ? "button-icon active" : "button-icon"}
                >
                  {item.icon}
                </p>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={openMenu}
                  className="collapse-list-menu"
                  onClose={menuHandleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    style: {
                      marginLeft: "40px",
                    },
                  }}
                >
                  {item.subLink.map((link) => (
                    <MenuItem
                      className={
                        location.pathname === link.linkTitleUrl ? "active" : ""
                      }
                      onClick={() => navigate(link.linkTitleUrl)}
                    >
                      <p>{link.linkTitle}</p>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )
          )}
        </div>
      )}
      <div className="switch" onClick={activeHandler}>
        {active ? (
          <Icon icon="lucide:arrow-right-to-line" className="switch-icon" />
        ) : (
          <Icon icon="lucide:arrow-left-to-line" className="switch-icon" />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle cx="15" cy="15" r="15" fill="white" />
          <circle
            cx="15"
            cy="15"
            r="14.5"
            stroke="black"
            strokeOpacity="0.2"
            strokeDasharray="3 3"
          />
        </svg>
      </div>
    </div>
  );
};

export default NewSideBar;

const url = [
  {
    title: "Home",
    subLink: [],
    icon: <Icon icon="lucide:home" className="icons" />,
    urlLink: "/dashboard",
  },
  {
    title: "Jobs",
    subLink: [],
    icon: (
      <Icon icon="lucide:briefcase" className="icons" width={20} height={20} />
    ),
    urlLink: "/jobs",
  },
  {
    title: "Events",
    subLink: [],
    icon: (
      <Icon
        icon="lucide:calendar-days"
        className="icons"
        width={20}
        height={20}
      />
    ),
    urlLink: "/events",
  },
  {
    title: "Mail",
    subLink: [
      {
        linkTitle: "Mail",
        linkTitleUrl: "/mails?view=inbox",
      },
      {
        linkTitle: "Template",
        linkTitleUrl: "/mails/template?view=list",
      },
    ],
    icon: <Icon icon="lucide:mail" className="icons" width={20} height={20} />,
  },
  {
    title: "Analytics",
    subLink: [],
    icon: (
      <Icon
        icon="lucide:kanban-square"
        className="icons"
        width={20}
        height={20}
      />
    ),
    urlLink: "/analytics",
  },
];

const RequestCreditButton = () => {
  const [animate, setAnimate] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setShowAnimation(true);
      }, 1400);
    }
  }, [animate]);

  return (
    <Button
      className={`request-button ${animate ? "animate" : ""}`}
      variant="contained"
      onClick={() => {
        setAnimate(true);
      }}
    >
      <div className="request-content">
        <Icon icon="lucide:ticket-check" width={18} height={18} />{" "}
        <span>Request for Credits</span>
      </div>
      <div className="sent-content">
        <div className="content-wrapper">
          <Icon icon="heroicons-outline:badge-check" width={18} height={18} />{" "}
          <span>Request Sent</span>
          <div className="sparkle-animation-wrapper">
            {showAnimation && (
              <Lottie
                options={{
                  loop: false,
                  animationData: SparkleAnimation,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => {
                      setShowAnimation(false);
                    },
                  },
                ]}
                height={162}
                width={162}
              />
            )}
          </div>
        </div>
      </div>
    </Button>
  );
};