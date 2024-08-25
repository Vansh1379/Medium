import axios from "axios"
import Appbar from "../../components/Appbar"
import { BACKEND_URL } from "../../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigte = useNavigate();

    return (
        <div className="">
            <Appbar />
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 " placeholder="title" />

                    <TextEditor onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                    <div className="mt-4">
                        <button onClick={async () => {
                            const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                title,
                                content: description
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem("token")
                                }
                            });
                            navigte(`/blog/${res.data.id}`);
                        }} type="submit" className="inline-flex pt-4 items-center px-5 py-2.5 text-sm font-medium text-center text-white
             bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publish

const TextEditor = ({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return <div className="mt-2">
        <div className="w-full mb-4  mt-4">
            <div className="flex items-center justify-between  border">
                <div className="my-3 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea id="editor" rows={8} onChange={onChange} className="block focus:outline-none pl-2 pt-2 w-full px-0 text-sm text-gray-800 bg-white border-0"
                        placeholder="Write an article..." required ></textarea>
                </div>
            </div>
        </div>
    </div>
}