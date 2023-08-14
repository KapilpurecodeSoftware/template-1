import React, { useState } from "react";
import "../App.css";
import "./firstComponent.css";
import USA from "../assets/icon/usa.png";
import USER from "../assets/icon/user.png";

export default function FirstComponent() {
  return (
    <>
      {/* <nav classNameName="flex items-center justify-between bg-gray-800 text-white p-4">
        <div classNameName="logo">My Website</div>
        <ul classNameName="menu flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li style={{marginRight:"15px"}}>Admin</li>{" "}
        
        </ul>
      </nav> */}

      <nav className="navbar">
        <div className="logo">
          <img src="dummy_logo.png" alt="Logo" />
          <div className="company-name">Company Name</div>
        </div>
        <div className="navbar-items">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="icons  ">
            <div className=" flagImg ">
              <img src={USA} className="usaFlag" />
              <span>english</span>
              <span
                className="material-symbols-outlined "
                style={{ width: "20px", marginRight: "-30px" }}
              >
                expand_more
              </span>
            </div>

            <span
              className="material-symbols-outlined"
              style={{ marginLeft: "50px" }}
            >
              notifications
            </span>

            <div className="icon" style={{ marginRight: "10px" , height:"5px" , width:"17px" }}>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                id="IconChangeColor"
                height="22"
                width="22"
              >
                <path
                  fill="currentColor"
                  d="m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
                  id="mainIconPathAttribute"
                  stroke-width="0"
                  stroke="#ff0000"
                  filter="url(#shadow)"
                ></path>
                <filter id="shadow">
                  <feDropShadow
                    id="shadowValue"
                    stdDeviation="0.2"
                    dx="0"
                    dy="0"
                    flood-color="black"
                  ></feDropShadow>
                </filter>
                <filter id="shadow">
                  <feDropShadow
                    id="shadowValue"
                    stdDeviation=".5"
                    dx="0"
                    dy="0"
                    flood-color="black"
                  ></feDropShadow>
                </filter>
              </svg>
            </div>
            <div className="flagImg">
              <img src={USER} style={{ width: "20px", marginRight: "3px" }} />
              <span className="" style={{ marginRight: "0px" }}>
                admin
              </span>
              <span class="material-symbols-outlined ">expand_more</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
