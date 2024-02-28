import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const Products = ({selectedCategory}) => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const endpoint = selectedCategory === "all categories"? 'products':`products/category/${selectedCategory}`;
                const response = await fetch(`https://fakestoreapi.com/${endpoint}`);
                const data = await response.json();
                setProducts(data);
            }
            catch (error){
                console.error('error fetching products',error)
            }
            finally{
                setLoading(false);
            }
        };
        fetchProducts();
    },[selectedCategory])
    return (
        <div>
            { loading?  (<p className='text-center py-8'>Loading...</p>) 
            :
            (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                products.map(product => (<DisplayProducts
                    key={product.id}
                    product={product}
                    ></DisplayProducts>
                ))
                }
            </div>
            )}
               
          
        </div>
    );
};

export default Products;