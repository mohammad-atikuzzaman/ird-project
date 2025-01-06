// import Image from "next/image";
// import React, { useState } from "react";
// import duaIcon from "@/public/duaTitelimg.png";
// import SubCategories from "./SubCategories";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Category = ({ category }) => {
//   const path = usePathname();
//   console.log(path);
//   const {
//     cat_icon,
//     cat_id,
//     cat_name_bn,
//     cat_name_en,
//     id,
//     no_of_dua,
//     no_of_subcat,
//   } = category;

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="rounded-lg mb-4">
//       <Link
//         href={`/dua/${cat_id}`}
//         onClick={toggleAccordion}
//         className={
//           path === `/dua/${cat_id}`
//             ? "bg-gray-200 w-full rounded-lg p-4 flex items-center justify-between"
//             : "w-full rounded-lg p-4 flex items-center justify-between hover:bg-gray-100"
//         }
//       >
//         <section className="flex items-center gap-2">
//           <Image src={duaIcon} alt="icon" />
//           <section className="text-left">
//             <span className="font-bold leading-3">{cat_name_en}</span>
//             <br />
//             <span className="text-sm text-gray-400">
//               Subcategory{no_of_subcat}
//             </span>
//           </section>
//         </section>
//         <p className="border-l pl-2">
//           {no_of_dua}
//           <br />
//           <span className="text-gray-400"> Duas</span>
//         </p>
//       </Link>

//       {isOpen && <SubCategories catId={cat_id} />}
//     </div>
//   );
// };

// export default Category;

"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SubCategories from "./SubCategories";
 
const Category =({category})=> {
  // const path = usePathname();
  // console.log(path);
  const {
    cat_icon,
    cat_id,
    cat_name_bn,
    cat_name_en,
    id,
    no_of_dua,
    no_of_subcat,
  } = category;
  console.log(id)

  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === id}>
        <AccordionHeader onClick={() => handleOpen(id)}>{cat_name_en}</AccordionHeader>
        <AccordionBody>
         <SubCategories catId={cat_id} />
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default Category;