import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
   const headerlist = await headers()
   const authHeader = headerlist.get("Authorization")
   console.log(authHeader)

     return NextResponse.json({
        success : true ,
        data : "Hello from profile"
     })
}