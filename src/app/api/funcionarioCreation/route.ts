import { ResponseType } from "axios";
import { NextResponse} from "next/server";
import Funcionarios from "@/app/models/funcionario";
export async function POST(request : Request)  : Promise<void | Response>  {
    try{
        const {name, cpf, email} = await request.json();

        const createdFuncionario = await Funcionarios.create({name:name, cpf: cpf, email: email})
        return NextResponse.json(
            {
                response: `Funcionario created: ${createdFuncionario}`
            }
        )
    }catch(error)
    {
        return NextResponse.json({
            response: error
        })
    }
}