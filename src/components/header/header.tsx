import Image from "next/image";
import MobileHeader from "@/components/header/mobile";
import {getHeader} from "@/lib/header";


export default async function Header({active}: { active: string }) {
    const header = (await getHeader())
    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="hidden lg:flex items-center  justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src={`${process.env.STRAPI_URL}${header.logo.url}`}
                                layout="intrinsic"
                                width={0}
                                height={0}
                                className="h-8 w-8"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {header.links.map((link) => {
                            if (active === link.name) {
                                return (
                                    <a key={link.name} href={link.href} className="text-base/6 underline underline-offset-2 font-bold text-light">
                                        {link.name}
                                    </a>
                                );
                            }
                            return (
                                <a key={link.name} href={link.href} className="text-sm/6 font-semibold text-light">
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
            </header>
            <MobileHeader/>
        </>
    )
}