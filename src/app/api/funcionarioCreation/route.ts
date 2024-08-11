import { ResponseType } from "axios";
import { NextResponse} from "next/server";
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()
export async function POST(request : Request)  : Promise<void | Response>  {
    try{
        const {name, cpf, email} = await request.json();

        const createdFuncionario = await prisma.funcionarios.create({
            data:{ name, cpf, email}, 
        })
        return NextResponse.json(
            {
               createdFuncionario
            }
        )
    }catch(error)
    {
        return NextResponse.json({
            response: error
        })
    }
}