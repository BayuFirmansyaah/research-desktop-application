import { NextResponse } from "next/server";

export async function POST(req: Request)
{
    const url = "http://45.118.132.112:19999/ws/live2.php";

    try{
        const data = await req.json();

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Connection": "keep-alive",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.statusText}`);
        }

        return NextResponse.json(await response.json(), { status: response.status });
    } catch (error) {
        console.error("Error in proxy:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}