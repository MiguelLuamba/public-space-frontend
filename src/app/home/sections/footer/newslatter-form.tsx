"use client"

import { api } from "@/services/api";
import { Loader } from "@/components/Loader";
import { FormEvent, useState, useTransition } from "react";
import { FetchLoadingState } from "@/components/fetch-loading-state";
import { FetchLoadingStateProps } from "@/interfaces/fetchLoading-interface";

export function NewslatterForm(){
  const [isPending, startTransition] = useTransition()
  const [fetchModalInfo, setFetchModalInfo] = useState<FetchLoadingStateProps | null>()

  // FUNCAO PARA FECHAR O MODAL DO STATUS DAS REQUISICOES
  function closeFetchModal(){
    setTimeout(()=>{
      setFetchModalInfo(null)
    }, 3600)
  }

  // VERIFICAR SE O EMAIL E VALIDO E ADICIONAR AO BANCO DE DADOS
  function verifyEmailToNewslatter(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get("email"))
    const emailHasArroba = email.includes("@")

    if(!email || !emailHasArroba) return alert("Email inválido")
      addEmailToDatabase(email)
      event.currentTarget.reset()
  }

  // ADICIONAR EMAIL AO BANCO DE DADOS
  function addEmailToDatabase(email: string) {
    startTransition(async () => {
      try {
        const response = await api.post("/newslatter", {email})
        if(response.data.message){
          setFetchModalInfo({
            appear:true,
            status:"warning",
            message: "Email inválido, tente outro!",
          })

          closeFetchModal()
        } else{
          setFetchModalInfo({
            appear:true,
            status:"sucess",
            message: "Email adicionado com sucesso!",
          })

          closeFetchModal()
        }

      } catch (error) {
        setFetchModalInfo({
          appear:true, 
          status:"failed",
          message:"Erro no servidor, tente mais tarde!",
        })
        closeFetchModal()

        console.log(error)
      }    
    });
  }

  // DESABILITAR O BOTAO DE SUBMETER O EMAIL ATE O FINAL DA ANIMACAO

  return(
    <div className="flex items-center justify-between" id="newslatter">
      <article>
        <p className="font-bold text-2xl">Vamos manter o contato!</p>
        <span className="font-normal text-xl">
          Junte-se à nossa Newsletter para estar sempre atualizado
        </span>
      </article>

      <form action="" className="flex gap-2" onSubmit={verifyEmailToNewslatter}>
        <input
          className="flex-1 w-96 h-14 bg-light rounded-lg outline-none px-6 py-4 text-dark-900 border-none"
          type="email"
          name="email"
          required
          placeholder="coloque seu email" />
        
        <button 
          type="submit"
          disabled={isPending}
          className={`shadow-shape h-14 w-36 rounded-lg
            cursor-pointer
            transition-colors flex items-center justify-center 
            ${isPending &&"cursor-wait"}`}
        >
          { isPending? <Loader/> : "Subscrever" }
        </button>
      </form>

      {fetchModalInfo?.status &&(
        <FetchLoadingState 
          message={String(fetchModalInfo.message)} 
          status={fetchModalInfo.status}
        />
      )}

    </div>
  )
}