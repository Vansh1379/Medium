import { Link } from "react-router-dom"
import { Avatar } from "./Blogs/BlogCard"

const Appbar = () => {
    return (
        <div className='border-b flex justify-between px-10 py-2 cursor-pointer'>
            <Link to='/blogs'>
                <div className='font-serif font-medium text-2xl flex justify-center flex-col'>
                    Medium
                </div>
            </Link>
            <div className="">
                <Avatar name="vansh" size="big" />
            </div>
        </div>
    )
}

export default Appbar