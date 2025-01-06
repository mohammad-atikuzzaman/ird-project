"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.png";

const SideNav = () => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/categories?q=${query}`)
      .then((res) => res.json())
      .then((data) =>{
        setCategories(data);
      });
  }, [query]);

  return (
    <aside className="min-w-[20%] h-screen bg-white  m-4 sticky top-0 left-0 rounded-xl overflow-hidden">
      <h2 className="p-4 bg-green-600 text-white text-center">Categories</h2>
      <section className="w-full flex items-center justify-center">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-[95%] mx-auto my-2 border-2 rounded-lg p-3 relative z-10 bg-transparent focus:bg-white"
        />
        <div className="flex items-center absolute text-gray-400 ">
          <Image src={searchIcon} alt="search" />
          <p> Search by Categories</p>
        </div>
      </section>
      <nav className="p-4  min-h-screen ">
        {categories.map((category) => (
          <button className="block" key={category.id}>
            {category.cat_name_bn}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
