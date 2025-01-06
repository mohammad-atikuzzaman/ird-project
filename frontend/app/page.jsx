import DuaPage from "@/pages/DuaPage";

export default async function Home() {
  const data = await fetch("http://localhost:4000/duas?cat_id=1&subcat_id=");
  const posts = await data.json();
  return <DuaPage posts={posts} />;
}
