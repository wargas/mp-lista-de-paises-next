'use client'
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function ButtonBack() {

    const router = useRouter()


    return (
        <div className="text-left">
            <Button onClick={() => router.back()} variant={'ghost'}><ArrowLeftIcon size={12} /> Voltar</Button>
        </div>
    )
}