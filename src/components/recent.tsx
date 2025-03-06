import Image from "next/image";
import {News} from "@/lib/home";

export default function Recent({news}: { news: News }) {
    console.log(news.news_posts)
    return (
        <div className="bg-light dark:bg-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">{news.title}</h2>
                    <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">{news.subtitle}</p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {news.news_posts.map((post) => (
                            <a key={post.id} href={`news/${post.slug}`}>
                                <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                                    <div
                                        className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                        <Image
                                            alt=""
                                            layout="intrinsic"
                                            width={400}
                                            height={400}
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.hero.image.url}`}
                                            className="absolute inset-0 aspect-square rounded-2xl bg-gray-50 dark:bg-gray-900 object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10"/>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.date} className="text-gray-500">
                                                {post.date}
                                            </time>
                                        </div>
                                        <div className="group relative max-w-xl">
                                            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 ">
                                                {post.hero.title}
                                            </h3>
                                            <p className="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">{post.hero.subtitle}</p>
                                        </div>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
