import Image from "next/image"

type Props = {
    title: string,
    image: string,
    desc: string,
    hlink: string
}

export default function Project({title, image, desc, hlink}: Props) {
    return (
        <div className="flex flex-col gap-4">
            <Image 
                src={"./"+image}
                width={0}
                height={0}
                style={{ width: 'auto', height: '250px', objectFit: 'scale-down'}}
                alt={title}
            />
            <a className="text-4xl transition-all duration-500 text-[#559AFF] hover:text-[#262C6E]" href={hlink} target="blank">{title}</a>
            <p className="whitespace-pre-line">{desc}</p>
        </div>
    )
}