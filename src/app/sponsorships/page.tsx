'use client'
import {CheckIcon, XMarkIcon as XMarkIconMini} from '@heroicons/react/20/solid'
import Header from "@/components/header/header";
import {useState} from "react";

type PricingTiers = {
    Starter: string | boolean;
    Growth: string | boolean;
    Scale: string | boolean;
};

const pricing = {
    tiers: [
        {
            name: 'Starter',
            id: 'tier-starter',
            href: '#',
            featured: false,
            description: 'Everything you need to get started.',
            price: '$19',
            highlights: ['Custom domains', 'Edge content delivery', 'Advanced analytics'],
        },
        {
            name: 'Growth',
            id: 'tier-growth',
            href: '#',
            featured: false,
            description: 'All the extras for your growing team.',
            price: '$49',
            highlights: ['Custom domains', 'Edge content delivery', 'Advanced analytics', 'Quarterly workshops'],
        },
        {
            name: 'Scale',
            id: 'tier-scale',
            href: '#',
            featured: true,
            description: 'Added flexibility at scale.',
            price: '$99',
            highlights: [
                'Custom domains',
                'Edge content delivery',
                'Advanced analytics',
                'Quarterly workshops',
                'Single sign-on (SSO)',
                'Priority phone support',
            ],
        },
    ],
    sections: [
        {
            name: 'Features',
            features: [
                {name: 'Edge content delivery', tiers: {Starter: true, Growth: true, Scale: true} as PricingTiers},
                {name: 'Custom domains', tiers: {Starter: '1', Growth: '3', Scale: 'Unlimited'} as PricingTiers},
                {name: 'Team members', tiers: {Starter: '3', Growth: '20', Scale: 'Unlimited'} as PricingTiers},
                {name: 'Single sign-on (SSO)', tiers: {Starter: false, Growth: false, Scale: true} as PricingTiers},
            ],
        },
        {
            name: 'Reporting',
            features: [
                {name: 'Advanced analytics', tiers: {Starter: true, Growth: true, Scale: true}},
                {name: 'Basic reports', tiers: {Starter: false, Growth: true, Scale: true}},
                {name: 'Professional reports', tiers: {Starter: false, Growth: false, Scale: true}},
                {name: 'Custom report builder', tiers: {Starter: false, Growth: false, Scale: true}},
            ],
        },
        {
            name: 'Support',
            features: [
                {name: '24/7 online support', tiers: {Starter: true, Growth: true, Scale: true}},
                {name: 'Quarterly workshops', tiers: {Starter: false, Growth: true, Scale: true}},
                {name: 'Priority phone support', tiers: {Starter: false, Growth: false, Scale: true}},
                {name: '1:1 onboarding tour', tiers: {Starter: false, Growth: false, Scale: true}},
            ],
        },
    ],
}

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}


export default function Page() {
    const [selectedTier, setSelectedTier] = useState(pricing.tiers[1])

    return (
        <div className="bg-white">
            <Header active={"sponsorships"}/>

            <main>
                <div className="isolate overflow-hidden">
                    <div className="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="relative z-10">
                                <h1 className="mx-auto max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                    Pricing that grows with you
                                </h1>
                                <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
                                    Choose an affordable plan that’s packed with the best features for engaging your
                                    audience, creating
                                    customer loyalty, and driving sales.
                                </p>
                            </div>
                            <div
                                className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                                <svg
                                    viewBox="0 0 1208 1024"
                                    aria-hidden="true"
                                    className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                                >
                                    <ellipse cx={604} cy={512} rx={604} ry={512}
                                             fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"/>
                                    <defs>
                                        <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                            <stop stopColor="#7775D6"/>
                                            <stop offset={1} stopColor="#E935C1"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div
                                    aria-hidden="true"
                                    className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                                />
                                {pricing.tiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        onClick={() => setSelectedTier(tier)}
                                        className={classNames(
                                            selectedTier.id === tier.id
                                                ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                                                : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                                            'relative rounded-2xl',
                                        )}
                                    >
                                        <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                            <h2
                                                id={tier.id}
                                                className={classNames(
                                                    selectedTier.id === tier.id ? 'text-gray-900' : 'text-white',
                                                    'text-sm/6 font-semibold',
                                                )}
                                            >
                                                {tier.name}
                                            </h2>
                                            <div
                                                className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                                <div className="mt-2 flex items-center gap-x-4">
                                                    <p
                                                        className={classNames(
                                                            selectedTier.id === tier.id ? 'text-gray-900' : 'text-white',
                                                            'text-4xl font-semibold tracking-tight',
                                                        )}
                                                    >
                                                        {tier.price}
                                                    </p>
                                                    <div className="text-sm">
                                                        <p className={selectedTier.id === tier.id ? 'text-gray-900' : 'text-white'}>USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 flow-root sm:mt-10">
                                                <ul
                                                    role="list"
                                                    className={classNames(
                                                        selectedTier.id === tier.id
                                                            ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                                                            : 'divide-white/5 border-white/5 text-white',
                                                        '-my-2 divide-y border-t text-sm/6 lg:border-t-0',
                                                    )}
                                                >
                                                    {tier.highlights.map((mainFeature) => (
                                                        <li key={mainFeature} className="flex gap-x-3 py-2">
                                                            <CheckIcon
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    selectedTier.id === tier.id ? 'text-indigo-600' : 'text-gray-500',
                                                                    'h-6 w-5 flex-none',
                                                                )}
                                                            />
                                                            {mainFeature}
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
                            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                                <h2 id="mobile-comparison-heading" className="sr-only">
                                    Feature comparison
                                </h2>

                                <div className="mx-auto max-w-2xl space-y-16">
                                    {pricing.tiers.map((tier) => (
                                        <div key={tier.id} className="border-t border-gray-900/10">
                                            <div
                                                className={classNames(
                                                    selectedTier.id === tier.id ? 'border-indigo-600' : 'border-transparent',
                                                    '-mt-px w-72 border-t-2 pt-10 md:w-80',
                                                )}
                                            >
                                                <h3
                                                    className={classNames(
                                                        selectedTier.id === tier.id ? 'text-indigo-600' : 'text-gray-900',
                                                        'text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    {tier.name}
                                                </h3>
                                                <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                                            </div>

                                            <div className="mt-10 space-y-10">
                                                {pricing.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <h4 className="text-sm/6 font-semibold text-gray-900">{section.name}</h4>
                                                        <div className="relative mt-6">
                                                            {/* Fake card background */}
                                                            <div
                                                                aria-hidden="true"
                                                                className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                                                            />

                                                            <div
                                                                className={classNames(
                                                                    selectedTier.id === tier.id ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                                                                    'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                                                                )}
                                                            >
                                                                <dl className="divide-y divide-gray-200 text-sm/6">
                                                                    {section.features.map((feature) => (
                                                                        <div
                                                                            key={feature.name}
                                                                            className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                                                        >
                                                                            <dt className="pr-4 text-gray-600">{feature.name}</dt>
                                                                            <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                                                                {typeof feature.tiers[tier.name as keyof PricingTiers] === 'string' ? (
                                                                                    <span
                                                                                        className={selectedTier.id === tier.id ? 'font-semibold text-indigo-600' : 'text-gray-900'}>
            {feature.tiers[tier.name as keyof PricingTiers]}
        </span>
                                                                                ) : (
                                                                                    <>
                                                                                        {feature.tiers[tier.name as keyof PricingTiers] === true ? (
                                                                                            <CheckIcon
                                                                                                aria-hidden="true"
                                                                                                className="mx-auto size-5 text-indigo-600"/>
                                                                                        ) : (
                                                                                            <XMarkIconMini
                                                                                                aria-hidden="true"
                                                                                                className="mx-auto size-5 text-gray-400"/>
                                                                                        )}
                                                                                        <span className="sr-only">
                {feature.tiers[tier.name as keyof PricingTiers] === true ? 'Yes' : 'No'}
            </span>
                                                                                    </>
                                                                                )}
                                                                            </dd>
                                                                        </div>
                                                                    ))}
                                                                </dl>
                                                            </div>

                                                            {/* Fake card border */}
                                                            <div
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    selectedTier.id === tier.id ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                                                                    'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Feature comparison (lg+) */}
                            <section aria-labelledby="comparison-heading" className="hidden lg:block">
                                <h2 id="comparison-heading" className="sr-only">
                                    Feature comparison
                                </h2>

                                <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                                    {pricing.tiers.map((tier) => (
                                        <div key={tier.id} aria-hidden="true" className="-mt-px">
                                            <div
                                                className={classNames(
                                                    selectedTier.id === tier.id ? 'border-indigo-600' : 'border-transparent',
                                                    'border-t-2 pt-10',
                                                )}
                                            >
                                                <p
                                                    className={classNames(
                                                        selectedTier.id === tier.id ? 'text-indigo-600' : 'text-gray-900',
                                                        'text-sm/6 font-semibold',
                                                    )}
                                                >
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
                                                {/* Fake card backgrounds */}
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                                                >
                                                    <div className="size-full rounded-lg bg-white shadow-sm"/>
                                                    <div className="size-full rounded-lg bg-white shadow-sm"/>
                                                    <div className="size-full rounded-lg bg-white shadow-sm"/>
                                                </div>

                                                <table className="relative w-full border-separate border-spacing-x-8">
                                                    <thead>
                                                    <tr className="text-left">
                                                        <th scope="col">
                                                            <span className="sr-only">Feature</span>
                                                        </th>
                                                        {pricing.tiers.map((tier) => (
                                                            <th key={tier.id} scope="col">
                                                                <span className="sr-only">{tier.name} tier</span>
                                                            </th>
                                                        ))}
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {section.features.map((feature, featureIdx) => (
                                                        <tr key={feature.name}>
                                                            <th
                                                                scope="row"
                                                                className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900"
                                                            >
                                                                {feature.name}
                                                                {featureIdx !== section.features.length - 1 ? (
                                                                    <div
                                                                        className="absolute inset-x-8 mt-3 h-px bg-gray-200"/>
                                                                ) : null}
                                                            </th>
                                                            {pricing.tiers.map((tier) => (
                                                                <td key={tier.id}
                                                                    className="relative w-1/4 px-4 py-0 text-center">
                                    <span className="relative size-full py-3">
    {typeof feature.tiers[tier.name as keyof PricingTiers] === 'string' ? (
        <span
            className={classNames(
                selectedTier.id === tier.id ? 'font-semibold text-indigo-600' : 'text-gray-900',
                'text-sm/6',
            )}
        >
            {feature.tiers[tier.name as keyof PricingTiers]}
        </span>
    ) : (
        <>
            {feature.tiers[tier.name as keyof PricingTiers] === true ? (
                <CheckIcon aria-hidden="true" className="mx-auto size-5 text-indigo-600"/>
            ) : (
                <XMarkIconMini aria-hidden="true" className="mx-auto size-5 text-gray-400"/>
            )}

            <span className="sr-only">
                {feature.tiers[tier.name as keyof PricingTiers] === true ? 'Yes' : 'No'}
            </span>
        </>
    )}
</span>

                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>

                                                {/* Fake card borders */}
                                                <div
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                                                >
                                                    {pricing.tiers.map((tier) => (
                                                        <div
                                                            key={tier.id}
                                                            className={classNames(
                                                                selectedTier.id === tier.id ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                                                                'rounded-lg',
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
