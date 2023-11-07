import { prisma } from "../../../lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log(2.1);
    return NextResponse.json({
        message: 100,
    });
}
