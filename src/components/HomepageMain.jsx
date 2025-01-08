import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HomepageMain() {
  useEffect(() => {
    const scrollingTextElements = document.querySelectorAll(".scrolling-text");

    const resetAnimations = () => {
      scrollingTextElements.forEach((el) => {
        el.style.animation = "none";
        el.offsetHeight;
        el.style.animation = "";
      });
    };

    const handleResize = () => {
      if (window.innerWidth <= 500) {
        if (scrollingTextElements[1])
          scrollingTextElements[1].style.display = "none";
        if (scrollingTextElements[2])
          scrollingTextElements[2].style.display = "none";
      } else {
        if (scrollingTextElements[1])
          scrollingTextElements[1].style.display = "block";
        if (scrollingTextElements[2])
          scrollingTextElements[2].style.display = "block";

        if (scrollingTextElements[0]) {
          scrollingTextElements[0].style.animationDelay = "0s, 0s";
        }
        if (scrollingTextElements[1]) {
          scrollingTextElements[1].style.animationDelay = "7s, 7s";
        }
        if (scrollingTextElements[2]) {
          scrollingTextElements[2].style.animationDelay = "14s, 14s";
        }
        resetAnimations();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="inainte-de-overlay"
        className="relative flex min-h-[63vh] w-full items-center justify-center"
      >
        <img
          src="/repeating-text-pattern-for-photoshop.jpg"
          alt="Background"
          className="absolute left-0 top-0 w-full object-cover opacity-15"
          id="bg-image"
        />

        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white via-transparent to-white"
          id="bg-gradient"
        ></div>

        <div
          id="main"
          className="relative mx-auto flex w-[78%] flex-wrap items-center justify-between px-8"
        >
          <div
            id="stanga-prezentare"
            className="mt-2 flex flex-1 flex-col pr-8 font-montserrat"
          >
            <div id="loading-sageti" className="mb-[70px] ml-[10px]">
              <div className="arrow absolute">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="texte-prezentare" className="text-[3.5rem] font-medium">
              <div>Be in</div>
              <div className="font-semibold">the future,</div>
              <div>not the past.</div>
            </div>

            <div id="descriere-prezentare" className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              ullam odio perferendis perspiciatis aliquid neque nulla minus, est
              nisi ut incidunt beatae a provident magni recusandae vel in fugiat
              officiis.
            </div>

            <Link
              to="/shop"
              className="button-90 mt-16 block flex h-full w-full items-center justify-center"
            >
              Shop
            </Link>
          </div>

          <div className="flex items-center justify-center" id="wrap-imagine">
            <img
              src="/iphone.png"
              alt="iPhone Presentation Image"
              className="h-auto w-full max-w-[600px] flex-1 object-contain"
              id="poza-iphone"
            />
          </div>
        </div>
      </div>

      <div
        id="overlay"
        className="scrolling-container relative flex h-[50px] h-[7vh] w-full content-center items-center justify-center overflow-hidden bg-black px-4 font-montserrat text-3xl font-bold text-white"
      >
        <div className="scrolling-text absolute w-full whitespace-nowrap opacity-0">
          THE JOURNEY STARTS HERE
        </div>
        <div className="scrolling-text absolute w-full whitespace-nowrap opacity-0">
          THE JOURNEY STARTS HERE
        </div>
        <div className="scrolling-text absolute w-full whitespace-nowrap opacity-0">
          THE JOURNEY STARTS HERE
        </div>
      </div>
    </>
  );
}
