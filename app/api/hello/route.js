import { NextResponse } from "next/server";

let users = [
  { "id": 1, "name": "Ali Khan", "email": "ali.khan@example.com", "age": 25 },
  { "id": 2, "name": "Sara Ahmed", "email": "sara.ahmed@example.com", "age": 23 },
  { "id": 3, "name": "Hassan Raza", "email": "hassan.raza@example.com", "age": 28 },
  { "id": 4, "name": "Ayesha Malik", "email": "ayesha.malik@example.com", "age": 22 },
  { "id": 5, "name": "Bilal Sheikh", "email": "bilal.sheikh@example.com", "age": 30 }
]

export async function GET(request) {
  try {
    return NextResponse.json({
        success : true ,
        data : users ,
        total : users.length
    })
  } catch (error) {
    return NextResponse.json({
        success : false ,
        errors : "Failed to get users"
    })
    {status : 500}
  }
}