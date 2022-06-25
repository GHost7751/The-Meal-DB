import React, { FC, useEffect, useState } from 'react';
import FetchSingleRandom from '../../Service/FetchSingleRandom';
import IPropsSRM from '../../Types/SRMProps';
import Spinner from '../Spinner/Spinner';
import SRMCard from './SRMCard';


const SRM:FC = () => {
    const [value,setValue] = useState<IPropsSRM[]>([])
    const [loading,setLoading] = useState<boolean>(false)

    const fetchSingleRandom =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await FetchSingleRandom())
    }


    useEffect(() => {
        fetchSingleRandom()
    },[])


    return (
            <div className='container content'>
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((meal) => <SRMCard key={meal.idMeal} {...meal} />)

                ) : (
                    <Spinner />
                )
                   
                }
             </div>
            <br />
        </div>
    );
};

export default SRM;