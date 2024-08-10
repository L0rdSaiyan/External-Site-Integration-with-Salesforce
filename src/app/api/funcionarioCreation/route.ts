import { ResponseType } from "axios";
import { NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function GET(request: Request): Promise<void | Response> {
    try {
      const json = await request.json();
      const { cpf } = json;
  
      const funcionarioReturned = await prisma.funcionarios.findFirst({
        where: {
          cpf: cpf,
        },
      });
  
      return NextResponse.json({
        response: funcionarioReturned,
      });
    } catch (error) {
      return NextResponse.json({
        response: `Error: ${error}`,
      });
    }
  }
  