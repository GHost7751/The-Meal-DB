import React, { FC, useEffect, useState } from 'react';
import fetchCategories from '../../Service/FetchCategories';
import ICategoriesProps from '../../Types/CategoriesProps'
import Spinner from '../Spinner/Spinner';
import CategoriesCard from './CategoriesCard';

const Categories:FC = () => {
    const [value,setValue] = useState<ICategoriesProps[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const fetchCat =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchCategories())
    }

    useEffect(() => {
        fetchCat()
    }, [])
    return (
        <div className='container content'>
        <br />
        <strong>List all meal categories</strong>
        <br />
        <br />
        <div className='movies'>
            
            {value.length ? (value
                .map((cat) => <CategoriesCard key={cat.idCategory} {...cat} />)

            ) : (
                <Spinner />
            )
               
            }
         </div>
        <br />
    </div>
    );
};

export default Categories;