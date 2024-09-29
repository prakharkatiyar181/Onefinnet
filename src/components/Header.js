import { Avatar, IconButton } from "@mui/material";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
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
            <FaRegBell style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <IoSettingsOutline style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <PiDotsNineBold style={{ width: "22px", height: "22px" }} />
          </li>
          <li>
            <IconButton style={{ maxWidth: "40px", maxHeight: "40px" }}>
              <Avatar
                src="https://via.placeholder.com/150" // Replace with a valid image URL
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