import Hero from "@/app/team/components/hero";
import Header from "@/components/header/header";
import ContestCard from "@/app/contests/components/contestCard";
import {getContestsPage} from "@/lib/contests";

export default async function Page() {
    const contests = await getContestsPage();
    return (
        <div>
            <Header active={"Contests"}/>
            <Hero title={"Contests"} description={"Here you can find the contest we attended to"} image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}/>
            {contests.contests.map((contest) => (
                <ContestCard key={contest.id} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contest.image.url}`} name={contest.name} date={contest.date} href={contest.slug}/>
            ))}
        </div>
    )
}