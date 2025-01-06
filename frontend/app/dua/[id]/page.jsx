import DuaPage from "@/pages/DuaPage";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:4000/duas?cat_id=${id}`);
  const posts = await data.json();
  return <DuaPage posts={posts} />;
};

export default page;
