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
                <Card className='card'>
                    <CardImage src={props.image} alt='card'/>
                    <CardTitle>{props.title}
                    <p>{props.amount}</p>
                    </CardTitle>
                    <CardBody>
                        <p>{props.desc}</p>
                        {props.category}
                    </CardBody>
                    <ProgressBar value={props.percentage} />
                    <CardActions>
                        <button>{props.button}</button>
                    </CardActions>
                </Card>   
            </div>
        )
}
    


export default Cards; 




