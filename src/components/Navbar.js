"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function NavSoon({ children }) {
  return (
    <span className="absolute -top-3 rounded-full bg-primary px-2 py-1 text-xs opacity-0 transition-all duration-500 group-hover:opacity-100">
      {children}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Full opacity on current route; dim others. */
  const navItemClass = (isActive) =>
    isActive ? "" : "opacity-50 group hover:opacity-100";

  const linkClassMobile =
    "block w-full max-w-xs py-4 text-center text-xl font-medium tracking-wide active:opacity-80";

  return (
    <nav className="relative z-50">
      <div
        className={`flex items-center justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5 md:px-8 md:pl-10 md:pt-5 ${
          open ? "bg-background" : ""
        }`}
      >
        <div className="font-kode-mono group min-w-0 flex-1 transition-all duration-200 ease-linear md:flex-none md:pl-0">
          <Link href="/" className="text-primary inline-block" onClick={() => setOpen(false)}>
            <div className="flex items-center text-lg sm:text-xl md:text-2xl">
              <span>&lt;</span>
              <span className="w-0 overflow-hidden opacity-0 transition-all duration-200 ease-linear group-hover:w-36 md:group-hover:w-40 h-8 group-hover:opacity-100 whitespace-nowrap">
                Furkan İpek
              </span>
              <span>/&gt;</span>
            </div>
          </Link>
        </div>
        <div className="ml-auto flex items-center 2xl:text-3xl">
          <ul className="hidden items-center gap-12 md:flex lg:gap-16 xl:gap-20">
            <li className={navItemClass(pathname === "/")}>
              <Link href="/">Home</Link>
            </li>
            <li className={navItemClass(pathname === "/about")}>
              <Link href="/about" className="relative">
                About
              </Link>
            </li>
            <li className={navItemClass(pathname === "/portfolio")}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="relative cursor-not-allowed opacity-50">
              <span className="group relative inline-block cursor-not-allowed select-none">
                Services
                <NavSoon>Soon</NavSoon>
              </span>
            </li>
            <li className={navItemClass(pathname === "/contact")}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="-mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/5 active:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <IoIosCloseCircleOutline size={28} />
            ) : (
              <RxHamburgerMenu size={28} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[4.25rem] z-40 flex flex-col items-stretch bg-background/98 backdrop-blur-md pb-[max(1rem,env(safe-area-inset-bottom))] transition-[visibility,opacity] duration-200 ease-out ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-1 flex-col items-center gap-0 overflow-y-auto px-4 pb-10 pt-6 sm:px-6">
          <li className={`w-full max-w-sm border-b border-white/10 ${navItemClass(pathname === "/")}`}>
            <Link href="/" className={linkClassMobile} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li className={`w-full max-w-sm border-b border-white/10 ${navItemClass(pathname === "/about")}`}>
            <Link href="/about" className={linkClassMobile} onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li className={`w-full max-w-sm border-b border-white/10 ${navItemClass(pathname === "/portfolio")}`}>
            <Link href="/portfolio" className={linkClassMobile} onClick={() => setOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="w-full max-w-sm border-b border-white/10 cursor-not-allowed opacity-50">
            <span className={`${linkClassMobile} pointer-events-none flex items-center justify-center gap-2`}>
              Services
              <span className="rounded-full bg-primary/90 px-2 py-0.5 font-kode-mono text-[0.65rem] uppercase tracking-wider text-background">
                Soon
              </span>
            </span>
          </li>
          <li className={`w-full max-w-sm ${navItemClass(pathname === "/contact")}`}>
            <Link href="/contact" className={linkClassMobile} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
