import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 1.99 },
        { id: 2, name: 'Bread', price: 2.99 },
        { id: 3, name: 'Cheese', price: 3.99 },
        { id: 4, name: 'Eggs', price: 4.99 },
        { id: 5, name: 'Butter', price: 5.99 },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 }); }
    return NextResponse.json({ id: 1, name: body.name, price: body.price }, { status: 201 });
}