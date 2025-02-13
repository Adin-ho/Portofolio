import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return (
            <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"></Image>
                <h1>{title}</h1>
            </Link>
    )
}

export default AnimeList