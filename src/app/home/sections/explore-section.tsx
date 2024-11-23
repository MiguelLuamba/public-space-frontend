"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import "@/styles/explore-responsive.css";
import { useEffect, useRef, useState } from "react";

// Importação dinâmica do ModelViewer
const ModelViewer = dynamic(() => import('@/components/mars-model'), { ssr: false });

export function ExploreSection() {
  const marsFirstRef = useRef<HTMLDivElement>(null);
  const marsSecondRef = useRef<HTMLDivElement>(null);
  const exploreSectionRef = useRef<HTMLDivElement>(null);
  const lastSecExploreRef = useRef<HTMLDivElement>(null);
  const [apearMarsOnLastSec, setApearMarsOnLastSec] = useState<boolean>(false);
  const [observeMarsModel, setObserveMarsModel] = useState(false);
  const [modelViewerTypeAnimation, setModelViewerTypeAnimation] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      function modelViewerScrollAnimateAndMarsAprears() {
        if (marsSecondRef.current) {
          const marsSecondPosition = marsSecondRef.current.getBoundingClientRect().y;
          if (marsSecondPosition >= 0 && marsSecondPosition <= 400) {
            setModelViewerTypeAnimation("animate-goToSecondSection");
          } else if (marsSecondPosition > 400) {
            setModelViewerTypeAnimation("animate-goToFirstSection");
          }
        }

        if (lastSecExploreRef.current) {
          const lastSecPosition = lastSecExploreRef.current.getBoundingClientRect().y;
          setApearMarsOnLastSec(lastSecPosition <= 124);
        }
      }

      window.addEventListener("scroll", modelViewerScrollAnimateAndMarsAprears);

      return () => {
        window.removeEventListener("scroll", modelViewerScrollAnimateAndMarsAprears);
      };
    }
  }, []);

  const changeObserveMarsStatus = () => setObserveMarsModel(!observeMarsModel);

  return (
    <section
      id="explore"
      className="w-full h-max flex flex-col bg-red-900 relative"
      ref={exploreSectionRef}
    >
      <div className="w-full h-[100vh] bg-marsSecLinear relative overflow-hidden" ref={marsFirstRef}>
        <div className="size-72 rounded-full bg-orange-900 blur-2xl shadow-circle_explore absolute top-0 left-40" />
        <h1 className="joinUsText">Junte-se a Nós</h1>
        <article className="w-max h-max ml-24 text-6xl mt-10 space-y-8 relative">
          <p className="font-anton">Explore o Cosmos</p>
          <p className="text-8xl text-orange-800 font-anton">E GANHE</p>
          <p className="font-anton">Mais conhecimento <br /> sobre os astros</p>
        </article>
        <div
          id="model-box"
          onClick={changeObserveMarsStatus}
          className="place-items-center w-full mt-5 hidden"
        >
          <ModelViewer id="model" styles={{ width: 450, height: 450 }} camera_controls={false} />
        </div>
      </div>

      <div className="w-full h-[100vh] flex justify-end items-center p-14 bg-marsSecLinear2" ref={marsSecondRef}>
        
        <div className="space-y-10">
          <article className="text-left text-xl space-y-7">
            <p className="font-medium p-4 rounded-lg shadow-shape w-max">Planeta Marte</p>
            <p>
              Marte, frequentemente chamado de &quot;Planeta Vermelho&quot; <br />
              devido à sua coloração característica, é o quarto <br />
              planeta do Sistema Solar
            </p>
          </article>

          <article className="flex gap-12">

            <div className="flex flex-col justify-center items-start font-semibold">
              <p className="text-light text-xl">Luas</p>
              <span className="text-orange-800 text-5xl self-center">2</span>
            </div>

            <div className="flex flex-col justify-center items-start font-semibold">
              <p className="text-light text-xl">Distância do Sol</p>
              <p className="text-orange-800 text-5xl">
                228.000.000 <span className="text-2xl">km</span>
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 items-start font-semibold">
              <p className="text-light text-xl">Potencial para vida</p>
              <p className="font-light">não há evidência direta </p>
            </div>
            
          </article>


          <article className="flex gap-12">
            <div className="flex flex-col justify-center gap-4 items-start font-semibold">
              <p className="text-light text-xl">Tamanho</p>
              <p className="text-base">
                <span className="font-light">Diâmetros: </span>6.779 km, <br />
                <span className="font-light">Circunferência equatorial: </span>cerca de 21.344  km
              </p>
            </div>


            <div className="flex flex-col justify-center gap-4 items-start font-semibold">
              <p className="text-light text-xl">Orbita</p>
              <p className="text-base">
                <span className="font-light">Período orbital: </span> <br/>
                Cerca de 687 dias terrestres
              </p>
            </div>

          </article>

        </div>
      </div>

      <div id="rd-sec" className="w-full h-[100vh] pt-6 px-3 bg-marsSecLinear3 overflow-hidden" ref={lastSecExploreRef}>
        
        <section className="w-full h-auto mx-auto flex items-start justify-between">
          <article>
            <h1 className="text-5xl font-bold">Marte</h1>
            <p className="font-medium text-xl text-light">
              Possui solo rico em óxido de ferro,  <br />
              tornando-o vermelho.
            </p>
          </article>

          <div className="flex items-center gap-24 h-full">
            <article className="space-y-8 text-center">
              <p className="font-inter text-4xl font-extralight text-center">25.2*</p>
              <p className="font-medium text-light text-xl">Orientação Axial</p>
            </article>


            <article className="space-y-8 text-center">
              <p className="font-inter text-4xl font-extralight text-center">3,71 <span className="text-2xl">m/s²</span></p>
              <p className="font-medium text-light text-xl">Gravidade</p>
            </article>


            <article className="space-y-8 text-center">
              <p className="font-inter text-4xl font-extralight text-center">687 <span className="text-2xl">dias/ anos</span></p>
              <p className="font-medium text-light text-xl">dias terrestres</p>
            </article>
          </div>

        </section>

        <figure className={`w-full translate-y-full opacity-0 h-2/3 ${apearMarsOnLastSec && "animate-apearMars"}`}>
          <Image width={2500} height={2500} src="/planets/bigMars.png" alt="middle mars" className="marsApear"/>
        </figure>

      </div>

      <figure
        className={`size-[800px] flex justify-center items-center absolute top-32 left-1/2 ${modelViewerTypeAnimation}`}
      >
        <ModelViewer camera_controls={false} styles={{ width: "90%", height: "90%" }} />
      </figure>
    </section>
  );
}
