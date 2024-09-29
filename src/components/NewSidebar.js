import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NewSideBar = () => {
  return (
    <div className={"side-bar"}>
        <div className="expended-view">
          <div className="item">
              <Link
                to=""
                className="top-head active"
              >
                <FiHome style={{ width: "24px", height: "24px" }} />
                {"Dashboard"}
              </Link>
          </div>
        </div>
    </div>
  );
};

export default NewSideBar;