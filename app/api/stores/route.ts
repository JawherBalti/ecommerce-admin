import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {    
    try {    
        const stores = await prismadb.store.findFirst()
        return NextResponse.json(stores)
    } catch (error) {
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function POST (req: Request) {
    try {
        const {userId} = auth()
        const body = await req.json()
        const {name} = body 

        if(!userId) return new NextResponse("Unauthenticated", {status:401})
        if(!name) return new NextResponse("Name is required", {status:400})   
        
        const storesExist = await prismadb.store.findFirst()

        if(!storesExist) {
            const store = await prismadb.store.create({
                data: {
                    name,
                    userId
                }
            })
            return NextResponse.json(store)
        } else {
            return NextResponse.json("Cannot create more than 1 store", {status:400})
        }
    } catch (error) {
        return new NextResponse("Internal error", {status:500})
    }
}