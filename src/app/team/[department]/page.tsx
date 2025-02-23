import Hero from "@/app/team/components/hero";
import Header from "@/components/header/header";
import Card from "@/components/card";
import Separator from "@/components/separator";

export default async function Page() {
    // const departmentSlug = (await params).department
    const department = {
        name: "Proiectare",
        href: "team/proiectare",
        hero: {
            title: "Proiectare",
            description: "This is the department of design. Here we create the most beautiful and efficient designs for our robots.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        },
        leader: {
            name: "Mihai Andrei",
            role: "Department Leader",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        },
        members: [
            {
                name: "Andrei Mario IVAN",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            },
            {
                name: "Andrei Mario IVA",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            },
            {
                name: "Andrei Mario IV",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            },
            {
                name: "Andrei Mario I",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            }
        ],
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    }
    return (
        <div>
            <Header active={"Team"}/>
            <Hero title={department.hero.title} description={department.hero.description}
                  image={department.hero.image}/>

            <div className="w-full my-24 flex justify-center space-y-24">
                <Card title={department.leader.role} subtitle={department.leader.name} image={department.leader.image}/>
            </div>

            <Separator text={"Members"}/>

            <div className="p-24 w-full flex flex-wrap justify-center gap-24">
                {
                    department.members.map((member) => (
                        <Card
                            key={member.name}
                            title={member.name}
                            image={member.image}
                        />
                    ))
                }
            </div>

        </div>
    )
}