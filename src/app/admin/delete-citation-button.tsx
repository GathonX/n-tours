"use client"

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { deleteCitationAction } from "./citations/new/citations.action";

export function DeleteCitationButton(props:{id:number}){
    const [isConfirm , setIsConfirm] = useState(false)
    
    

    const onDelete = async () =>{
        const result = await deleteCitationAction(props.id)
        if(result.message){
  alert('Ca y est , on y est ')
  
        }
        
    }

    return <Button onClick={()=>{
        if(isConfirm ){
            onDelete();
        }else{
            setIsConfirm(true)
        }
    }} variant={isConfirm ? "destructive" : "outline"}> <Trash /> </Button>
}