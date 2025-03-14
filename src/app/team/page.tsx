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
                            image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${leader.image.url}`}
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
