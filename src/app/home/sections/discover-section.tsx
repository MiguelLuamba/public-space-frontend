import Image from "next/image";
import "@/styles/discover-responsive.css";

export function DiscoverSection(){
  return(
    <section 
      id="discover"
      className="size-full bg-bigAstronaut bg-green-900 bg-cover overflow-hidden
      bg-center bg-no-repeat flex flex-col justify-between p-12 bg-discoverPosition"
    >
      <div className="size-full pt-8 px-2.5 font-poppins space-y-4" id="mobile">
        <p className="text-5xl font-semibold">
          Descura
          as <span className="bg-clip-text text-transparent bg-logo">Maravilhas </span>
          do Espaço
        </p>

        <span className="text-light text-2xl font-medium">
          Faça parte da nossa comunidade 
          e estar sempre atualizado
          com novidades espaciais
        </span>

        <figure className="self-end">
          <Image
            src="/img/astronaut2.png" 
            alt="astronaut-2" 
            width={1000} height={1000}
            className="size-full"
          />
        </figure>
      </div>
      
      <article className="font-semibold flex justify-between">
        <p className="text-5xl">
          Descura <br />
          as <span className="bg-clip-text text-transparent bg-logo">Maravilhas</span> <br />
          do Espaço
        </p>


        <p className="text-5xl">
          Explore <br />
          a vastidão <br />
          do espaço
        </p>



      </article>

      <article className="font-semibold flex justify-between">

        <div className="flex flex-col justify-end text-left">
          <p className="text-gray-900">Expanda seus horizontes</p>
          <span className="text-light text-xl">
            Faça parte da nossa comunidade <br />
            e estar sempre atualizado <br />
            com novidades espaciais
          </span>
        </div>


        <span className="text-4xl">
          <span className="text-gray-900">Seja ousado</span> <br />
          explore as <br /> curiosidades <br />
          do espaço sideral
        </span>


      </article>

    </section>
  )
}