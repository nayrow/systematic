import Image from "next/image";

export default function Card({title, subtitle,image,href}:{title:string, subtitle?:string, image:string,href?:string}) {
    return (
        <a href={href} className="w-1/5 h-[400px] relative flex flex-col justify-end">
            <Image
                alt="Scenic view"
                src={image}
                width={2830}
                height={1500}
                className="absolute inset-0 -z-10 object-cover w-full h-full rounded-xl"
                priority
            />
            <div className={"w-full my-8 flex flex-col gap-2 items-center"}>
                <p className={"text-2xl font-bold"}>{title}</p>
                <p>{subtitle}</p>
            </div>
        </a>
    )
}