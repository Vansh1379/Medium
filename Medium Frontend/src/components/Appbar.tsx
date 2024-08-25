import { Avatar } from "./Blogs/BlogCard"

const Appbar = () => {
    return (
        <div className='border-b flex justify-between px-10 py-2'>
            <div className='font-serif font-medium text-2xl flex justify-center flex-col'>
                Medium
            </div>
            <div className="">
                <Avatar name="vansh" size="big" />
            </div>
        </div>
    )
}

export default Appbar