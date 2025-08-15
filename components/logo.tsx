import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 mx-2 px-3 my-2 py-2 leading-7 tracking-tighter">
        <Image
          src="/images/wua-logo-xl.png"
          alt="Wake Up Academy"
          width={350}
          height={175}
          className="h-36 w-auto md:h-44 lg:h-52 xl:h-56 transition-all duration-500 filter brightness-105 contrast-105"
          priority
        />
      </div>
    </Link>
  )
}

// Plus besoin de styles CSS personnalisés - utilisation des classes Tailwind standard uniquement
