export interface Image {
    id: string;
    url: string;
}

export interface Hero {
    title: string;
    subtitle: string;
    image: Image;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: Image;
}

export interface Department {
    id: string;
    name: string;
    description: string;
    image: Image;
    slug: string;
    leaders: TeamMember;
    separator: string;
    team_members: TeamMember[];
}

export interface TeamPage {
    hero: Hero;
    leaders: TeamMember[];
    separator: string;
    departments: Department;
}

export async function getTeamPage(): Promise<TeamPage> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/team?
    populate=hero
    &populate=hero.image
    &populate=leaders
    &populate=leaders.image
    &populate=departments
    &populate=departments.image
    &populate=departments.leaders
    &populate=departments.leaders.image
    &populate=departments.team_members
    &populate=departments.team_members.image
    `,{next:{revalidate:3600}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const home = await res.json()

    return home.data;
}