'use client'

import "./styles.css";
import axios from "axios";
import Image from "next/image";
import { api } from "@/services/api";
import { Search } from "lucide-react";
import { Reactions } from "../reactions";
import { Loader } from "@/components/Loader";
import { HorizontalLine } from "@/components/horizontal-line";
import { CreateCommentType } from "@/interfaces/create-comment";
import { FetchLoadingState } from "@/components/fetch-loading-state";
import { SelectedCoutryType } from "@/interfaces/selected-coutry-interface";
import { FetchLoadingStateProps } from "@/interfaces/fetchLoading-interface";
import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { Countries, FilteredCountries } from "@/interfaces/countries-interface";

export function CommentsForm(){
  const [searchCountry, setSearchCountry] = useState("")
  const selectContainerRef = useRef<HTMLDivElement>(null)
  const [isCommentsPending, startIsCommentsPending] = useTransition()
  const [allCountries, setAllCountries] = useState<FilteredCountries[]>([])
  const [openSelectCountrySelect, setOpenSelectCountrySelect] = useState(false)
  const [isSearchCountryPending, startIsSearchCoutryTransition] = useTransition()
  const [countrySelected, setCountrySelected] = useState<SelectedCoutryType | null>()
  const [fetchModalInfo, setFetchModalInfo] = useState<FetchLoadingStateProps | null>()
  

  // BUSCAR TODOS OS PAISES E SUAS BANDEIRAS
  async function getAllCountries() {
    // URL DA API QUE RETORNA PAISES E SUAS BANDEIRAS

    const httpPath = 'https://api.worldbank.org/v2/country?format=json&per_page=300';

    try {
      const response = (await axios.get(httpPath)).data

      const filteredCountries = response[1].map((country: Countries)=>{
        return {name: country.name, flag: country.iso2Code.toLowerCase()}
      })

      setAllCountries(filteredCountries)
      
      
    } catch (error) {
      console.log(error)
      return console.log("Erro no servidor")
    }

  }

  // FECHAR O SELECT DOS PAISES QUANDO CLICAR NO SEU CONTAINER
  selectContainerRef.current?.addEventListener("click",(event)=>{
    if (event.target === selectContainerRef.current) {
      setOpenSelectCountrySelect(!openSelectCountrySelect);
    }
  })

  // CAPTURAR O NOME DO PAIS E SUA RESPECTIVA BANDEIRA AO CLIQUE
  function changeSelectedCountry(event: React.MouseEvent<HTMLButtonElement>){
    const button = event.currentTarget

    const child = button.querySelector("p")?.innerText
    const image = button.querySelector("img")?.src
    if(child && image)
      setCountrySelected({image:image, country:child})

    setOpenSelectCountrySelect(false)


  }

  // FILTRAR OS PAISES QUE CONTENHAM O TEXTO COM AS LETRAS DIGITADAS
  function captureTextToFilterCountries(event: React.ChangeEvent<HTMLInputElement>){
    setSearchCountry(event.target.value)
  }

  // VERIFICAR SE OS DADOS DO COMENTARIO SAO VALIDOS PARA ADICIONAR AO BANCO DE DADOS
  function verifyCommentDataForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;

    const reaction = data.get("reaction")

    const name = String(data.get("name"))
    const comment = String(data.get("comment"))

    const nameLength = name.trim().length
    const commentLength = comment.trim().length

  
    
    if(!name || !(nameLength >= 4 && nameLength <= 100)){
      return setFetchModalInfo({
        message: "Nome muito curto",
        appear:true,
        status:"warning"
      })
    }

    if(!regex.test(name)){
      setFetchModalInfo({
        message: "Nome possui caracteres especiais ",
        appear:true,
        status:"warning"
      })
      return closeFetchModal()
    }

    if(!comment || commentLength <= 0){
      setFetchModalInfo({
        message: "Escreva um comentário",
        appear:true,
        status:"warning"
      })
      return closeFetchModal()
      
    }
      
    if(!reaction) {
      setFetchModalInfo({
        message: "Escolha uma reação",
        appear:true,
        status:"warning"
      })
      return closeFetchModal()
    }

    if(!countrySelected?.country) {
      setFetchModalInfo({
        message: "Escolha o seu país",
        appear:true,
        status:"warning"
      })
      return closeFetchModal()
    }

    const newComment: CreateCommentType = {
      userName:String(name),
      country: String(countrySelected.country),
      reaction: String(reaction),
      comment:String(comment),
      flag: String(countrySelected.image)
    }

    addNewCommentToDataBase(newComment)

    event.currentTarget.reset()

  }

  // ADICIONAR COMENTARIO AO BANCO DE DADOS
  function addNewCommentToDataBase(data: CreateCommentType){
    startIsCommentsPending(async ()=>{
      try {
        const response = await api.post("/comments",{
          userName: data.userName,
          country: data.country,
          reaction: data.reaction,
          comment: data.comment,
          flag: data.flag
        })
        if(response.status === 201){
          setFetchModalInfo({
            message: "Comentário enviado com sucesso!",
            appear:true,
            status:"sucess"
          })
          return closeFetchModal()
        }

      } catch (error) {
        console.log(error)
        setFetchModalInfo({
          message: "Erro no servidor, tente mais tarde!",
          appear:true,
          status:"failed"
        })
        return closeFetchModal()
      }
    })
  }

  // FECHAR MODAL DE STATUS DAS REQUISIÇÕES
  function closeFetchModal(){
    setTimeout(()=>{
      setFetchModalInfo(null)
    }, 3500)
  }

  // BUSCAR TODOS OS PAÍSES ASSIM QUE MONTAR O COMPONENTE EM TELA
  useEffect(()=>{
    startIsSearchCoutryTransition(()=>{
      getAllCountries()
    })
  },[])

  return(
    <form className="w-full flex" id="comment" onSubmit={verifyCommentDataForm}>
      <div className="w-[500px] h-max shrink-0 px-7 py-7 bg-gray-700/15 rounded-2xl space-y-4">
        <h1 className="text-2xl font-medium text-left">Avalie sua experiência!</h1>
        <HorizontalLine/>
        <div className=" space-y-1 text-lg">
          <input 
            type="text" 
            name="name"
            required
            placeholder="seu nome" 
            className="w-full h-16 bg-dark-900 placeholder:text-gray-600 rounded-lg p-6"
          />


          <div className="selectContainer bg-dark-900 text-gray-600" ref={selectContainerRef}>

            {countrySelected?.country 
              ?(
                <div className="relative flex items-center justify-start gap-2">

                  <Image 
                    src={countrySelected.image}
                    alt={countrySelected.country} 
                    className="size-6" 
                    width={600} 
                    height={600}
                  />
                  <p className="text-light">{countrySelected.country}</p>
                </div>
              )
              :(<p className="text-gray-600">Selecione um país</p>)
            }
            

            {openSelectCountrySelect &&
              (
                <div className="select space-y-2 h-full relative">
                  <div className="w-full h-12 rounded-lg border-2 border-[#E8EDEF] flex items-center px-4 overflow-hidden gap-2">
                    <Search className="size-5 text-gray-600"/>
                    <input 
                      type="text"  
                      value={searchCountry}
                      onChange={captureTextToFilterCountries}
                      className="seachInput text-green-900 text-sm" 
                      placeholder="Search your country"
                    />

                  </div>
                  
                  {/* Lista de todos os paises */}
                  <div className="w-full h-full overflow-y-scroll">
                    {isSearchCountryPending
                      ?(<Loader style={{width:"100%",marginTop:24}}/>)
                      :(
                        <>
                          {allCountries.map( country => {
                            const lowerCaseName = country.name.toLowerCase()
                            if(lowerCaseName.includes(searchCountry.toLowerCase())){
                              return (
                                <button 
                                  value=""
                                  key={country.name}
                                  onClick={changeSelectedCountry}
                                  className="w-full h-14 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-900/15 transition-all z-50"
                                >
                                
                                <Image 
                                  src={`https://flagcdn.com/w320/${country.flag}.png`}
                                  alt={country.name}
                                  className="size-6" 
                                  width={100}
                                  height={100}
                                  unoptimized
                                />
                                <p>{country.name}</p>
                              </button> 
                              )
                            }
                          })}
                        </>
                      )
                    }

                  </div>

                </div>
              )
            }
          
          </div>


          <textarea 
            name="comment" 
            placeholder="deixe um comentário..."
            required
            className="w-full h-52 bg-dark-900 placeholder:text-gray-600 rounded-lg p-6 resize-none"
          />

          <button 
            type="submit"
            disabled={isCommentsPending}
            className={`w-full h-16 bg-green-500 text-green-700 rounded-lg text-center 
              text-xl hover:bg-green-500/85 transition-colors flex justify-center items-center
              cursor-pointer ${isCommentsPending && "cursor-wait"}`}
          >
            {isCommentsPending ?<Loader style={{width:24}}/> :"Enviar"}
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        <article className="space-y-4 grid place-items-center" id="reaction-txt">
          <h1 className="text-3xl font-medium text-center">Escolha uma reação!</h1>
          <p className="text-xl font-normal text-center">Sua opinião é importante para nós, diga-nos através de uma reação</p>
        </article>

        <Reactions/>

      </div>

      {fetchModalInfo?.appear && (
        <FetchLoadingState
          message={fetchModalInfo.message}
          status={fetchModalInfo.status}
        />
      )}

    </form>
  )
}