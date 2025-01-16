import Image from "next/image";
import logo from "../../../public/logo.png";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useState} from "react";
const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Sponsorships', href: '#' },
    { name: 'Resources', href: '#' },
]

export default function Hero () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-gray-900 h-screen">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
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
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
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
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-light/10">
                        <div className="flex items-center justify-between">
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
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-light hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-light hover:bg-gray-800"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative h-screen isolate overflow-hidden pt-14">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 -z-10 object-cover"
                >
                    <source src="/video.mp4" type="video/mp4"/>
                </video>
                <div className={"absolute top-0 left-0 h-screen w-screen bg-dark opacity-80 -z-10"}>

                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-light/10 hover:ring-light/20">
                                Announcing our next competition.{' '}
                                <a href="#" className="font-semibold text-light">
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-light sm:text-7xl">
                                SySTEMatic
                            </h1>
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                University robotics team from Romania who wants to conquer the robotics world and
                                innovate with their creativity.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-primary/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Sponsor Us
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-light">
                                    Meet the team <span aria-hidden="true">→</span>
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