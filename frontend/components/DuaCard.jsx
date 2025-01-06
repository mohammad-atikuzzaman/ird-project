import React from "react";
import Audio from "./Audio";
import Image from "next/image";

import titelImage from "@/public/duaTitelimg.png";

const DuaCard = ({ post, sl }) => {
  const {
    id,
    cat_id,
    subcat_id,
    dua_id,
    dua_name_bn,
    dua_name_en,
    top_bn,
    top_en,
    dua_arabic,
    dua_indopak,
    clean_arabic,
    transliteration_bn,
    transliteration_en,
    translation_bn,
    translation_en,
    bottom_bn,
    bottom_en,
    refference_bn,
    refference_en,
    audio,
  } = post;
  return (
    <article className="rounded-xl text-sm space-y-4 p-4 m-4 bg-white">
      <section className="flex items-center space-x-4">
        <Image src={titelImage} alt="dua image" />
        <h2 className="text-green-500 font-semibold">
          {sl + 1}. {dua_name_en}{" "}
        </h2>
      </section>
      <p>{top_en} </p>
      <p className="text-2xl">{dua_arabic}</p>
      <p className="italic">{transliteration_en}</p>
      <p className="text-gray-600">{translation_en}</p>
      <p>{bottom_bn}</p>
      <p>
        <span className="font-semibold text-green-500">Reference :</span>
        <br />
        <span>{refference_en}</span>
      </p>
      {audio && (
        <div>
          <Audio audio={audio} />
          <div></div>
        </div>
      )}
    </article>
  );
};

export default DuaCard;
