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
import { Link } from "react-router-dom";
import "../style/sidebar.css";

const Sidebar = () => {
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

        <ul className="nav_list list-unstyled">
          <li>
            <Link to="/" class="link-light">
              <AiOutlineAppstore />
              {/* <span className="links_name">Dash Board</span> */}
            </Link>
            <span className="tooltip">Dash Board</span>
          </li>
          {/* for search 
                    <li>
                        <a href="#">
                            <AiOutlineSearch />
                            <input className="links_name" type="text" placeholder="Search"/>
                        </a>
                        <span className="links_name">Search</span>
                    </li> */}
          <li>
            <Link to="/" class="link-light">
              <AiFillHome />
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="/Seller" class="link-light">
              <AiOutlineUser />
            </Link>
            <span className="tooltip">Seller</span>
          </li>
          {/* <li>
                        <Link to="./User" class="link-light">
                            <AiOutlineUser />
                        </Link>
                        <span className="tooltip">User</span>
                    </li> */}
          <li>
            <Link to="/" class="link-light">
              <AiFillMessage />
            </Link>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <Link to="./Cart" class="link-light">
              <BiCartAlt />
            </Link>
            <span className="tooltip">Cart</span>
          </li>
          <li>
            <Link to="/" class="link-light">
              <AiOutlineHeart />
            </Link>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <Link to="/" class="link-light">
              <BiCalculator />
            </Link>
            <span className="tooltip">Calculator</span>
          </li>
          <li>
            <Link to="/" class="link-light">
              <AiFillSetting />
            </Link>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <Link to="/" class="link-light">
              <BiHelpCircle />
            </Link>
            <span className="tooltip">Help</span>
          </li>
          {/* these two are used just to make a gap/margin for "login" */}
          <li>
            <Link to="/" class="link-light">
              {/* <BiHelpCircle /> */}
            </Link>
            {/* <span className="tooltip">Help</span> */}
          </li>
          <li>
            <Link to="/" class="link-light">
              {/* <BiHelpCircle /> */}
            </Link>
            {/* <span className="tooltip">Help</span> */}
          </li>

          <li class="profile logout-style">
            <Link to="/" class="link-light">
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
