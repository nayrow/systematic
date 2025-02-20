'use client'

import Header from "@/app/components/header";
import Hero from "@/app/team/components/hero";
import Image from "next/image";

export default function Page(){
    return (
        <div>
            <Header/>
            <Hero/>
            <div className="w-full my-24">
                <div className="flex gap-48 justify-center">
                    <div className="w-1/5 h-[400px] relative flex flex-col justify-end">
                        <Image
                            alt="Scenic view"
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            width={2830}
                            height={1500}
                            className="absolute inset-0 -z-10 object-cover w-full h-full rounded-xl"
                            priority
                        />
                        <div className={"w-full my-8 flex flex-col gap-2 items-center"}>
                            <p className={"text-2xl font-bold"}>Mentor</p>
                            <p>Andrei Mario IVAN</p>
                        </div>
                    </div>
                    <div className="w-1/5  h-[400px] relative">
                        <Image
                            alt="Scenic view"
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            width={2830}
                            height={1500}
                            className="absolute inset-0 -z-10 object-cover w-full h-full rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}