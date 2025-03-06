'use client'
import { CheckIcon, XMarkIcon as XMarkIconMini } from "@heroicons/react/20/solid";
import { useState } from "react";
import { SponsorshipsPage } from "@/lib/sponsorships";

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Main({ pricing }: { pricing: SponsorshipsPage }) {
    const [selectedTier, setSelectedTier] = useState(pricing.tiers[1]);

    return (
        <main>
            <div className="isolate overflow-hidden">
                <div className="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative z-10">
                            <h1 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                {pricing.title}
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-400 sm:text-xl/8">
                                {pricing.subtitle}
                            </p>
                        </div>
                        <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                            {pricing.tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    onClick={() => setSelectedTier(tier)}
                                    className={classNames(
                                        selectedTier.id === tier.id
                                            ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                                            : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                                        'relative rounded-2xl cursor-pointer'
                                    )}
                                >
                                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                        <h2
                                            className={classNames(
                                                selectedTier.id === tier.id ? 'text-gray-900' : 'text-white',
                                                'text-sm/6 font-semibold',
                                            )}
                                        >
                                            {tier.name}
                                        </h2>
                                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                            <div className="mt-2 flex items-center gap-x-4">
                                                <p className={classNames(selectedTier.id === tier.id ? 'text-gray-900' : 'text-white', 'text-4xl font-semibold tracking-tight')}>
                                                    {tier.price}
                                                </p>
                                                <div className="text-sm">
                                                    <p className={selectedTier.id === tier.id ? 'text-gray-900' : 'text-white'}>USD</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flow-root sm:mt-10">
                                            <ul className={classNames(
                                                selectedTier.id === tier.id
                                                    ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                                                    : 'divide-white/5 border-white/5 text-white',
                                                '-my-2 divide-y border-t text-sm/6 lg:border-t-0',
                                            )}>
                                                {tier.highlights.map((mainFeature) => (
                                                    <li key={mainFeature.id} className="flex gap-x-3 py-2">
                                                        <CheckIcon className={classNames(
                                                            selectedTier.id === tier.id ? 'text-indigo-600' : 'text-gray-500',
                                                            'h-6 w-5 flex-none',
                                                        )} />
                                                        {mainFeature.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative bg-gray-50 lg:pt-14">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                        <section aria-labelledby="comparison-heading" className="lg:block">
                            <h2 id="comparison-heading" className="sr-only">Feature comparison</h2>

                            <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                                {pricing.tiers.map((tier) => (
                                    <div key={tier.id} className="-mt-px">
                                        <div className={classNames(
                                            selectedTier.id === tier.id ? 'border-indigo-600' : 'border-transparent',
                                            'border-t-2 pt-10',
                                        )}>
                                            <p className={classNames(selectedTier.id === tier.id ? 'text-indigo-600' : 'text-gray-900', 'text-sm/6 font-semibold')}>
                                                {tier.name}
                                            </p>
                                            <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="-mt-6 space-y-16">
                                {pricing.sections.map((section) => (
                                    <div key={section.name}>
                                        <h3 className="text-sm/6 font-semibold text-gray-900">{section.name}</h3>
                                        <div className="relative -mx-8 mt-10">
                                            <table className="relative w-full border-separate border-spacing-x-8">
                                                <tbody>
                                                {section.features.map((feature) => (
                                                    <tr key={feature.id}>
                                                        <th className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900">
                                                            {feature.name}
                                                        </th>
                                                        {pricing.tiers.map((tier) => {
                                                            const parsedTiers = typeof feature.tiers === "string"
                                                                ? JSON.parse(feature.tiers)
                                                                : feature.tiers;

                                                            return (
                                                                <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                                                        <span className="relative size-full py-3">
                                                                            {typeof parsedTiers[tier.name] === "string" || typeof parsedTiers[tier.name] === "number" ? (
                                                                                <span className={classNames(selectedTier.id === tier.id ? "font-semibold text-indigo-600" : "text-gray-900")}>
                                                                                    {parsedTiers[tier.name]}
                                                                                </span>
                                                                            ) : parsedTiers[tier.name] === true ? (
                                                                                <CheckIcon aria-hidden="true" className="mx-auto size-5 text-indigo-600"/>
                                                                            ) : (
                                                                                <XMarkIconMini aria-hidden="true" className="mx-auto size-5 text-gray-400"/>
                                                                            )}
                                                                        </span>
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
