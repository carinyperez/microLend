import React from 'react'; 
import ReactDOM from 'react-dom'; 
import 
{Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle,Avata } 
from '@progress/kendo-react-layout';
import './cards.styles.scss'; 

const Cards = (props) => {
        return (
            <div>
                <Card className='card'>
                    <CardImage src={props.image} alt='card'/>
                    <CardTitle>{props.title}
                    <p>{props.amount}</p>
                    </CardTitle>
                    <CardBody>
                        {props.desc}
                    </CardBody>
                    <CardActions>
                        <button>{props.button}</button>
                    </CardActions>
                </Card>   
            </div>

        )
}
    


export default Cards; 




