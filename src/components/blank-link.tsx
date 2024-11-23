import { CSSProperties, ReactNode } from "react";

interface BlankLinkProps {
  blankTo: string
  children: ReactNode
  styles?: CSSProperties
}

export function BlankLink({
  children,
  blankTo,
  styles
}:BlankLinkProps){
  return(
    <a 
      href={blankTo} 
      target="_blank" 
      style={styles}
      rel="noopener noreferrer" 
      className="size-10 rounded-full flex items-center text-gray-600 justify-center border border-gray-600 hover:border-light hover:text-light transition-colors"
    >
      {children}
    </a>
  )
}