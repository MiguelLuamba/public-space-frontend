'use client'

import "./styles.css";
import Lottie from "lottie-react";
import BadReaction from "/public/lottie/bad.json";
import NiceReaction from "/public/lottie/nice.json";
import GoodReaction from "/public/lottie/good.json";
import AwfullReaction from "/public/lottie/awfull.json";
import ExcelentReaction from "/public/lottie/excelent.json";

export function Reactions(){
  return(
    <div id="reactions" className="flex items-center justify-center gap-6 flex-wrap">
            
      <input type="radio" name="reaction" id="awfull" value="awfull"/>
      <label htmlFor="awfull" className="awfull flex flex-col items-center justify-center gap-2 cursor-pointe">
        <div className="size-20 rounded-full transition-all flex justify-center items-center relative">
          <Lottie animationData={AwfullReaction} className="size-full z-50"/>
          <div className="rcbx"/>
        </div>
        <p className="text-xl font-normal">horrível</p>
      </label>

      <input type="radio" name="reaction" id="bad" value="bad"/>
      <label htmlFor="bad" className="bad flex flex-col items-center justify-center gap-2 cursor-pointe">
        <div className="size-20 rounded-full transition-all flex justify-center items-center relative">
          <Lottie animationData={BadReaction} className="size-full z-50"/>
          <div className="rcbx"/>
        </div>
        <p className="text-xl font-normal">mau</p>
      </label>


      <input type="radio" name="reaction" id="good" value="good"/>
      <label htmlFor="good" className="good flex flex-col items-center justify-center gap-2 cursor-pointe">
        <div className="size-20 rounded-full transition-all flex justify-center items-center relative">
          <Lottie animationData={GoodReaction} className="size-full z-50"/>
          <div className="rcbx"/>
        </div>
        <p className="text-xl font-normal">bom</p>
      </label>


      <input type="radio" name="reaction" id="nice" value="nice"/>
      <label htmlFor="nice" className="nice flex flex-col items-center justify-center gap-2 cursor-pointe">
        <div className="size-20 rounded-full transition-all flex justify-center items-center relative">
          <Lottie animationData={NiceReaction} className="size-full z-50"/>
          <div className="rcbx"/>
        </div>
        <p className="text-xl font-normal">fixe</p>
      </label>

      <input type="radio" name="reaction" id="excelent" value="excelent"/>
      <label htmlFor="excelent" className="excelent flex flex-col items-center justify-center gap-2 cursor-pointe">
        <div className="size-20 rounded-full transition-all flex justify-center items-center relative">
          <Lottie animationData={ExcelentReaction} className="size-[80%] bg-transparent z-50"/>
          <div className="rcbx"/>
        </div>
        <p className="text-xl font-normal">exelente</p>
      </label>


    </div>
  )
}