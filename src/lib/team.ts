import { notFound } from "next/navigation";

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
    hero: Hero;
    description: string;
    image: Image;
    slug: string;
    leader: TeamMember;
    separator: string;
    team_members: TeamMember[];
}

export interface TeamPage {
    hero: Hero;
    leaders: TeamMember[];
    separator: string;
    departments: Department[];
}

export async function getTeamPage(): Promise<TeamPage> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/team?populate=hero&populate=hero.image&populate=leaders&populate=leaders.image&populate=departments&populate=departments.image&populate=departments.leader&populate=departments.leader.image&populate=departments.team_members&populate=departments.team_members.image&populate=departments.hero&populate=departments.hero.image`, {next: {revalidate:1800}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const team = await res.json()

    return team.data;
}

export async function getDepartmentBySlug(slug: string): Promise<Department> {
    const teamPage = await getTeamPage();

    const department = teamPage.departments.find(dep => dep.slug === slug);

    if (!department) {
        notFound();
    }

    return department;
}
