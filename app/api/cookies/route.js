export async function GET() {
    return new Response("Setting Cookies" , {
        headers : {
            "Set-Cookies" : "theme=dark"
        }
    })
}