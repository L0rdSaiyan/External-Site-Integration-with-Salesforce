import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request): Promise<void | Response> {
  try {
    // Obtém o CPF da query string
    const url = new URL(request.url);
    const cpf = url.searchParams.get('cpf');

    if (!cpf) {
      return NextResponse.json({
        error: "CPF parameter is required",
      }, { status: 400 });
    }

    // Pesquisa o funcionário com o CPF fornecido
    const funcionarioReturned = await prisma.funcionarios.findFirst({
      where: {
        cpf: cpf,
      },
    });

    // Retorna os dados encontrados
    return NextResponse.json(funcionarioReturned);
  } catch (error) {
    return NextResponse.json({
      error: `Error: ${error}`,
    }, { status: 500 });
  }
}