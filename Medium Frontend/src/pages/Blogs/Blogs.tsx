import Appbar from '../../components/Appbar'
import BlogCard from '../../components/Blogs/BlogCard'
import { useBlogs } from '../../hooks/useBlogs';

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }

  // Ensure blogs is defined and is an array
  if (!blogs) {
    <Appbar />
    return <div>No blogs available.</div>;
  }

  return (
    <div>
      <Appbar />
      <div className='flex justify-center'>
        <div className=''>
          {blogs.map(blog => <BlogCard
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={'2nd Feb 2024'}
          />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
