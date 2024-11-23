
import { Logo } from "@/components/logo";
import { BlankLink } from "@/components/blank-link";
import { FooterList } from "@/components/footer-list";
import { HorizontalLine } from "@/components/horizontal-line";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export function MoreInfoSection(){
  return(
    <>
      <div className="flex items-start justify-between flex-wrap" id="footerlist">
        <Logo/>
        <FooterList
          title="Conteúdos"
          childs={["Início", "Descobrir", "Explorar", "Planetas"]}
        />

        <FooterList 
          title="Mídia Social"
          childs={["Facebook", "LinkedIn", "GitHub", "Instagram"]}
        />

        <FooterList 
          title="Legal"
          childs={["Termos", "Licenças", "Privacidade", "Cookies"]}
        />

        <FooterList 
          title="Empresa & Parceiros"
          childs={["SPACE, SA", "Batchaca Code, SA"]}
        />

        
      </div>

      <HorizontalLine/>

      <div className="flex items-center justify-between text" id="copy-box">
        <p className="text-xl font-normal" id="copyright">Miguel Luamba, Todos os Direitos Reservados, 2024</p>

        <div className="flex items-center justify-between gap-4">
          <BlankLink blankTo="https://web.facebook.com/jonhalbino.joi">
            <Facebook className="size-6" strokeWidth={1}/>
          </BlankLink>

          <BlankLink blankTo="https://www.instagram.com/_miguelluamba/">
            <Instagram className="size-6" strokeWidth={1}/>
          </BlankLink>

          <BlankLink blankTo="https://www.linkedin.com/in/miguel-luamba-ba661b254/">
            <Linkedin className="size-6" strokeWidth={1}/>
          </BlankLink>

          <BlankLink blankTo="https://github.com/miguelluamba">
            <Github className="size-6" strokeWidth={1}/>
          </BlankLink>
        </div>
      </div>
    </>
  )
}