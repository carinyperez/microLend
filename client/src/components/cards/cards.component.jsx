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
import { ProgressBar } from "@progress/kendo-react-progressbars";
import "./cards.styles.scss";

const Cards = (props) => {
  return (
    <div>
      <Card className="card">
        <CardImage src={props.image} alt="card" />
        <CardTitle>
          {props.title}
          <p>{props.amount}</p>
        </CardTitle>
        <CardBody>{props.desc}</CardBody>
        <div style={{ "text-align": "left" }}>
          <p>AMOUNT LOANED</p>
        </div>
        <span>$50/$100</span>

        <ProgressBar value={props.percentage} />
        <CardActions>
          <button className="k-button k-bare">Share</button>
          <button className="k-button k-flat">
            <span className="k-icon k-i-share" />
          </button>
          <button>{props.button}</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
