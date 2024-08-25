import { useParams } from "react-router-dom"
import { useBlogbyid } from "../../hooks/useBlogs"
import Fullblog from "../../components/Blogs/Fullblog";
import SkeletonFullblog from "../../components/Blogs/SkeletonFullBlog";


const Blogid = () => {
  const { id } = useParams();
  const { loading, blog } = useBlogbyid({
    id: id || ""
  });

  if (loading || !blog) {
    return <SkeletonFullblog />
  }

  return (
    <div className="">
      <Fullblog blog={blog} />
    </div>
  )
}

export default Blogid