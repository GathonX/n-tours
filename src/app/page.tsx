import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <>
     
<Card>
  <CardHeader>
    <CardTitle>
  URL : /
  </CardTitle>
  </CardHeader>
  <CardContent>
<Link href="/admin" className={buttonVariants({size:"lg",variant:"outline"})}>admin</Link>
<Link href="/admin/citations/new" className={buttonVariants({size:"lg",variant:"outline"})}>create Citation</Link>
</CardContent>

    </Card> 
  
    </>
  );
}
