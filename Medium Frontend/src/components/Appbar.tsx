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
                <Link to='/publish'>
                    <button type="button" className="text-white mr-10 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
                </Link>

                <Avatar name="vansh" size="big" />
            </div>
        </div>
    )
}

export default Appbar