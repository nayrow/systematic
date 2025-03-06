import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Card from "@/components/card";
import Separator from "@/components/separator";
import {getTeamPage} from "@/lib/team";

export default async function Page() {
    const team = await getTeamPage();
    return (
        <div>
            <Header active={"Team"}/>
            <Hero title={team.hero.title} description={team.hero.subtitle}
                  image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${team.hero.image.url}`}/>
            <div className="w-full my-24 space-y-24">
                <div className="flex gap-48 justify-center">
                    {team.leaders.map((leader) => (
                        <Card
                            key={leader.id}
                            title={leader.role}
                            subtitle={leader.name}
                            image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}
                        />
                    ))}
                </div>
                <div>
                    <Separator text={team.separator}/>
                    <div className="p-24 w-full flex flex-wrap justify-center gap-x-48 gap-y-24">
                        {
                            team.departments.map((department) => (
                                <Card
                                    key={department.id}
                                    title={department.name}
                                    href={`team/${department.slug}`}
                                    image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${department.image.url}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}