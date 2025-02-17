"use client"

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function FormSearch() {

    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const inputRef = useRef<HTMLInputElement>(null)

    function handleSearch() {
        const value = inputRef.current?.value
        const urlSearch = new URLSearchParams(searchParams.toString())

        urlSearch.set('query', value || '')

        replace(`${pathname}?${urlSearch.toString()}`)
    }

    function handleRemoveLang() {
        const urlSearch = new URLSearchParams(searchParams.toString())

        urlSearch.delete('lang')

        replace(`${pathname}?${urlSearch.toString()}`)
    }

    return (
        <div className="bg-white flex flex-col rounded-lg my-4 p-4 gap-4">

            <div className="flex items-center gap-4">
                <Input defaultValue={searchParams.get('query')||''} ref={inputRef} />
                <Button onClick={handleSearch}>Pesquisar</Button>
            </div>

            <div className="flex gap-2">
                {searchParams.has('lang') && searchParams.get('lang') && (
                    <Badge className="flex gap-2" variant={'outline'}>Idioma: {searchParams.get('lang')}
                    <span className="py-0 px-2 cursor-pointer"  onClick={handleRemoveLang}>x</span> </Badge>
                )}
                {searchParams.has('query') && searchParams.get('query') != '' && (
                    <Badge variant={'outline'}>{searchParams.get('query')}</Badge>
                )}
            </div>
        </div>
    )
}