import AboutImage from "@/components/AboutImage";
import AboutOurFurniture from "@/components/AboutOurFurniture";

import AboutImageDark from "@/assets/images/image-about-dark.jpg";
import AboutImageLight from "@/assets/images/image-about-light.jpg";

function SectionTwo() {
  return (
    <section className="grid lg:grid-cols-3">
      <AboutImage src={AboutImageDark} alt="Dark Furnitures" />

      <AboutOurFurniture />

      <AboutImage src={AboutImageLight} alt="Light Furnitures" />
    </section>
  );
}

export default SectionTwo;
