import DiscoverDesktopImage from "@/assets/images/desktop-image-hero-1.jpg";
import DiscoverMobileImage from "@/assets/images/mobile-image-hero-1.jpg";

import AvailableDesktopImage from "@/assets/images/desktop-image-hero-2.jpg";
import AvailableMobileImage from "@/assets/images/mobile-image-hero-2.jpg";

import ManufacturedDesktopImage from "@/assets/images/desktop-image-hero-3.jpg";
import ManufacturedMobileImage from "@/assets/images/mobile-image-hero-3.jpg";
import type { HeroContentTypes, Navlink } from "@/lib/types";

export const navLinks: Navlink[] = ["home", "shop", "about", "contact"];

export const HeroContent: HeroContentTypes[] = [
  {
    id: 1,
    heading: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and  make your property a reflection of you and what you love.",
    desktopImage: DiscoverDesktopImage,
    mobileImage: DiscoverMobileImage,
    imageAlt: "Three chairs and one table",
  },
  {
    id: 2,
    heading: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    desktopImage: AvailableDesktopImage,
    mobileImage: AvailableMobileImage,
    imageAlt: "Three chairs",
  },
  {
    id: 3,
    heading: "Manufactured with the best materials",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and  make your property a reflection of you and what you love.",
    desktopImage: ManufacturedDesktopImage,
    mobileImage: ManufacturedMobileImage,
    imageAlt: "Black chair",
  },
];
