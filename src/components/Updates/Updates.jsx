import React from "react";
import { UpdatesData } from "../../Data/Data";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="updates">
      <h3>Updates</h3>
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}&nbsp;</span>
                <span>{update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
