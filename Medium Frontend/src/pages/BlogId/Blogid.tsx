import { useParams } from "react-router-dom"
import { useBlogbyid } from "../../hooks/useBlogs"
import Fullblog from "../../components/Blogs/Fullblog";


const Blogid = () => {
  const { id } = useParams();
  const { loading, blog } = useBlogbyid({
    id: id || ""
  });

  if (loading || !blog) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div className="">
      <Fullblog blog={blog} />
    </div>
  )
}

export default Blogid