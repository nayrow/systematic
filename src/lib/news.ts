import {NewsPost} from "@/lib/home";
import {notFound} from "next/navigation";


export async function getNewsPostBySlug(slug: string): Promise<NewsPost> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/news-posts?slug=${slug}&populate=hero&populate=hero.image`,{next:{revalidate:1}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const news_post = await res.json()

    if (!news_post) {
        notFound();
    }

    return news_post.data[0];
}