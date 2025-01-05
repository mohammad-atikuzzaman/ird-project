import DuaCard from '@/components/DuaCard';
import SideNav from '@/components/SideNav';
import React from 'react';

const HomePage =async () => {
    const data = await fetch('http://localhost:4000/duas?cat_id=1&subcat_id=2') 
    const posts = await data.json()
    return (
        <div  className="container flex items-center justify-center min-h-screen">
            <main className='flex'>
                <SideNav/>
                <div>
                {
                    posts.map(post => (
                        <DuaCard key={post.id} post={post}/>
                    ))
                }
                </div>
            </main>
        </div>
    );
};

export default HomePage;