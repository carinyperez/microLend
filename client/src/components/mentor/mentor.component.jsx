import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle,
  Avatar,
} from "@progress/kendo-react-layout";
import "./mentor.styles.scss";

const Mentor = (props) => {
  return (
    <div>
      <Card className="card">
        <CardImage src={props.image} alt="card" />
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardBody>
          <p>{props.desc}</p>
          {props.category}
        </CardBody>
        <CardActions>
          <button>{props.button}</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mentor; 
