import React from "react";
import ReactDOM from "react-dom";
import {withRouter} from 'react-router-dom'; 

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
        <span>{props.current} / {props.amount}</span>
        <ProgressBar value={props.percentage} />
        <CardActions>
          <button className="k-button k-bare">Share</button>
          <button className="k-button k-flat">
            <span className="k-icon k-i-share" />
          </button>
          <button onClick={ () => props.history.push('/loan-details')}>{props.button}</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withRouter(Cards);
