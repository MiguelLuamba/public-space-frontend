import Link from "next/link";
import Image from "next/image";

export default function PageNotFound(){
  return (
    <main className="w-full h-screen bg-pageNotFoundLinear flex flex-col items-center justify-center">
      
      <article className="text-4xl font-normal text-center">
        <p className="text-gray-800">Oops...</p>
        <p>Something went wrong</p>
      </article>

      <div className="flex items-center justify-between text-[200px] gap-16 font-bold">
        <p>4</p>
        <figure className="size-60 rounded-full overflow-hidden shadow-notFound">
          <Image 
            src="/bg/not-found.jpg" 
            alt="not-found image" 
            width={700} height={700}
            className="size-full object-cover"
          />
        </figure>
        <p>4</p>
      </div>

      <div className="space-y-2 flex-col items-center justify-between flex">
        <p>Page Not Found</p>
        <Link href="/" className="w-80 h-14 rounded-lg bg-green-500 hover:bg-green-500/90 transition-colors text-green-700 text-2xl font-normal flex items-center justify-center">
          Back to home
        </Link>
      </div>

    </main>
  )
}
