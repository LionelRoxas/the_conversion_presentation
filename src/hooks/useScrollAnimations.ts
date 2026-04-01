import { useEffect } from "react";

export function useScrollAnimations() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const scrollama = (await import("scrollama")).default;

      gsap.registerPlugin(ScrollTrigger);

      // Scrollama step triggers
      const scroller = scrollama();
      scroller
        .setup({ step: ".step", offset: 0.5 })
        .onStepEnter(({ element }: { element: Element }) => {
          element.classList.add("is-active");
        })
        .onStepExit(({ element }: { element: Element }) => {
          element.classList.remove("is-active");
        });

      // Hero fade on scroll
      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0,
        },
        opacity: 0,
        y: -60,
      });

      const handleResize = () => scroller.resize();
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        scroller.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
        window.removeEventListener("resize", handleResize);
      };
    })();

    return () => cleanup?.();
  }, []);
}
