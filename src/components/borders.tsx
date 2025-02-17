import Link from "next/link";

type Props = {
    list: String[]
}

export async function CountryBorders({ list }: Props) {

    const borderFetch = await fetch(`https://restcountries.com/v3.1/alpha?codes=${list.join(',')}`)

    const borders = await borderFetch.json();

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">

            {borders.map((b: any) => (
                <Link href={`/${b.cca3}`} key={b.cca3} className="p-4 bg-white rounded-lg flex flex-col items-center">
                    <img className="aspect-video rounded-lg w-full" src={b.flags.png} />

                    <span className="text-center font-bold pt-2">
                        {b.translations.por.common}
                    </span>

                </Link>)
            )}
        </div>
    )
}