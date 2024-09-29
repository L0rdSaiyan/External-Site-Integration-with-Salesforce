import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request): Promise<void | Response> {
  try {
    // Obtém o CPF da query string
    const url = new URL(request.url);
    const cpf = url.searchParams.get("cpf");

    if (!cpf) {
      return NextResponse.json(
        {
          error: "CPF parameter is required",
        },
        { status: 400 }
      );
    }

    // Verifica se o funcionário existe
    const funcionarioExistente = await prisma.funcionarios.findFirst({
      where: {
        cpf: cpf,
      },
    });

    if (!funcionarioExistente) {
      return NextResponse.json(
        {
          error: "Funcionário não encontrado",
        },
        { status: 404 }
      );
    }

    // Deleta o funcionário com o CPF fornecido
    await prisma.funcionarios.delete({
      where: {
        cpf: cpf,
      },
    });

    return NextResponse.json(
      {
        message: "Funcionário deletado com sucesso",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error: ${error}`,
      },
      { status: 500 }
    );
  }
}
