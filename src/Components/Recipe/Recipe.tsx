import React, { FC, useEffect, useState } from 'react';
import {  Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import fetchRecipe from '../../Service/FetchRecipe';
import IRecipeProps from '../../Types/Recipe';
import RecipeCard from './RecipeCard';

type IdRecipe = {
    id : string | undefined;
}


const Recipe:FC = () => {
    const [value,setValue] = useState<IRecipeProps[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const { id } = useParams<IdRecipe>();

    const fetchRec =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchRecipe(id))
    } 

    useEffect(() => {
        fetchRec()
    }, [])

    return (
        <div className='container content'>
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((recipe) => <RecipeCard key={recipe.idMeal} {...recipe} />)

                ) : (
                    <Spinner animation={'border'} />
                )
                   
                }
             </div>
            <br />
        </div>
    );
};

export default Recipe;