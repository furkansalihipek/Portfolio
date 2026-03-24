"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col lg:h-[100dvh] lg:max-h-[100dvh] lg:overflow-hidden">
      <div className="container mx-auto flex min-h-0 flex-1 flex-col px-6 sm:px-12 md:px-16 xl:px-24 2xl:px-0">
        <Navbar />

        <main className="flex min-h-0 w-full flex-1 flex-col justify-center py-3 md:py-4">
          <section className="flex flex-wrap-reverse items-center justify-center gap-8 md:gap-12 lg:gap-20 xl:gap-28 2xl:gap-36">
            <div className="flex-1 p-4 md:p-6 lg:p-8">
              <p className="mb-2 font-kode-mono text-sm text-primary tracking-wide md:mb-3 md:text-base">
                Front-end · UI &amp; Web
              </p>
              <h2 className="text-xl tracking-tight md:text-3xl 2xl:text-5xl">
                Furkan İPEK
              </h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary md:mt-3 md:text-5xl 2xl:text-7xl">
                DEVELOPER
              </h1>
              <div className="mt-4 max-w-xl space-y-3 font-anta text-base leading-relaxed text-white/90 md:mt-5 md:text-lg 2xl:text-xl">
                <p>
                  Hi 👋 I build interfaces that feel considered — structure first,
                  then typography, motion, and the details people notice without
                  knowing why. Clean markup and readable components matter as
                  much as the pixels on screen.
                </p>
                <p className="text-[0.95em] leading-relaxed text-white/65 md:text-lg">
                  Computer Programming graduate, based in Turkey. The longer
                  story — background, how I work, what&apos;s next — lives on{" "}
                  <Link
                    href="/about"
                    className="text-primary underline-offset-4 hover:underline decoration-primary/60"
                  >
                    About
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-col items-center md:mt-7 md:flex-row">
                <a
                  href="mailto:furkan@ipek.dev?subject=Project%20inquiry"
                  className="group relative inline-flex h-20 w-[107px] items-center justify-center overflow-hidden px-6 py-3"
                >
                  <span className="absolute bottom-10 left-0 mb-9 ml-9 h-28 w-40 -translate-x-full translate-y-full bg-primary duration-500 ease-out group-hover:ml-32" />
                  <span className="relative duration-300">Hire Me</span>
                </a>
                <img
                  src="rightArrow.png"
                  alt=""
                  className="mt-4 hidden md:mt-0 md:ml-5 md:block"
                  aria-hidden
                />
              </div>
            </div>
            <div className="flex w-64 shrink-0 justify-center sm:w-72 md:w-72 lg:w-80 2xl:w-96">
              <img
                src="IMG_1227.jpg"
                alt="Furkan İpek"
                className="max-h-[28vh] w-auto rounded-2xl border border-primary object-cover object-center sm:max-h-[32vh] md:max-h-[36vh] lg:max-h-[42vh] lg:object-top xl:max-h-[48vh]"
              />
            </div>
          </section>
        </main>

        <footer className="mt-auto shrink-0 border-t border-white/10 pt-4 sm:pt-5 md:border-0 md:pt-3">
          <div className="flex flex-col justify-center gap-8 pb-4 sm:flex-row sm:gap-14 md:justify-start md:pb-5 md:text-lg lg:text-xl">
            <div className="text-center md:pl-11 md:text-left">
              <h2 className="font-bold mb-2 font-kode-mono text-sm text-primary tracking-widest">
                CONTACT
              </h2>
              <a
                href="mailto:furkan@ipek.dev"
                className="text-white/90 hover:text-primary transition-colors"
              >
                furkan@ipek.dev
              </a>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold mb-2 font-kode-mono text-sm text-primary tracking-widest">
                FOLLOW
              </h2>
              <a
                href="https://www.linkedin.com/in/furkansalihipek/"
                className="text-white/90 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
