import { Avatar, IconButton } from "@mui/material";
import { FiBell } from "react-icons/fi";
import { PiGearSixBold } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="left" style={{ alignItems: "center", display: "flex"}}>
        <img 
          src={require('../assets/img/logo.png')} 
          alt="logo"   
          style={{ width: "25px", height: "auto", marginRight: "10px" }} // Inline style (optional)
        />
        <b>Onefinnet</b>
      </div>
      <div className="right">
        <ul>
          <li>
            <FiSearch style={{ width: "22px", height: "22px" }} />
            Start Searching
          </li>
          <li>
            <FiBell  style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <PiGearSixBold style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <PiDotsNineBold style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <IconButton style={{ maxWidth: "40px", maxHeight: "40px" }}>
              <Avatar
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2283" // Replace with a valid image URL
                alt="User Avatar"
                className="avatar"
              />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;