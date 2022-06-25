import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import IPropsSRM from '../../Types/SRMProps'

const SRMCard:FC<IPropsSRM> = (props) => {
    const {
        idMeal,
        strMeal,
        strArea,
        strInstructions,
        strMealThumb,
        strYoutube,
    } = props
    return (
        <div>
            <Card style={{ width: '29rem', marginLeft : '350px' , borderRadius : '2px solid black'}} key={idMeal}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        <br />
                    <strong> Area </strong> : {strArea}
                    <br />
                    <strong> Instructions </strong> : {strInstructions}


                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SRMCard;