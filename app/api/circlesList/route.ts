import { prisma } from "../../../lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log(1.1);
    const users = prisma.user.findMany();
    console.log(1.2);
    return NextResponse.json(users);
}
