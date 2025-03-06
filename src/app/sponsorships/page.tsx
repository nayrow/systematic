import Header from "@/components/header/header";
import Main from "@/app/sponsorships/components/main";
import {getSponsorshipsPage} from "@/lib/sponsorships";

export default async function Page() {
    const sponsorships = await getSponsorshipsPage();

    return (
        <div className="bg-white">
            <Header active={"sponsorships"}/>
            <Main pricing={sponsorships}/>
        </div>
    )
}
