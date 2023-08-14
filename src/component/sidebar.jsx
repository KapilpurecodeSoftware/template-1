import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <h3 className="sidebar-heading">Main</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item-heading ">
            <span className="material-symbols-outlined sidebarIcon">
              team_dashboard
            </span>
            Dashboard
            <span className="material-symbols-outlined expandMore">
              chevron_right
            </span>
          </li>

          <li className="sidebar-item-heading ">
            <span className="material-symbols-outlined sidebarIcon">
              deployed_code
            </span>
            Apps
            <span className="material-symbols-outlined expandMore">
              expand_more
            </span>
          </li>

          <li className="sidebar-item">Chat</li>
          <li className="sidebar-item-call">
            Calls{" "}
            <span className="material-symbols-outlined expandMore">
              chevron_right
            </span>
          </li>
          <li className="sidebar-item">Calender</li>
          <li className="sidebar-item-contact">Contacts</li>
          <li className="sidebar-item">Email</li>
          <li className="sidebar-item">File Manager</li>
        </ul>
        <h2 className="sidebar-heading">Employees</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item-heading">
            <span className="material-symbols-outlined sidebarIcon">person</span>
            Employees
            <span className="material-symbols-outlined expandMore">
              expand_more
            </span>
          </li>
          <li className="sidebar-item-heading ">
            <span className="material-symbols-outlined sidebarIcon">groups</span>
            Clients
          </li>
          <li className="sidebar-item-heading">
            <span className="material-symbols-outlined sidebarIcon">
              rocket_launch
            </span>
            Projects
            <span className="material-symbols-outlined expandMore ">
              expand_more
            </span>
          </li>
          <li className="sidebar-item-heading">
            <span className="material-symbols-outlined sidebarIcon">
              emoji_events
            </span>
            Leads
          </li>
        </ul>
      </div>
    </div>
  );
}
