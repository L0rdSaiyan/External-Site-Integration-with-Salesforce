import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request): Promise<void | Response> {

    try{
        const funcionarios = await prisma.funcionarios.findMany();
        return NextResponse.json(funcionarios)
    }catch(error)
    {
        return NextResponse.json({"error": error})
    }

}