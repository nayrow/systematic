"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Header } from "@/lib/header";


export default function MobileHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [header, setHeader] = useState<Header | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

                if (!STRAPI_URL) {
                    console.error("STRAPI_URL is not defined in environment variables");
                    return;
                }

                const res = await fetch(`${STRAPI_URL}/api/header?populate=logo&populate=links`);

                if (!res.ok) {
                    console.error(`Failed to fetch header: ${res.status} ${res.statusText}`);
                    return;
                }

                const json = await res.json();
                setHeader(json.data);
            } catch (error) {
                console.error("Failed to load header:", error);
            }
        })();
    }, []);




    return (
        <>
            <nav aria-label="Global" className="flex items-center lg:hidden justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        {
                            header?.logo && (
                                <Image
                                    alt=""
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${header?.logo.url}`}
                                    layout="intrinsic"
                                    width={0}
                                    height={0}
                                    className="h-8 w-8"
                                />
                            )
                        }
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
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-light/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {
                                header?.logo && (
                                    <Image
                                        alt=""
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${header?.logo.url}`}
                                        layout="intrinsic"
                                        width={0}
                                        height={0}
                                        className="h-8 w-8"
                                    />
                                )
                            }
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
                                {header?.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-light hover:bg-gray-800"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    )
}