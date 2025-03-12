import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Markdown from "markdown-to-jsx";
import {getContestBySlug} from "@/lib/contests";


export default async function Page({params}: { params: Promise<{slug:string}> }) {
    const contestSlug = (await params)
    const contest = await getContestBySlug(contestSlug.slug)
    return (
        <div>
            <Header active={"Contests"}/>
            <Hero title={contest.name} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contest.image.url}`} description={contest.description}/>
            <div className={"my-24 mx-48 text-lg"}>
                <Markdown>
                    {String(contest.content)}
                </Markdown>
            </div>
        </div>
    )
}