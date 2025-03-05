export interface FeaturedArticle {
    id: string;
    title: string;
    href: string;
}

export interface Video {
    id: string;
    url: string;
}

export interface Image {
    id: string;
    url: string;
}

export interface HomeButton {
    id: string;
    text: string;
    url: string;
}

export interface HomeHero {
    featured_article : FeaturedArticle;
    video: Video;
    logo: Image;
    description: string;
    primary_button: HomeButton;
    secondary_button: HomeButton;
}

export interface NewsPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    description: string;
    image: Image;
}

export interface News {
    id: string;
    title: string;
    subtitle: string;
    posts: NewsPost[];
}

export interface HomePage {
    hero : HomeHero;
    news : News;
}

export async function getHomePage(): Promise<HomePage> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/home`,{next:{revalidate:3600}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const home = await res.json()

    return home.data;
}