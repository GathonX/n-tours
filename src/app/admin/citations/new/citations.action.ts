"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function createCitationAction(citation:{
  text:string,author:string
}){

try {
  
  const newCitation = await prisma.citation.create({
        data:{
            author:citation.author,
            text:citation.text
        }
    })

   

} catch {
  
   return {
      error:"Error while creatingg the citation"
    }

}
    

    redirect("/admin")


}

export async function deleteCitationAction(id:number){
  await prisma.citation.delete({

    where:{
      id,
    }

  })
  return {
    message:"Deleted ! "
  }
}