import Lottie from "lottie-react";
import Bad from "/public/lottie/bad.json";
import Good from "/public/lottie/good.json";
import Nice from "/public/lottie/nice.json";
import Awfull from "/public/lottie/awfull.json";
import Excelent from "/public/lottie/excelent.json";
import { CreateCommentType } from "@/interfaces/create-comment";
import Image from "next/image";

export function CommentCard({
  comment,
  userName,
  reaction,
  flag
}:Partial<CreateCommentType>){
  return(
    <div className="h-max grid break-inside-avoid bg-blue-600 rounded-xl p-4 mb-4 shadow-comment_card font-inter space-y-3">
      <article className="w-full flex space-x-3 items-center">
        <div className="size-10 rounded-full overflow-hidden bg-slate-600">

          <Image
            src={flag?flag:""} 
            width={500} height={500}
            alt="bandeira" 
            className="object-cover size-full"
          />
        </div>
        <p className="text-base font-bold text-light">{userName}</p>
      </article>

      <p className="text-light font-light text-left break-words line-clamp-3">
        {comment}
      </p>

      <div className="size-10 rounded-full overflow-hidden bg-slate-600 block justify-self-end cursor-pointer">
        {reaction?.toLowerCase() === "bad" && (<Lottie animationData={Bad}/>)}
        {reaction?.toLowerCase() === "nice" && (<Lottie animationData={Nice}/>)}
        {reaction?.toLowerCase() === "good" && (<Lottie animationData={Good}/>)}
        {reaction?.toLowerCase() === "awfull" && (<Lottie animationData={Awfull}/>)}
        {reaction?.toLowerCase() === "excelent" && (<Lottie animationData={Excelent}/>)}
      </div>
    </div>

  )
}
