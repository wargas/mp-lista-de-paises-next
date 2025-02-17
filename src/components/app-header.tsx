import Image from "next/image";
import Link from "next/link";

export function AppHeader() {
    return <div className="absolute top-0 right-0 left-0 bg-white ">
        <div className="container h-16  flex items-center mx-auto">
            <Link href={'/'} className="flex gap-4">
                <Image height={30} width={30} src="/logo.svg" alt="Logo" /> <span className="font-bold text-lg">Países no mundo</span>
            </Link>
        </div>
    </div>
}