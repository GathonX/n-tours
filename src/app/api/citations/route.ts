import { Citation } from './../../../../generated/prisma/index.d';
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
    ok:true,
    env:process.env.NODE_ENV
    })
}


export async function POST(request:NextRequest) {

    const json = await request.json();

    await new Promise((r)=> setTimeout(r,1000));


    return NextResponse.json({
   
    })
}