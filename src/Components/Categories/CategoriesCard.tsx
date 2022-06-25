import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import ICategoriesProps from '../../Types/CategoriesProps'

const CategoriesCard:FC<ICategoriesProps> = (props) => {
    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props
    return (
        <div>
            <Card style={{ width: '23rem' }} key={idCategory}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        <strong> Description </strong> : {strCategoryDescription.slice(0,90)}... 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoriesCard;