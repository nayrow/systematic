export interface Highlight {
    id: string;
    name: string;
}

export interface Tier {
    id: string;
    name: string;
    description: string;
    price: number;
    highlights: Highlight[];
}

export interface Feature {
    id: string;
    name: string;
    tiers: Record<string, string | number | boolean>;
}

export interface Section {
    id: string;
    name: string;
    features: Feature[];
}

export interface SponsorshipsPage{
    title: string;
    subtitle: string;
    tiers: Tier[];
    sections: Section[];
}


export async function getSponsorshipsPage(): Promise<SponsorshipsPage> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/sponsorhip?populate=tiers&populate=tiers.highlights&populate=sections&populate=sections.features`,{next:{revalidate:1}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const sponsorships = await res.json()

    return sponsorships.data;
}