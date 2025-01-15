// get -- getting data
// post -- sending data
// put -- updating data
// delete  -- deleting data

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Shit Stain" },
        { id: 3, name: "Fred Flintstone" },
        { id: 4, name: "Barney Rubble" },
        { id: 5, name: "Pebbles Flintstone" }
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    // validate
    if (!body.name) {
        return NextResponse.json({ error: 'SHME! :I name required stupid.' }, { status: 400 });
    }

    return NextResponse.json({ id: 1, name: body.name });
}