import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import Home from '../Home/Home/Home';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service]=useServiceDetail(serviceId);
   

    return (
        <div className='w-96 mx-auto mt-16'>
            <div class="p-16 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           <img src={service.img} alt=""/>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
           <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
            <div className='text-center'>
                <Link to="/">
                    <button className=''>Back to Home</button>
                </Link>
            </div>
        </div>
       
        </div>
    );
};

export default ServiceDetail;