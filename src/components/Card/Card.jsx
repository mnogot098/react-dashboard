import { UilTimes } from "@iconscout/react-unicons";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//CompactCard
const CompactCard = ({ param, setExpanded }) => {
  const Png = param.png;
  return (
    <motion.div
      className="compactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};
//CompactCard
const ExpandedCard = ({ param, setExpanded }) => {
  const data = {
    options: {
      chart: {
        type: "area",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradiend",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00.000Z",
          "2018-09-19T01:00.000Z",
          "2018-09-19T02:00.000Z",
          "2018-09-19T03:00.000Z",
          "2018-09-19T04:00.000Z",
          "2018-09-19T05:00.000Z",
          "2018-09-19T06:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", color: "white" }}>
        <UilTimes
          onClick={setExpanded}
          style={{ cursor: "pointer", alignSelf: "flex-end", color: "white" }}
        />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default Card;
