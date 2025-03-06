import Hero from "@/components/hero";
import Recent from "@/components/recent";
import Header from "@/components/header/header";
import {getHero, getNews} from "@/lib/home";

export default async function Home() {
    const hero = await getHero();
    const news = await getNews();
    return (
        <main>
            <Header active={"Home"}/>
            <Hero hero={hero}/>
            <Recent news={news}/>
        </main>
    )
}
