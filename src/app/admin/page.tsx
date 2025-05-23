import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page(){

    const citations = await prisma.citation.findMany({

        orderBy:{
            createdAt:"desc"
        }

    })

    return (
        <Card>
            <CardHeader>
<CardTitle>
    URL : /admin
</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">

{
    citations.map((citaiton)=>(
        <Card className="p-4 flex items-start gap-4" key={citaiton.id}>
            <div className="flex flex-col gap-2 flex-1">
            <p className="relative pl-8 italic before:content-['*'] before:absolute">{citaiton.text}</p>
            <p>-- {citaiton.author}</p>
            </div>

            <DeleteCitationButton id={citaiton.id} />
        </Card>
    ))
}

<Link href="/admin/citations/new" className={buttonVariants({size:"lg",variant:"outline"})}>Création d'un citation</Link>
            </CardContent>
        </Card>
    )
}