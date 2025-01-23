// get -- getting data
// post -- sending data
// put -- updating data
// delete  -- deleting data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }

    // validate
    if (!body.name) {
        return NextResponse.json({ error: 'SHME! :I name required stupid.' }, { status: 400 });
    }

    return NextResponse.json({ id: 1, name: body.name });
}