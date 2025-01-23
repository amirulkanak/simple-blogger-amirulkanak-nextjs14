import BlogCard from './components/BlogCard';

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="px-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 w-fit">
        {posts.slice(0, 14).map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </>
  );
};

export default Home;
