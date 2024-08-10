import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export async function GET(request : Request) : Promise<void | Response> {

    try{
       const {cpf} = await  request.json();

        const funcionarioReturned = await prisma.funcionario.findUnique({
            where:
            {
                cpf:cpf
            }
        })

        return NextResponse.json(
            {
                response: funcionarioReturned
            }
        )

    }catch(error)
    {
        return NextResponse.json({
            response: `Error: ${error}`
        })
    }
    
}