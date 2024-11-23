import "@/styles/footer-responsive.css";
import { MoreInfoSection } from "./more-info";
import { CommentsForm } from "./comments-form/";
import { NewslatterForm } from "./newslatter-form";
import { HorizontalLine } from "@/components/horizontal-line";



export function Footer(){
  return(
    <footer id="footer" className="w-full h-max px-14 py-8 space-y-8">

      <NewslatterForm/>

      <HorizontalLine/>

      <CommentsForm/>
      
      <HorizontalLine/>

      <MoreInfoSection/>

    </footer>
  )
}

