"use client"
import Image from "next/image";
import styles from "./page.module.css";
import InputText from "./components/forms/InputText";
import InputSubmit from "./components/forms/InputSubmit";
import { handler } from "./axios/handler";
import { useEffect, useState } from "react";
export default function Home() {

  const [name, setName] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [email, setEmail] = useState<string>();


  const handleNameChange = async (e : React.ChangeEvent<HTMLInputElement>) =>
  {
    const newName = e.target.value
    setName(newName)
  }

  const handleCpfChange = async (e : React.ChangeEvent<HTMLInputElement>) =>
  {
    const newCpf = e.target.value
    setCpf(newCpf)
  }

  const handleEmailChange = async (e : React.ChangeEvent<HTMLInputElement>) =>
  {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault()
    try{
      const response = await handler.post("/funcionarioCreation", { name, cpf, email });
      const data = await response.data
      console.log(data)
    }catch(error)
    {
      console.log(error)
    }
  }

  useEffect(()=>
  {
    console.log(name)
  },[name])

  return (
   <div className={styles.container}>
     <div className={styles.formContainer}>
        <div className={styles.title}>
            <span>Cadastro de Funcionários para C3Cine</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputText changeEvent={handleNameChange} placeholder="Nome do Funcionário"></InputText>
          <InputText changeEvent={handleCpfChange} placeholder="CF do Funcionário"></InputText>
          <InputText changeEvent={handleEmailChange} placeholder="Email do Funcionário"></InputText>
          <InputSubmit text="Cadastrar"></InputSubmit>
        </form>
     </div>
      
   </div>
  );
}
