import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import IRecipeProps from '../../Types/Recipe';

const RecipeCard:FC<IRecipeProps> = (props) => {
    const {
        idMeal,
        strMeal,
        strArea,
        strInstructions,
        strMealThumb,
        strYoutube,
        strCategory,
        strTags
    } = props;
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
                    <strong> Categories </strong> : {strCategory}
                    <br />
                    <strong> Tags  </strong> : {strTags}
                    <br />
                    <strong> Instructions </strong> : {strInstructions}
                    <br />

                    <iframe
                                title={idMeal}
                                src={`https://www.youtube.com/embed/${strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />

                    </Card.Text>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default RecipeCard;