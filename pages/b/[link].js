import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import RedirectToBlog from "../../components/RedirectBlogitem/RedirectBlogitem"
import axios from "axios";
const RedirectToBlogItem = ({ link }) => {
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { id } } = await axios.get(`/api/blog/link/${link}`);
                router.push(`/blog/${id}`);
            } catch (error) {
                router.push(`/`);
            }
        };

        fetchData();
    }, []);
    return (
        <RedirectToBlog />
    )
}



export const getServerSideProps = (ctx) => {
    const { link } = ctx.params;
    return {
        props: {
            link
        }
    }
}
export default RedirectToBlogItem;