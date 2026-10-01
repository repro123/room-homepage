import MobileHeader from "@/components/Header";
import Picture from "@/components/Picture";

import RightArrow from "@/assets/images/icon-arrow.svg";

function SectionOne() {
  return (
    <section className="grid lg:grid-cols-[3fr_2fr]">
      <MobileHeader />
      <Picture desktopSrc={DesktopImage} mobileSrc={MobileImage} alt="" imgClassName="size-full object-cover" />

      <div className="grid place-items-center p-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold"></h1>

          <p></p>

          <a href="#" className="uppercase font-bold tracking-[1ch] flex items-center">
            Shop now <img src={RightArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
