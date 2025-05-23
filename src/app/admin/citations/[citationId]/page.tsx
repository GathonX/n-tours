import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Page(props:{
    params:Promise <{
        citationId: string;
    }>
}){

    const params = await props.params;
    return (
        <Card>
            <CardHeader>
<CardTitle>
    URL : /admin/citations/
    <span className="">{JSON.stringify(params,null,2)}</span>
   
</CardTitle>
            </CardHeader>
            <CardContent>
                 <Link href="/admin" className={buttonVariants({size:"lg",variant:"outline"})}>/admin</Link>
            </CardContent>
        </Card>
    )
}