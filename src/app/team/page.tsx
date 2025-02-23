'use client'

import Header from "@/components/header/header";
import Hero from "@/app/team/components/hero";
import Card from "@/components/card";
import Separator from "@/components/separator";

const departments = [
    {
        name: "Proiectare",
        href: "team/proiectare",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Mecanica",
        href: "team/mecanica",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Programare",
        href: "team/programare",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "Design",
        href: "team/design",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    },
    {
        name: "PR",
        href: "team/pr",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    }
]

export default function Page() {
    return (
        <div>
            <Header active={"Team"}/>
            <Hero title={"Meet the team"} description={"On this page you can find all of our members and the departments they are divided by."} image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}/>
            <div className="w-full my-24 space-y-24">
                <div className="flex gap-48 justify-center">
                    <Card
                        title={"Mentor"}
                        subtitle={"Andrei Mario IVAN"}
                        image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}
                    />
                    <Card
                        title={"Team Leader"}
                        subtitle={"Ana ACSINTE"}
                        image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"}
                    />
                </div>
                <div>
                    <Separator text={"Departments"}/>
                    <div className="p-24 w-full flex flex-wrap justify-center gap-x-48 gap-y-24">
                        {
                            departments.map((department) => (
                        <Card
                            key={department.name}
                            title={department.name}
                            href={department.href}
                            image={department.image}
                        />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}