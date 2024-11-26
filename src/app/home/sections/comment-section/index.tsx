"use client"

import Image from "next/image";
import { api } from "@/services/api";
import "@/styles/comments-responsive.css";
import { useEffect, useState } from "react";
import { BlankLink } from "@/components/blank-link";
import { commentsSocket } from "@/services/sockets";
import { CommentCard } from "@/components/comment-card";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";



// TIPAGEM DA RESPONSE DOS COMENTARIOS VINDOS DO BANCO DE DADOS
interface AllCommentsProps{
  id: string
  flag: string
  userName: string
  country: string
  comment: string
  reaction: string
  create_at: string | Date
}
export function CommentSection() {
  const [showAdminModalInfo, setShowAdminModalInfo] = useState(false)
  const [allComments, setAllComments] = useState<AllCommentsProps[]>([])

  // MODIFICANDO O ESTADO DO MODAL DE INFORMACOES DO ADMIN
  function modifyAdminModalInfoState(){
    setShowAdminModalInfo(!showAdminModalInfo)
  }

  // BUSCAR TODOS OS COMENTARIOS VINDOS DO BANCO DE DADOS
  async function getAllCommentsOnDataBase() {
    try {
      const response = await api.get("/comments");
      setAllComments(response.data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  }
  

  useEffect(() => {
    getAllCommentsOnDataBase();
    commentsSocket.connect();
  
    commentsSocket.on("newComment", (comment: AllCommentsProps) => {
      setAllComments((prevComments) => [...prevComments, comment]);
    });
  
    return () => {
      commentsSocket.off("newComment");
      commentsSocket.disconnect();
    };
  }, []);
  

  return(
    <section id="comments" className="w-full min-h-[100vh] max-h-max bg-blue-700 py-8 px-5 text-center font-inter text-light flex justify-center items-center flex-col gap-10 relative overflow-hidden">
      <article className="w-max space-y-5 grid place-items-center" id="adminMessage">
        <p className="font-bold text-4xl w-1/3">Acompanhe os comentários deixados sobre nós</p>

        <span className="font-medium text-blue-500 w-[40%]">
          A <strong className="text-blue-400">SPACE</strong> é o começo de uma comunidade para todo pessoal que gosta 
          de conteúdos sobre os astros, com finalidade de forcener informações sobre os mistérios 
          do grande cosmos, não fique de fora dessa emocionante aventura, junte-se a nós
        </span>

        <figure className="flex items-center justify-center cursor-pointer gap-4" onClick={modifyAdminModalInfoState}>
          <div className="relative size-16 rounded-full overflow-hidden">
            <Image
              src="/img/mike.jpg" 
              // width={400} height={400}
              fill
              alt="space's owner" 
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="font-medium">Miguel Luamba</p>
            <span className="font-normal text-blue-500">Criador da SPACE</span>
          </div>
        </figure>

      </article>

      <section className="w-full columns-1 sm:columns-2 md:columns-4 gap-4">
        {allComments.length > 0 &&(
          allComments.map(e => (
            <CommentCard
              key={e.id}
              userName={e.userName}
              comment={e.comment}
              reaction={e.reaction}
              flag={e.flag}
            />
          ))
        )}
      </section>

      {/* ESFUMAÇADO NO BOTTOM DA SECTION DE COMENTÁRIOS */}
      {allComments.length > 0 &&(
        <div className="absolute w-[1240px] h-[423px] left-1/2 -bottom-1/3 bg-blue-600 -translate-x-1/2 blur-[125px]"/>
      )}


      {showAdminModalInfo && (
        <div className="absolute top-0 left-0 size-full bg-[#0f172ac7] backdrop-blur-sm bg-opacity-5 flex justify-center" onClick={modifyAdminModalInfoState}>
          <div className="p-5 h-max mt-10 bg-blue-600 rounded-3xl w-80 space-y-5 animate-admin_card opacity-0">
            <figure className="relative w-full h-64 object-cover overflow-hidden rounded-xl">
              <Image 
                src="/img/mike.jpg" 
                // width={500} height={500}
                fill
                alt="space's owner" 
                className="size-full object-cover"
              />
            </figure>

            <article className="font-bold text-xl text-left">
              <p>Miguel Luamba</p>
              <p className="text-base font-light">Fullstack web & Mobile Developer</p>
            </article>

            <div className="flex items-center justify-center gap-4 text-light">
              <BlankLink 
                styles={{color:"#fff", borderColor:"#fff"}}
                blankTo="https://web.facebook.com/jonhalbino.joi"
              >
                <Facebook  className="size-6 " strokeWidth={1}/>
              </BlankLink>

              <BlankLink 
                styles={{color:"#fff", borderColor:"#fff"}} 
                blankTo="https://www.instagram.com/_miguelluamba/"
              >
                <Instagram className="size-6" strokeWidth={1}/>
              </BlankLink>

              <BlankLink 
                styles={{color:"#fff", borderColor:"#fff"}} 
                blankTo="https://www.linkedin.com/in/miguel-luamba-ba661b254/"
              >
                <Linkedin className="size-6" strokeWidth={1}/>
              </BlankLink>

              <BlankLink 
                styles={{color:"#fff", borderColor:"#fff"}} 
                blankTo="https://github.com/miguelluamba"
              >
                <Github className="size-6" strokeWidth={1}/>
              </BlankLink>
            </div>


          </div>
        </div>
      )}

    </section>
  )
}


