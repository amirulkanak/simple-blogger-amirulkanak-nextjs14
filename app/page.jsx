import BlogCard from './components/BlogCard';

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <>
      <h2 className="my-10 text-center text-2xl font-bold mb-4">
        Latest Blog Posts
      </h2>
      <div className="mt-10 px-5 mx-auto flex flex-wrap justify-center gap-4 w-fit">
        {posts.slice(0, 14).map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </>
  );
};

export default Home;
