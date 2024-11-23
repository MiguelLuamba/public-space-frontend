import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import('./mars-model'), { ssr: false });

export function ExploreSectionMobile(){
  return(
    <section id="explore" className="exp w-full h-screen bg-marsSecLinear2 
      px-4 py-6 font-poppins flex-col justify-between items-center"
    >
      <article className="w-full flex items-start justify-between">
        <div>
          <p className="text-4xl font-medium">Marte</p>
          <span className="text-red-100 text-base font-semibold">O Planeta Vermelho</span>
        </div>
        <p className="text-3xl font-medium">Luas: <span className="text-red-100">1</span></p>
      </article>

      {/* <figure className="size-80 bg-purple-400 z-50 relative"> */}
        <ModelViewer styles={{width:320, height:320}} camera_controls/>
      {/* </figure> */}


      <article className="space-y-2 w-full">

        <div>
          <h4 className="text-red-100 font-semibold text-xl">Orbita</h4>
          <p className="text-base">
            <strong>Periodo Orbital: </strong><br />
            Cerca de 365.25 days
          </p>
        </div>


        <div>
          <h4 className="text-red-100 font-semibold text-xl">Distância do sol</h4>
          <p className="text-2xl font-bold">
          149.600.000 km
          </p>
        </div>


        <div>
          <h4 className="text-red-100 font-semibold text-xl">Tamanho</h4>
          <p className="text-base">
            <strong>Diametro: </strong>
            12,742 km, 
          </p>

          <p className="text-base">
            <strong>Circunferência equatorial: </strong>
            cerca de 40,075 km
          </p>
        </div>
      </article>

    </section>


  )
}