import React from "react";
import {
  AiFillHome,
  AiOutlineUser,
  AiFillMessage,
  AiOutlineHeart,
  AiFillSetting,
  AiOutlineAppstore,
} from "react-icons/ai";
import {
  BiHelpCircle,
  BiCalculator,
  BiCartAlt,
  BiLogOut,
} from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

// import { shoplogout } from "../actions/shopAction";
// import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";

const Sidebar = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const alert = useAlert();

  // const logouttheshop = () => {
  //   dispatch(shoplogout());
  //   // history.push(`/login`);
  //   alert.success("Seller Logout Successfully");
  // };
  return (
    <>
      <div className="sidebar">
        {/* if we need logo in the sidebar
                ::::
                 <div className="logo_content">
                    <div className="logo">
                        <img src={favicon} alt="logo" className="logo" />
                        <AiFillShopping/>
                        <div className="logo_name">
                            Anarkali
                        </div>
                    </div>
                    <AiOutlineBars name='menu' id="btn-sidebar"/>
                </div> */}

        <ul className="nav_list list-unstyled ">
          {/* <li className="dashboard-style">
            <Link to="/" className="link-light">
              <AiOutlineAppstore />
              <span className="links_name">Dash Board</span>
            </Link>
            <span className="tooltip">Dash Board</span>
          </li> */}
          {/* for search 
                    <li>
                        <a href="#">
                            <AiOutlineSearch />
                            <input className="links_name" type="text" placeholder="Search"/>
                        </a>
                        <span className="links_name">Search</span>
                    </li> */}
          <li className="dashboard-style">
            <Link to="/" className="link-light">
              <AiFillHome />
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="/Seller" className="link-light">
              <AiOutlineUser />
            </Link>
            <span className="tooltip">Profile</span>
          </li>
          {/* <li>
                        <Link to="./User" className="link-light">
                            <AiOutlineUser />
                        </Link>
                        <span className="tooltip">User</span>
                    </li> */}
          {/* <li>
            <Link to="/" className="link-light">
              <AiFillMessage />
            </Link>
            <span className="tooltip">Messages</span>
          </li> */}
          <li>
            <Link to="/cart" className="link-light">
              <BiCartAlt />
            </Link>
            <span className="tooltip">Cart</span>
          </li>
          {/* <li>
            <Link to="/" className="link-light">
              <AiOutlineHeart />
            </Link>
            <span className="tooltip">Wished</span>
          </li> */}
          {/* <li>
            <Link to="/" className="link-light">
              <BiCalculator />
            </Link>
            <span className="tooltip">Calculator</span>
          </li>
          <li>
            <Link to="/" className="link-light">
              <AiFillSetting />
            </Link>
            <span className="tooltip">Settings</span>
          </li> */}
          {/* <li>
            <Link to="/" className="link-light">
              <BiHelpCircle />
            </Link>
            <span className="tooltip">Help</span>
          </li> */}
          {/* these two are used just to make a gap/margin for "login" */}
          <li>
            <Link to="/" className="link-light">
              {/* <BiHelpCircle /> */}
            </Link>
            {/* <span className="tooltip">Help</span> */}
          </li>
          <li>
            <Link to="/" className="link-light">
              {/* <BiHelpCircle /> */}
            </Link>
            {/* <span className="tooltip">Help</span> */}
          </li>

          <li className="profile logout-style">
            <Link to="/login" className="link-light">
              <BiLogOut id="log_out" />
            </Link>
            <span className="tooltip ">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
