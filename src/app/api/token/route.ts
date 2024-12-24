import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const TOKEN_FILE_PATH = path.join(process.cwd(), 'token.txt');

export async function GET() {
    if (fs.existsSync(TOKEN_FILE_PATH)) {
        const token = fs.readFileSync(TOKEN_FILE_PATH, 'utf8').trim();
        return NextResponse.json({ token });
    } else {
        return NextResponse.json({ error: 'Token not found' }, { status: 404 });
    }
}

export async function POST(req: Request) {
    const { token } = await req.json();
    if (token) {
        fs.writeFileSync(TOKEN_FILE_PATH, token);
        return NextResponse.json({ message: 'Token saved successfully' });
    } else {
        return NextResponse.json({ error: 'Token not provided' }, { status: 400 });
    }
}
