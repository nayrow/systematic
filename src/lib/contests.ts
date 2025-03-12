import {notFound} from "next/navigation";

export interface Image {
    id: string;
    url: string;
}

export interface Hero {
    title: string;
    subtitle: string;
    image: Image;
}

export interface RichText {
    id: string;
    body: string;
}

export interface Contest {
    id: string;
    name: string;
    description: string;
    date: string;
    image: Image;
    slug: string;
    content: RichText;
}

export interface ContestsPage {
    hero: Hero;
    contests: Contest[];
}

export async function getContestsPage(): Promise<ContestsPage> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/contests-page?populate=hero&populate=hero.image&populate=contests&populate=contests.image&populate=contests`,{next:{revalidate:1800}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const contests = await res.json()

    return contests.data;
}

export async function getContestBySlug(slug: string): Promise<Contest> {
    const contestsPage = await getContestsPage();

    console.log(slug);

    const contest = contestsPage.contests.find(dep => dep.slug === slug);

    if (!contest) {
        notFound();
    }

    return contest;
}