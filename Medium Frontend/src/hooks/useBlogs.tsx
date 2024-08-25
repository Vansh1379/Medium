import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`
                    }
                })
                setBlogs(response.data.blogs);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchBlogs();
    }, []);

    return {
        loading,
        blogs
    };
};
