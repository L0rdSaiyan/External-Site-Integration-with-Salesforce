import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { name, cpf, email } = await request.json();
        const createdFuncionario = await prisma.funcionarios.create({
            data: { name, cpf, email },
        });

        const response = NextResponse.json({
            response: `Funcionario created: ${createdFuncionario}`
        });

        // Adicionando cabeçalhos CORS
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;
    } catch (error) {
        return NextResponse.json({
            response: error
        });
    }
}
