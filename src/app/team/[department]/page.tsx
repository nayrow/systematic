import Hero from "@/app/team/components/hero";
import Header from "@/app/components/header/header";

export default async function Page(
    {params}:
    { params: Promise<{ department: string }> }
) {
    const department = (await params).department
    return (
        <div>
            <Header/>
            <Hero/>
        </div>
    )
}