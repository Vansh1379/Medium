
interface BlogcardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogcardProps) => {
    return (
        <div className='border-b border-slate-200  p-4'>
            <div className='flex'>
                <Avatar name={authorName} size="small" />
                <div className='font-normal pl-2 text-base text-slate-600 flex justify-center flex-col'>
                    {authorName} .
                </div>
                <div className='pl-2 font-extralight text-slate-600 flex justify-center flex-col'>
                    {publishedDate}
                </div>
            </div>
            <div className='text-2xl font-bold pt-2 font-sans flex justify-center flex-col '>
                {title}
            </div>
            <div className='text-xl font-normal text-slate-500 pt-2'>
                {content.slice(0, 100) + "..."}
            </div>
            <div className='text-slate-500 text-sm font-thin pt-2'>
                {`${Math.ceil(content.length / 100)} minute read`}
            </div>
        </div>

    )
}

export const Avatar = ({ name, size = "small" }: { name: string, size: "small" | "big" }) => {
    return <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className="font-xl text-gray-600 dark:text-gray-300 text-center">{name[0]}</span>
    </div>
}

export default BlogCard 