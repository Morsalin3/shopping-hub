import React from 'react';

const CategoryButtons = ({categories, onCategoryClick}) => {

    return (
        <div className='flex justify-between items-center'>
            {
                categories.map(category=>(
                <button className='border-2 border-gray-300 font-medium px-2 py-1 rounded' key={category}  onClick={()=>onCategoryClick(category)}>{category}</button>))
                
            }
        </div>
    );
};


export default CategoryButtons;