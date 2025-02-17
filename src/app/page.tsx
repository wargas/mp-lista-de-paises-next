import { FormSearch } from "@/components/form-search";
import { has } from "lodash";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: {}
  searchParams: {
    query: string, lang: string
  }
}

export default async function Home(props:any) {

  const { query = "", lang = ""} = props.searchParams

  const url = query == "" ? `https://restcountries.com/v3.1/all` : `https://restcountries.com/v3.1/name/${query}`

  const paisesFetch = await fetch(url)

  const status = paisesFetch.status;

  const paises = await paisesFetch.json() as any[]

  return (
    <div className="container mx-auto mt-6">
      <FormSearch />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {status == 404 && (
          <div>Nenhum país encontrado para a busca por {query}</div>
        )}
        {status == 200 && paises?.filter(c => lang == "" || has(c, 'languages.'+lang)).map(p => (
          <Link href={`/${p.cca2}`} key={p.name.common} className="p-4 bg-white rounded-lg flex flex-col items-center">
            <img className="aspect-video rounded-lg w-full" src={p.flags.png} />

            <span className="text-center font-bold pt-2">
              {p.translations.por.common}
            </span>

          </Link>
        ))}
      </div>
    </div>
  );
}
