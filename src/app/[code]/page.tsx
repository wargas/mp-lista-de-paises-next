import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import humanNumber from 'human-format'
import { CountryBorders } from "@/components/borders"
import { ButtonBack } from "@/components/button-back"

type PageProps = {
    params: {
        code: string
    }
    searchParams: any
}
export default async function Detail(props: any) {

    const countryFetch = await fetch(`https://restcountries.com/v3.1/alpha/${props.params.code}`)

    const [country] = await countryFetch.json()

    return <div className="flex flex-col p-6 container mx-auto">

        <h1 className="text-center text-3xl font-bold">{country.translations.por.common}</h1>

        <ButtonBack />

        <div className="bg-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-2 mb-4">
                    <div><b>🏙️ Capital:</b> {country.capital}</div>
                    <div><b>🗺️ Continente:</b> {country.region}</div>
                    <div><b>👨‍👩‍👧‍👦 População:</b> {humanNumber(country.population)}</div>
                    <div><b>🗣️ Líguas faladas:</b> <br />
                        <div className="flex gap-2">
                            {Object.keys(country.languages).map(l => (
                                <Link href={`/?lang=${l}`} key={String(l)}>
                                    <Badge  variant={'default'}>
                                        {country.languages[l]}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-52 md:max-w-80">
                    <img className="aspect-video rounded-lg w-full" src={country.flags.png} />
                </div>
            </div>
        </div>
        <h2 className="my-6 text-2xl font-bold">Países que fazem fronteira</h2>
        {country?.borders && (
            <CountryBorders list={Object.values(country?.borders || [])} />
        )}
    </div>
}