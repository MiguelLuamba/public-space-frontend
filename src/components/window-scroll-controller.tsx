'use client';

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect } from "react";

export function WindowScrollController() {
  // SCROLL PAGE TO TOP
  function upFunctionButton() {
    // Verifica se o comportamento de "smooth" é suportado pelo navegador
    if ('scrollBehavior' in document.documentElement.style) {
      window.scroll({
        top: window.scrollY - window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scroll(0, window.scrollY - window.innerHeight); // Fallback sem smooth
    }
  }

  // SCROLL PAGE TO DOWN
  function downFunctionButton() {
    // Verifica se o comportamento de "smooth" é suportado pelo navegador
    if ('scrollBehavior' in document.documentElement.style) {
      window.scroll({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scroll(0, window.scrollY + window.innerHeight); // Fallback sem smooth
    }
  }

  useEffect(() => {
    // O useEffect pode ser usado para garantir que o código relacionado ao `window` seja executado apenas no cliente
  }, []);

  return (
    <div className="fixed space-y-4 top-[40%] right-8 transition-all" id="controller">
      <button
        type="button"
        onClick={upFunctionButton}
        aria-label="Scroll up"
        className="bg-light/5 hover:bg-light/20 backdrop-blur-md transition-colors size-12 rounded-lg shadow-shape flex items-center justify-center"
      >
        <ChevronUp className="size-6 text-light" />
      </button>

      <button
        type="button"
        onClick={downFunctionButton}
        aria-label="Scroll down"
        className="bg-light/5 hover:bg-light/20 backdrop-blur-md transition-colors size-12 rounded-lg shadow-shape flex items-center justify-center"
      >
        <ChevronDown className="size-6 text-light" />
      </button>
    </div>
  );
}
