export default function Separator({text}:{text:string}) {
    return(
        <div className={"py-8 bg-primary"}>
            <p className={"text-4xl font-bold text-center"}>
                {text}
            </p>
        </div>
    )
}