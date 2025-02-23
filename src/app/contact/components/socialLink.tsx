import {SocialIcon} from "react-social-icons";

export default function SocialLink({iconUrl, linkUrl, name}: { iconUrl: string, linkUrl: string, name: string }) {
    return (
        <div className="flex items-center">
            <dt className="flex-none">
                <span className="sr-only">Email</span>
                <SocialIcon url={iconUrl} bgColor={"transparent"} fgColor={"gray"}/>
            </dt>
            <dd>
                <a href={linkUrl} className="hover:text-white">
                    {name}
                </a>
            </dd>
        </div>
    )
}