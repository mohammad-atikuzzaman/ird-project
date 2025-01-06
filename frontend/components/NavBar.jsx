import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const NavBar = () => {
  return (
    <aside className="ml-4 ">
      <nav className="bg-white p-2 sticky top-8 min-h-[80vh] space-y-12 rounded-lg">
        <Image src={logo} alt="logo" />
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
