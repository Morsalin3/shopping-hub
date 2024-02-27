import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [categories, setCategories] = useState([]);

    // console.log(categories)

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res =>setCategories(res.data))
        .catch(error =>{
            console.error(error)
        });
    },[])
    return (
        <div>
            <div className='relative'>
                <input type="text" className="w-full py-2 ps-12 border-none focus:outline-none " placeholder="Search" />
                <button className='absolute top-2 start-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-5 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </button>
            </div>

                {/* category button start here  */}

            <div>

            </div>
                            
                {/* category button end here  */}
            
        </div>
    );
};

export default Products;