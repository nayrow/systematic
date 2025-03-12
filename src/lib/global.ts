export interface Icon {
    id: string;
    url: string;
}

export interface Global {
    siteName: string;
    favicon: Icon;
    siteDescription: string;
}

export async function getGlobal(): Promise<Global> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/global?populate=favicon`,{next:{revalidate:1800}})
    console.log(`${process.env.STRAPI_URL}/api/global?populate=favicon`)
    if (!res.ok) {
        throw new Error('Failed to fetch global from Strapi')
    }

    const global = await res.json()

    return global.data;
}