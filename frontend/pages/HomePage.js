import DuaCard from "@/components/DuaCard";

const HomePage = async () => {
  const data = await fetch("http://localhost:4000/duas?cat_id=1&subcat_id=2");
  const posts = await data.json();
  return (
    <main className="">
      {posts.map((post, index) => (
        <DuaCard key={post.id} sl={index} post={post} />
      ))}
    </main>
  );
};

export default HomePage;
