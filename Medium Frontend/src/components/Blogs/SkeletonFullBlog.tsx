// components/Blogs/SkeletonFullblog.jsx
import Appbar from "../Appbar"

const SkeletonFullblog = () => (
    <div className="animate-pulse">
        <Appbar />
        <div className="flex justify-center h-screen pl-10">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="flex w-full">
                        <div className="pr-2 flex flex-col justify-center">
                            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                            <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-16 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SkeletonFullblog