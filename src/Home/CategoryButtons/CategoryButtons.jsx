import React, { useEffect, useState } from 'react';

const CategoryButtons = ({categories, onCategoryClick, defaultActiveCategory}) => {
    const [activeCategory, setActiveCategory] = useState(defaultActiveCategory || categories[0]);
        // console.log(categories)
        const handleCategoryClick = (category) => {
            setActiveCategory(category);
            onCategoryClick(category);
        };

        useEffect(()=>{
            onCategoryClick(activeCategory)
        },[])

    return (
        <div className='flex justify-between items-center'>
            {
                categories.map(category=>(
                    <button key={category}
                    className={`${
                        activeCategory === category
                          ?'border-2 border-indigo-400 text-indigo-400 font-medium px-2 py-1 rounded'
                          : 'border-2 border-gray-300 font-medium px-2 py-1 rounded'
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>))
                
            }
        </div>
    );
};


export default CategoryButtons;