import Picture from "@/components/Picture";

import RightArrow from "@/assets/images/icon-arrow.svg";
import { useState, type KeyboardEvent } from "react";

import { heroContent } from "@/lib/data";

import RightScrollBtn from "@/assets/images/icon-angle-right.svg";
import LeftScrollBtn from "@/assets/images/icon-angle-left.svg";

function SectionOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroItem = heroContent[activeIndex];

  function showPreviousSlide() {
    setActiveIndex((index) => (index - 1 + heroContent.length) % heroContent.length);
  }

  function showNextSlide() {
    setActiveIndex((index) => (index + 1) % heroContent.length);
  }

  function handleControlsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextSlide();
    }
  }

  return (
    <section aria-label="Featured furniture" aria-roledescription="carousel" className="grid lg:grid-cols-[3fr_2fr]">
      <Picture
        desktopSrc={heroItem.desktopImage}
        mobileSrc={heroItem.mobileImage}
        alt={heroItem.imageAlt}
        imgClassName="size-full object-cover"
      />

      <div className="grid place-items-center p-12 relative">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{heroItem.heading}</h1>

          <p>{heroItem.paragraph}</p>

          <a href="#" className="uppercase font-bold tracking-[1ch] flex items-center">
            Shop now <img src={RightArrow} alt="" />
          </a>
        </div>

        <div
          aria-label="Slide controls"
          className="absolute left-0 bottom-0 flex"
          onKeyDown={handleControlsKeyDown}
          role="group"
        >
          <button
            aria-label="Previous slide"
            className="size-12 bg-black hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black grid place-items-center cursor-pointer"
            onClick={showPreviousSlide}
            type="button"
          >
            <img src={LeftScrollBtn} alt="" />
          </button>

          <button
            aria-label="Next slide"
            className="size-12 bg-black hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black grid place-items-center cursor-pointer"
            onClick={showNextSlide}
            type="button"
          >
            <img src={RightScrollBtn} alt="" />
          </button>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {activeIndex + 1} of {heroContent.length}: {heroItem.heading}
        </p>
      </div>
    </section>
  );
}

export default SectionOne;
