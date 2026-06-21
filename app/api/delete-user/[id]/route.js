import { NextResponse } from "next/server"
import { users } from "../../hello/route"

export async function DELETE(request, context) {
    try {
        const { id } = await context.params
        const userId = parseInt(id)

        if (isNaN(userId)) {
            return NextResponse.json({
                success: false,
                data: "invalid user id"
            }, { status: 400 })
        }

        const userIndex = users.findIndex(u => u.id === userId)

        if (userIndex === -1) {
            return NextResponse.json({
                success: false,
                data: "user not found"
            }, { status: 404 })
        }

        const deletedUser = users[userIndex]
        users.splice(userIndex, 1)

        return NextResponse.json({
            success: true,
            data: deletedUser,
            message: "deleted user"
        })

    } catch (error) {
        console.error(error)
        return NextResponse.json({
            success: false,
            data: "failed to delete the user"
        }, { status: 500 })
    }
}