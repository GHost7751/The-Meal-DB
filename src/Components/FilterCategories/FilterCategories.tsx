import React, { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import fetchFilterCategory from '../../Service/FetchFilterCategory';
import IFilterCategoryProps from '../../Types/FilterCategories';
import FilterCard from './FilterCard';
import { useParams } from 'react-router-dom';

type NameParams = {
    name : string | undefined;
}

const FilterCategories:FC = () => {
    const [value,setValue] = useState<IFilterCategoryProps[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const {name} = useParams<NameParams>();

 console.log(name)
    const fetchFilter =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchFilterCategory(name))
    }

    console.log(name)
    useEffect(() => {
        fetchFilter()
    },[])

    return (
        <div className='container content'>
        <br />
        <strong>Filter by Category</strong>
        <br />
        <br />
        <div className='movies'>
            
            {value.length ? (value
                .map((filter) => <FilterCard key={filter.idMeal} {...filter} />)

            ) : (
                <Spinner animation={'border'} />
            )
               
        }
         </div>
        <br />
    </div>
    );
};

export default FilterCategories;