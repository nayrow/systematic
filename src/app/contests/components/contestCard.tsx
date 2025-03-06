import Image from "next/image";

export default function ContestCard({name, date, image, href}: { name: string, date: string, image: string, href: string }) {
    return (
        <div className={"my-24 mx-48"}>
            <a href={`contests/${href}`} className={"space-y-4"}>
                <p className={"text-2xl font-bold"}>{name}</p>
                <Image
                    src={image}
                    alt={name}
                    width={2830}
                    height={1500}
                    className={"rounded-xl h-72 w-full"}
                />
                <div className={"flex w-full justify-end"}>
                    {date}
                </div>
            </a>
        </div>
    )
}