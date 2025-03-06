import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Markdown from "markdown-to-jsx";
import {getNewsPostBySlug} from "@/lib/news";

export default async function Page({params}: { params: Promise<{slug:string}> }) {
    const slug = (await params).slug
    const post = await getNewsPostBySlug(slug)
    return (
        <div>
            <Header active={"News"}/>
            <Hero title={post.hero.title} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.hero.image.url}`} description={post.hero.subtitle}/>
            <div className={"my-24 mx-48 text-lg"}>
                <Markdown>
                    {post.content}
                </Markdown>
            </div>
        </div>
    )
}