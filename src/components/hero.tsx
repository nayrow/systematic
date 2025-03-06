import Image from "next/image";
import {HomeHero} from "@/lib/home";

export default function Hero({ hero }: { hero: HomeHero }) {
    return (
        <div className="bg-gray-900 h-screen">

            <div className="relative h-screen isolate overflow-hidden pt-14">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 -z-10 object-cover"
                >
                    <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.video.url}`} type={hero.video.mime}/>
                </video>
                <div className={"absolute top-0 left-0 h-screen w-screen bg-dark opacity-80 -z-10"}>

                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-light/10 hover:ring-light/20">
                                {hero.featured_article.title}{' '}
                                <a href={hero.featured_article.href} className="font-semibold text-light">
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <Image
                                alt={"logo"}
                                height={1500}
                                width={2830}
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.logo.url}`}
                                className={"w-60 h-60  mx-auto"}
                            />
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                {hero.description}
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href={hero.primary_button.href}
                                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-primary/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    {hero.primary_button.text}
                                </a>
                                <a href={hero.secondary_button.href} className="text-sm/6 font-semibold text-light">
                                    {hero.secondary_button.text} <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}