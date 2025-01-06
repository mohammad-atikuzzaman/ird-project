import Image from "next/image";
import React, { useState } from "react";
import duaIcon from "@/public/duaTitelimg.png";
import SubCategories from "./SubCategories";
import Link from "next/link";

const Category = ({ category }) => {
  const {
    cat_icon,
    cat_id,
    cat_name_bn,
    cat_name_en,
    id,
    no_of_dua,
    no_of_subcat,
  } = category;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg mb-4">
      <Link href={`/dua/${cat_id}`}
        onClick={toggleAccordion}
        className="w-full rounded-lg p-4 flex items-center justify-between hover:bg-gray-100"
      >
        <section className="flex items-center gap-2">
          <Image src={duaIcon} alt="icon" />
          <section className="text-left">
            <span className="font-bold leading-3">{cat_name_en}</span>
            <br />
            <span className="text-sm text-gray-400">
              Subcategory{no_of_subcat}
            </span>
          </section>
        </section>
        <p className="border-l pl-2">
          {no_of_dua}
          <br/>
          <span className="text-gray-400"> Duas</span>
        </p>
      </Link>

      {isOpen && (
        <SubCategories catId={cat_id}/>
      )}
    </div>
  );
};

export default Category;
