import Hero from "@/app/team/components/hero";
import Header from "@/components/header/header";
import ContestCard from "@/app/contests/components/contestCard";
import {getContestsPage} from "@/lib/contests";

export default async function Page() {
    const contests = await getContestsPage();
    return (
        <div>
            <Header active={"Contests"}/>
            <Hero title={"Contests"} description={"Here you can find the contest we attended to"} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contests.hero.image.url}`}/>
            {contests.contests.map((contest) => (
                <ContestCard key={contest.id} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contest.image.url}`} name={contest.name} date={contest.date} href={contest.slug}/>
            ))}
        </div>
    )
}