import Image from "next/image";
import "@/styles/home-responsive.css";
import { Logo } from "@/components/logo";
import { Contrast, MapPin } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";

export function HomeSection(){

  return(
    <section id="home" className="size-full overflow-hidden m-auto">
      <header className="w-full shrink-0 py-7 m-auto flex justify-between items-center relative px-[10%]">
        <Logo/>
        <nav className="text-xl text-gray-800 font-normal flex gap-12">
          <a href="#home" className="hover:text-light transition-colors">Home</a>
          <a href="#discover" className="hover:text-light transition-colors">Discover</a>
          <a href="#explore" className="hover:text-light transition-colors">Explore</a>
          <a href="#comments" className="hover:text-light transition-colors">Comments</a>
        </nav>
        <MobileMenu/>
      </header>

      <div className="flex-auto flex items-start justify-between px-[10%]">
        <aside className="sm:space-y-2 w-1/2">
          <p className="text-gray-800 font-normal text-2xl">Bem-vindo ao Espaço Sideral</p>
          <article className="flex items-center justify-start gap-4 text-4xl">
            <span>Desbloqueie</span>
            <p className="size-16 rounded-full bg-purple-900 flex items-center justify-center">
              <Contrast className="size-10 text-purple-800"/>
            </p>
            <span className="text-purple-800">Sua Mente</span>
          </article>

          <article className="flex items-center justify-start gap-4 text-4xl">
            <span>Contemple</span>
            <p className="size-16 rounded-full bg-green-700 flex items-center justify-center">
              <MapPin className="size-10 text-green-600"/>
            </p>
            <span className="text-green-600">o espaço</span>
          </article>

          <p className="text-5xl">Descubra novos horizontes.</p>
          <p className="text-2xl text-gray-800">
            Experimente os recursos da nossa <br />
            comunidade e receba novos conteúdos<br />
            e fatos interessantes sobre <br />
            os planetas do sistema solar.
          </p>
          

        </aside>

        <figure className="w-1/2 h-1/2">

          <Image 
            src="/img/astronaut.png" 
            alt="astrunaut" 
            width={1000} height={1000}
            className="size-full"
          />
        </figure>
      </div>

    </section>

  )
}