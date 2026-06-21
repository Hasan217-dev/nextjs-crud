import { NextResponse } from "next/server"
import { users } from "../hello/route"

export async function POST(request){
    try {
        const {name , email , age} = await request.json()

        if(!name || !email || !age){
            return NextResponse.json({
                success : false ,
                error : "name , email and age are required"
            }, { status: 400 })
        }

        const existingEmail = users.find(user => user.email === email)
        if(existingEmail){
            return NextResponse.json({
                success : false ,
                error : "email already exists"
            }, { status: 400 })
        }

        const newUser = {
            id : users.length + 1 ,
            name : name ,
            email : email ,
            age : age
        }
      users.push(newUser)
      return NextResponse.json({
        success : true ,
        data : users ,
        message : "user created"
      }, { status: 201 })

    } catch (error)  {
        return NextResponse.json({
            success: false ,
            error : "failed to create a user"
        }, { status: 500 })

    }    
}
