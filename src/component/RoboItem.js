import React from "react";

const RoboItem = props => {
  return (
    <div>
      <img src={`https://robohash.org/${props.name}`} alt={props.username} />
      <p>{props.name}</p>
    </div>
  );
};

export default RoboItem;
