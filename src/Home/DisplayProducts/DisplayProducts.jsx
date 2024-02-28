import React from 'react';

const DisplayProducts = ({product}) => {
    const { title, id, image:img, price} = product;
    console.log(product)
    return (
    <div className=''>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='w-8 h-8' alt="Shoes"/></figure>
            <div className="card-body bg-base-200">
                <p className='text-center border-b-gray-500'>{price}</p>
                <h2 className=" text-center inline-block">{title.slice}</h2>
            </div>
        </div>
    </div>
        

    );
};

export default DisplayProducts;