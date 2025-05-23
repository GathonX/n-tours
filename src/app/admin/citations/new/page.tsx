// src/app/admin/citations/new/page.tsx

"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cp } from "fs";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citations.action";
import Link from "next/link";



export default function Page() {

  const [isLoading,setIsLoading] = useState(false);

  const createCitation = async (FormData:FormData) =>{

    const json = await createCitationAction({
      author:String(FormData.get("author")), 
      text:String(FormData.get("text"))
    })

  if(json.error){
    alert(json.error);
  }

  }


  console.log("use client ")

  return (
    <Card>
        <CardHeader>
            <CardTitle>Create citation</CardTitle>
        </CardHeader>

        <CardContent>
    <form action={async (FormData:FormData) =>{
      await createCitation(FormData)
    }} method="POST" className="space-y-4">
      <div>
        <Label htmlFor="citation">Citation</Label>
        <Input id="citation" name="text" />
      </div>

      <div>
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" />
      </div>

     <SubmitButton />
    </form>
    </CardContent>

<Link href="/admin" className={buttonVariants({size:"lg",variant:"outline"})}>/admin</Link>

    </Card>
  );
}

const SubmitButton = ()=>{
  const {pending} = useFormStatus();

  return (
 <Button disabled={pending} type="submit">{pending ? "Loading..." : "Submit"}</Button>
  )
}