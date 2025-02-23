import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Markdown from "markdown-to-jsx";

const article = {
    title: "Article 1",
    description: "This is the first article we wrote. We hope you enjoy it!",
    image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, aliquam mi vel, ultricies mi. Proin nec justo"
}

export default function Page() {
    return (
        <div>
            <Header active={"News"}/>
            <Hero title={article.title} image={article.image.src} description={article.description}/>
            <div className={"my-24 mx-48 text-lg"}>
                <Markdown>
                    {article.text}
                </Markdown>
            </div>
        </div>
    )
}