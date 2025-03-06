export interface Image {
    id: string;
    url: string;
}

export interface Link {
    id: string;
    name: string;
    href: string;
}

export interface Header {
    logo: Image;
    links: Link[];
}

export async function getHeader(): Promise<Header> {

    const res = await fetch(`${process.env.STRAPI_URL}/api/header?populate=logo&populate=links`, {
        next: { revalidate:1800 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch header from Strapi');
    }

    const header = await res.json();
    return header.data;
}
