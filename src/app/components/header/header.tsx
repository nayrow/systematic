import Image from "next/image";
import logo from "../../../../public/logo.png";
import MobileHeader from "@/app/components/header/mobile";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#' },
    { name: 'Sponsorships', href: '#' },
    { name: 'Resources', href: '#' },
]

export default function Header() {
    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="hidden lg:flex items-center  justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src={logo}
                                layout="intrinsic"
                                width={0}
                                height={0}
                                className="h-8 w-8"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-light">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
            </header>
            <MobileHeader/>
        </>
    )
}