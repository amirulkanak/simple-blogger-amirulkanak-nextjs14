import Link from 'next/link';

const BlogDetailsPage = async ({ params: { id } }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return (
    <section className="p-5 text-center max-w-fit mx-auto border border-gray-300 rounded-lg shadow-md mt-20">
      <h1 className="text-gray-800 text-3xl mb-2">{post.title}</h1>
      <p className="mt-5 mx-auto text-gray-600 text-lg text-balance max-w-3xl leading-relaxed">
        {post.body}
      </p>
      <button className="mt-5 rounded-md bg-gray-300 hover:bg-gray-600 hover:text-gray-200 duration-300 p-2">
        <Link href="/">Back</Link>
      </button>
    </section>
  );
};

export default BlogDetailsPage;
