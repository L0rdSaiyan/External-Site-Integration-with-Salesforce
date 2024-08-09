-- CreateTable
CREATE TABLE "Funcionarios" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Funcionarios_pkey" PRIMARY KEY ("id")
);
