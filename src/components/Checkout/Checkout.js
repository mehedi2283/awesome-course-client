import React from 'react';
import { useLoaderData, } from 'react-router-dom';

const Checkout = () => {
    const checkOut = useLoaderData()
    console.log(checkOut)
    return (
        <div>
           <h1> {checkOut.category_name}</h1>
        </div>
    );
};

export default Checkout;