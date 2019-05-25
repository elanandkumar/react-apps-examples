import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      {robots.map(robot => (
        <Card
          id={robot.id}
          key={robot.id}
          name={robot.name}
          email={robot.email}
          username={robot.username}
        />
      ))}
    </React.Fragment>
  );
};

export default CardList;
