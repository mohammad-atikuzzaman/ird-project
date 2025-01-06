import Image from "next/image";
import React from "react";

import language from "@/public/languase.png";
import generalSettings from "@/public/generalSettings.png";
import fontSettings from "@/public/fontSettings.png";
import appreance from "@/public/appreance.png";

const SettingsBar = () => {
  return (
    <aside className="bg-white m-4 p-4 min-w-[15%] rounded-xl h-[70vh] sticky top-[6rem] space-y-4">
      <button className="bg-gray-100  px-2 py-1 flex items-center leading-4 text-xs text-gray-400 font-medium rounded-lg">
        <Image src={language} alt="" className="bg-white p-[2px] rounded-full"/>
        <span > Layout Settings</span>{" "}
      </button>
      <button className="bg-gray-100  px-2 py-1 flex items-center leading-4 text-xs text-gray-400 font-medium rounded-lg">
        <Image src={generalSettings} alt="" className="bg-white p-[2px] rounded-full"/>
        <span > General Settings</span>{" "}
      </button>
      <button className="bg-gray-100  px-2 py-1 flex items-center leading-4 text-xs text-gray-400 font-medium rounded-lg">
        <Image src={fontSettings} alt="" className="bg-white p-[2px] rounded-full"/>
        <span > Font Settings</span>{" "}
      </button>
      <button className="bg-gray-100 text-green-600  px-2 py-1 flex items-center leading-4 text-xs font-medium rounded-lg">
        <Image src={appreance} alt="" className="bg-white p-[2px] rounded-full"/>
        <span > Appearance Settings</span>{" "}
      </button>
    </aside>
  );
};

export default SettingsBar;
