import {Hero} from "@/lib/team";

export interface FeaturedArticle {
    id: string;
    title: string;
    href: string;
}

export interface Video {
    id: string;
    url: string;
    mime: string;
}

export interface Image {
    id: string;
    url: string;
}

export interface HomeButton {
    id: string;
    text: string;
    href: string;
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
    hero: Hero;
    slug: string;
    date: string;
    content: string;
}

export interface News {
    id: string;
    title: string;
    subtitle: string;
    news_posts: NewsPost[];
}

export interface HomePage {
    hero : HomeHero;
    news : News;
}

export async function getHero(): Promise<HomeHero> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/home?populate=hero&populate=hero.featured_article&populate=hero.video&populate=hero.logo&populate=hero.primary_button&populate=hero.secondary_button`,{next:{revalidate:1800}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const home = await res.json()

    return home.data.hero;
}

export async function getNews(): Promise<News> {
    const res = await fetch(`${process.env.STRAPI_URL}/api/home?populate=news&populate=news.news_posts&populate=news.news_posts.hero.image`,{next:{revalidate:1800}})
    if (!res.ok) {
        throw new Error('Failed to fetch home from Strapi')
    }
    const home = await res.json()

    return home.data.news;
}