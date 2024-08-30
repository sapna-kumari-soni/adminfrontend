import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../src/context/ThemeContext.jsx";
import {MdOutlineGridView} from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link , useLocation } from "react-router-dom";
import './Sidebar.css';
import { SidebarContext } from "../../src/context/SidebarContext.jsx";
import { IoMdClose } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";


const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const location = useLocation(); 
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="sidebar-brand-text">Trip It Today</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className={`menu-link ${isActive('/') ? 'active' : ''}`}>
                <span className="menu-link-icon">
                  <MdOutlineGridView />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            
            <li className="menu-item">
              <Link to="/chart" className={`menu-link ${isActive('/chart') ? 'active' : ''}`}>
                <span className="menu-link-icon">
                  <FaChartBar />
                </span>
                <span className="menu-link-text">Chart</span>
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/settings" className={`menu-link ${isActive('/settings') ? 'active' : ''}`}>
                <span className="menu-link-icon">
                  <IoSettingsOutline />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/help-support" className={`menu-link ${isActive('/help-support') ? 'active' : ''}`}>
                <span className="menu-link-icon">
                  <FaPeopleArrows />
                </span>
                <span className="menu-link-text">Help and Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;