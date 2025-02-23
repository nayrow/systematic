import Image from "next/image";

const news = {
    title: "News",
    subtitle : "Here are our latest ativities"
}

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
]

export default function Recent() {
    return (
        <div className="bg-light dark:bg-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">{news.title}</h2>
                    <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">{news.subtitle}</p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        alt=""
                                        layout="intrinsic"
                                        width={400}
                                        height={400}
                                        src={post.imageUrl}
                                        className="absolute inset-0 aspect-square rounded-2xl bg-gray-50 dark:bg-gray-900 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 ">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
