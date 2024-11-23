'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu(){
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  function changeBurgerMenuState(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }
  
  return(
    <div className="mobile-menu">
      {isBurgerMenuOpen
        ?(
          <>
            <X className="size-8 cursor-pointer text-zinc-50" onClick={changeBurgerMenuState}/>
            <nav className="absolute w-full h-max p-3 flex flex-col gap-2 overflow-hidden top-1/2 z-50 bg-zinc-50 left-0 text-2xl text-gray-800 font-normal animate-burgerMenu">
              <a href="#home" onClick={changeBurgerMenuState} className="transition-colors hover:bg-gray-900 hover:text-zinc-50 px-3 py-4 rounded-lg">Home</a>
              <a href="#discover" onClick={changeBurgerMenuState} className="transition-colors hover:bg-gray-900 hover:text-zinc-50 px-3 py-4 rounded-lg">Discover</a>
              <a href="#explore" onClick={changeBurgerMenuState} className="transition-colors hover:bg-gray-900 hover:text-zinc-50 px-3 py-4 rounded-lg">Explore</a>
              <a href="#comments" onClick={changeBurgerMenuState} className="transition-colors hover:bg-gray-900 hover:text-zinc-50 px-3 py-4 rounded-lg">Comments</a>
            </nav>
          </>
        )
        :<Menu className="size-8 text-zinc-50 cursor-pointer" onClick={changeBurgerMenuState}/>
      }
    </div>
  )
}