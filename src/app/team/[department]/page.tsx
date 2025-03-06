import Hero from "@/app/team/components/hero";
import Header from "@/components/header/header";
import Card from "@/components/card";
import Separator from "@/components/separator";
import {getDepartmentBySlug} from "@/lib/team";

export default async function Page({params}: { params: Promise<{department:string}> }) {
    const departmentSlug = (await params)
    const department = await getDepartmentBySlug(departmentSlug.department)

    return (
        <div>
            <Header active={"Team"}/>
            <Hero title={department.hero.title} description={department.hero.subtitle}
                  image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${department.hero.image.url}`}/>
            <div className="w-full my-24 flex justify-center space-y-24">
                <Card title={department.leader.role} subtitle={department.leader.name} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${department.leader.image.url}`}/>
            </div>

            <Separator text={"Members"}/>

            <div className="p-24 w-full flex flex-wrap justify-center gap-24">
                {
                    department.team_members.map((member) => (
                        <Card
                            key={member.id}
                            title={member.name}
                            image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.image.url}`}
                        />
                    ))
                }
            </div>

        </div>
    )
}