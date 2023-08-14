import React from "react";
import Cards from "./cards";
import "../app.css"

export default function CardHeader() {
  return (
    <>
      <div className="container">
        <nav className="cardHeader">
          <div className="cmpname">Contacts</div>
          <div className="icons">
            <input type="text" className="search-bar" placeholder="Search..." />
            <i className="material-icons search-icon">search</i>
            <div className="icon">
              {/* Your SVG code here */}
              <span class="material-symbols-outlined settingIcon" >
settings
</span>
            </div>
          </div>
        </nav>

        <Cards />
      </div>
    </>
  );
}
