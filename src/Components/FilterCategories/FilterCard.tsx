import React, { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IFilterCategoryProps from '../../Types/FilterCategories';

const FilterCard:FC<IFilterCategoryProps> = (props) => {
    const {
        strMeal,
        strMealThumb,
        idMeal
    } = props;


    return (
        <div>
            <Card style={{ width: '18rem' }} key={idMeal}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Link to={`/Recipe/${idMeal}`} >
                   <Button> Watch category</Button>
                </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FilterCard;