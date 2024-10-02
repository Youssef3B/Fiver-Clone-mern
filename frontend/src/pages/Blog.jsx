import CardBlog from "../components/Blog/CardBlog";

function Blog() {
  return (
    <div className="px-64 my-28 bg-white">
      <h2 className="text-3xl font-bold">Welcome To Our Blog</h2>
      <div className="grid grid-cols-3 gap-8 my-10">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
}
export default Blog;
