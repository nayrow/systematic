import Hero from "@/app/team/components/hero";
import Header from "@/components/header/header";
import ContestCard from "@/app/contests/components/contestCard";

const contests= [
    {
        name: "Contest 1",
        date: "2021-06-01",
        href: "contests/contest-1",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Contest 2",
        date: "2021-06-01",
        href: "contests/contest-2",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Contest 3",
        date: "2021-06-01",
        href: "contests/contest-3",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Contest 4",
        date: "2021-06-01",
        href: "contests/contest-4",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    }
]

export default function Page() {
    return (
        <div>
            <Header active={"Contests"}/>
            <Hero title={"Contests"} description={"Here you can find the contest we attended to"} image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}/>
            {contests.map((contest) => (
                <ContestCard key={contest.href} image={contest.image} name={contest.name} date={contest.date} href={contest.href}/>
            ))}
        </div>
    )
}