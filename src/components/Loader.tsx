import Lottie from "lottie-react";
import { CSSProperties } from "react";
import Loading from "/public/lottie/loading.json";


interface LoaderProps{
  style?: CSSProperties
}
export function Loader({
  style
}:LoaderProps){
  return(
    <Lottie 
      animationData={Loading} 
      className="size-6" 
      style={style} 
      alt="loading"
    />
  )
}