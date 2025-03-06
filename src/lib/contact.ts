export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon_url: string;
}

export interface ContactPage {
    title: string;
    description: string;
    social_links: SocialLink[];
}

export async function getContactPage(): Promise<ContactPage> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/contact?populate=social_links`,{next:{revalidate:1}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const contact = await res.json()

    return contact.data;
}