import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string
    }
}

export const useBlogbyid = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(response => {
                    setBlog(response.data.blog);
                    setLoading(false);
                })
        } catch (e) {
            console.error(e);
        }
    }, [id]); 

    return {
        loading,
        blog
    };
}




export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(response => {
                    setBlogs(response.data.list);
                    setLoading(false);
                })
        } catch (e) {
            console.error(e);
        }
    }, []);

    return {
        loading,
        blogs
    };
};
