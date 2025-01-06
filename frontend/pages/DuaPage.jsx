import DuaCard from "@/components/DuaCard";

const DuaPage = async ({ posts }) => {
  return (
    <main className="">
      {posts?.map((post, index) => (
        <DuaCard key={index} sl={index} post={post} />
      ))}
    </main>
  );
};

export default DuaPage;
