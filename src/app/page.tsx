'use client'

import Hero from "@/components/hero";
import Recent from "@/components/recent";
import Header from "@/components/header/header";

export default function Home() {
    return (
        <main>
            <Header active={"Home"}/>
            <Hero/>
            <Recent/>
        </main>
    )
}
