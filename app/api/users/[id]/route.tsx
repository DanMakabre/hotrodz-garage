import { NextRequest, NextResponse } from 'next/server';

export function GET(
    request: NextRequest, 
    { params }: { params: { id: number } }) {
        // fetch data from users.db
        //  if not found, return 404 error
        // else return data
        
        if (params.id > 10)
            return NextResponse.json({ error: 'User not found' }, { status: 404 });

        return NextResponse.json({ id: 1, name: "Shme" });
    }