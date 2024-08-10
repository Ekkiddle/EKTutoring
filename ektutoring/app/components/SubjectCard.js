import Image from "next/image";
import Link from "next/link";

export default function SubjectCard({image, imageAlt, title, text, nav}) {
    return(
        <div className="h-[26rem] p-2 flex flex-col items-center">
            <div className="relative w-full h-28 mb-2">
                <Image 
                    src={image}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    alt={imageAlt}
                    className="shadow-xl"
                />
            </div>
            <h1 className="text-xl text-indigo-900 text-bold text-left w-full">{title}</h1>
            <p className="text-xs text-left">{text}</p>
            <Link href={nav} 
            className="w-full mx-4 mt-auto px-6 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-600 hover:text-lg transition-all 
                     duration-300 text-center">Learn more</Link>
        </div>
    );
}