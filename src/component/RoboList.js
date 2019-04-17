import React from "react";
import RoboItem from "./RoboItem";

const RoboList = props => {
  const roboList = props.robotList.map(robot => {
    return <RoboItem key={robot.id} name={robot.name} />;
  });
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="ui container">
      {roboList}
    </div>
  );
};

export default RoboList;
