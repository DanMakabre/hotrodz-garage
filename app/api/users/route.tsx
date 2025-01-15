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