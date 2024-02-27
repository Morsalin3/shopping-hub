import React, { useEffect, useState } from 'react';

const DisplayProducts = ({selectedCategory}) => {
    
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
                const data = await response.json();
                setProducts(data);
            }
            catch (error){
                console.error('error fetching products',error)
            }
        };
        fetchProducts();
    },[selectedCategory])
    return (
        <div>
            <h2 className='text-center font-bold py-4'>Products for{selectedCategory}</h2>
            <ul>
                {
                products.map(product => (<li key={product.id}>{product.title}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default DisplayProducts;