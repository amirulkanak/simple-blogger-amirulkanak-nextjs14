const BlogDetailsPage = async ({ params: { id } }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return (
    <section className="p-5 text-center">
      <h1 className="text-gray-800 text-3xl mb-2">{post.title}</h1>
      <p className="mt-5 mx-auto text-gray-600 text-lg text-balance max-w-3xl leading-relaxed">
        {post.body}
      </p>
    </section>
  );
};

export default BlogDetailsPage;
