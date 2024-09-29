import { Avatar, IconButton } from "@mui/material";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <p>
          <b>
            OneFinnet
          </b>
        </p>
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
            <IconButton
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            >
            <Avatar
              src={
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fman-person-icon%2F&psig=AOvVaw0XvyJtwTbRlO3Wbz5r-cdA&ust=1727633991141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCf5KWg5ogDFQAAAAAdAAAAABAE"
              }
              alt="E"
              className="avatar"
            />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;