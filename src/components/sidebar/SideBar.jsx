import { UilSignOutAlt } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { SideBarData } from "../../Data/Data";
import logo from "../../imgs/logo.png";
import "./SideBar.css";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="SideBar">
      {/* Logo here*/}
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>oo</span>ping
        </span>
      </div>

      {/*menu*/}
      <div className="menu">
        {SideBarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/*Sign out*/}
        <div className="menu-item">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
