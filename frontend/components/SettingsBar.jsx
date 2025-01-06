import Image from "next/image";
import React from "react";

import language from "@/public/languase.png";

const SettingsBar = () => {
  return (
    <aside className="bg-white m-4 p-4 min-w-[15%] rounded-xl h-screen sticky top-[6rem]">
      <button className="btn">
        <Image src={language} alt=""/>
        <span> Layout Settings</span>{" "}
      </button>
    </aside>
  );
};

export default SettingsBar;
