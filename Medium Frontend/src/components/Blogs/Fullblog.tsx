import { Blog } from "../../hooks/useBlogs"
import Appbar from "../Appbar"
import { Avatar } from "./BlogCard"

const Fullblog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="">
            <Appbar />
            <div className="flex  justify-center h-screen pl-10">
                <div className="grid grid-cols-12 px-10 w-full pt-12  max-w-screen-2xl">
                    <div className="col-span-8">
                        <div className="text-5xl font-bold font-serif">
                            {blog.title}
                        </div>
                        <div className="text-base font-medium text-slate-500 pt-3">
                            Posted on "2nd December2024"
                        </div>
                        <div className="pt-6 font-mono text-xl">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className=" font-sans text-lg text-gray-500">
                            Author :-
                        </div>
                        <div className="flex w-full">
                            <div className="pr-2 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "Anonymous"} size="big" />
                            </div>
                            <div className="">
                                <div className="font-mon0 text-xl font-bold ">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className=" pt-2 text-slate-500">
                                    <p> Random ctach prase about the author's ability to grab the user's attention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullblog