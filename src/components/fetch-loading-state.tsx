interface FetchLoadingStateProps{
  status: "sucess" | "failed" | "warning"
  message: string
}

export function FetchLoadingState({
  status,
  message
}: FetchLoadingStateProps){

  let color = ""

  if(status === "sucess") { color="#0f0"}
  if(status === "failed") { color="#f00"}
  if(status === "warning"){ color="#ff0"}
  
  return(
    <div className="w-80 h-16 bg-light z-50 fixed top-0 left-0 overflow-hidden rounded-lg -translate-y-full animate-apearModal">
      <article className=" size-full flex p-4 pt-5">
        <p className="text-gray-950 text-base ">{message}</p>

        <div 
          className={`w-full absolute bottom-0 left-0 h-1.5 
          animate-diminute`}
          style={{
            backgroundColor:`${color}`
          }}
        />
      </article>
    </div>

  )
}