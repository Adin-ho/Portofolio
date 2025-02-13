import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return (
            <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} alt="..." width={350} height={350}></Image>
                <h1>{title}</h1>
            </Link>
    )
}

export default AnimeList