import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"

const NewSideBar = () => {
  return (
    <div className={"side-bar"}>
        <div className="expended-view">
          <div className="item">
              <Link
                to=""
                className="top-head active"
              >
                {<FaHome />}
                {"Dashboard"}
              </Link>
          </div>
        </div>
    </div>
  );
};

export default NewSideBar;