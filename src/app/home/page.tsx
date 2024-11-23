"use client";

import "@/styles/main-responsive.css";
import { Footer } from "./sections/footer";
import { useEffect, useRef, useState } from "react";
import { HomeSection } from "./sections/home-section";
import { ExploreSection } from "./sections/explore-section"
import { CommentSection } from "./sections/comment-section";
import { DiscoverSection } from "./sections/discover-section";
import { ExploreSectionMobile } from "@/components/expore-section-mobile";
import { WindowScrollController } from "@/components/window-scroll-controller";


export default function Home() {
  const commentRef = useRef<HTMLDivElement>(null);
  const [isOnCommentSection, setIsOnCommentSection] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleScrollController() {
        if (commentRef.current) {
          const { top } = commentRef.current.getBoundingClientRect();
          setIsOnCommentSection(top <= 200);
        }
      }

      window.addEventListener("scroll", handleScrollController);

      return () => {
        window.removeEventListener("scroll", handleScrollController);
      };
    }
  }, []);

  return (
    <main className="size-full">
      <HomeSection />
      <DiscoverSection />
      <ExploreSection />
      <ExploreSectionMobile />
      <div ref={commentRef}>
        <CommentSection />
      </div>
      <Footer />
      {!isOnCommentSection && <WindowScrollController />}
    </main>
  );
}
