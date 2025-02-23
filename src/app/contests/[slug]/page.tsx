import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Markdown from "markdown-to-jsx";

const contest = {
    name: "Contest 1",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
    description: "This is the first contest we attended to. We had a lot of fun and we learned a lot of things.",
    text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

export default function Page() {
    return (
        <div>
            <Header active={"Contests"}/>
            <Hero title={contest.name} image={contest.image} description={contest.description}/>
            <div className={"my-24 mx-48 text-lg"}>
                <Markdown>
                    {contest.text}
                </Markdown>
            </div>
        </div>
    )
}