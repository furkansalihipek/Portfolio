"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function NavSoon({ children }) {
  return (
    <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
      {children}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileMenu = useRef(null);

  const openHandle = () => setOpen((v) => !v);

  useEffect(() => {
    if (!mobileMenu.current) return;
    if (open) {
      mobileMenu.current.className =
        "flex flex-col justify-center items-center";
    } else {
      mobileMenu.current.className = "hidden";
    }
  }, [open]);

  /** Full opacity on current route; dim others. */
  const navItemClass = (isActive) =>
    isActive ? "" : "opacity-50 group hover:opacity-100";

  return (
    <nav>
      <div className="flex mt-5 justify-between items-center">
        <div className="font-kode-mono group pl-10 transition-all duration-200 ease-linear">
          <Link href="/" className="text-primary">
            <div className="flex text-xl md:text-2xl">
              <div>&lt;</div>
              <div className="w-0 overflow-hidden opacity-0 transition-all duration-200 ease-linear group-hover:w-36 md:group-hover:w-40 h-8 group-hover:opacity-100">
                Furkan İpek
              </div>
              <div>/&gt;</div>
            </div>
          </Link>
        </div>
        <ul className="flex gap-20 ml-auto 2xl:text-3xl">
          <div className="gap-20 items-center justify-center hidden md:flex">
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
          </div>
          <button
            type="button"
            onClick={openHandle}
            className="block md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <IoIosCloseCircleOutline size={30} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </ul>
      </div>
      <ul className="hidden" ref={mobileMenu}>
        <li className={`mb-5 mt-5 ${navItemClass(pathname === "/")}`}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className={`mb-5 ${navItemClass(pathname === "/about")}`}>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className={`mb-5 ${navItemClass(pathname === "/portfolio")}`}>
          <Link href="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li className="mb-5 cursor-not-allowed opacity-50">
          <span className="group relative inline-block cursor-not-allowed select-none">
            Services
            <NavSoon>Soon</NavSoon>
          </span>
        </li>
        <li className={`mb-5 ${navItemClass(pathname === "/contact")}`}>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
