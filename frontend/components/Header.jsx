import Image from "next/image";
import React from "react";
import search from "@/public/searchIcon.png";
import profile from "@/public/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 bg-[#E2E2E2] z-10">
      <h2 className="w-[70%] text-3xl font-bold">Dua Page</h2>
      <section className="flex items-center gap-4 justify-between w-[30%]">
        <form className="flex items-center gap-4 bg-white rounded-md pl-4 p-[2px]">
          <input type="text" placeholder="Search by Dua Name" className="border-none outline-none" />
          <button className="bg-gray-100 p-2 rounded-md">
            <Image src={search} alt="search" />
          </button>
        </form>
        <Image src={profile} alt="search" />
      </section>
    </header>
  );
};

export default Header;
