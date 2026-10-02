import Logo from "@/components/Logo";

import { useState } from "react";
import { navLinks } from "@/lib/data";

import { X, Menu } from "lucide-react";
import NavLink from "@/components/NavLink";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <header className="fixed top-8 w-full z-10">
      <div className="max-w-7xl px-6 mx-auto w-full flex items-center gap-16 max-md:justify-between">
        <button
          className="cursor-pointer md:hidden text-white"
          aria-expanded={openMenu}
          aria-controls="mobileNav"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          onClick={handleOpenMenu}
        >
          {openMenu ? <X /> : <Menu />}
        </button>

        <Logo />

        <nav className="hidden md:block text-white">
          {" "}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink link={link} key={link} />
            ))}
          </ul>
        </nav>

        <div></div>
      </div>

      {openMenu && (
        <nav className="bg-white text-black md:hidden" id="mobileNav">
          <ul className="flex flex-col justify-center p-6 items-center gap-4">
            {navLinks.map((link) => (
              <NavLink link={link} key={link} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
