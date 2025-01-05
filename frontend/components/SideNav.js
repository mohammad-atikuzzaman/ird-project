import React from 'react';

const SideNav = async () => {
    const data = await fetch('http://localhost:4000/categories')
    const categories = await data.json()
    return (
        <aside className='bg-white m-4 p-4'>
            {categories.map(category=> <button className='block' key={category.id}>{category.cat_name_bn}</button>)}
        </aside>
    );
};

export default SideNav;