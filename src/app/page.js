"use client"
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Home() {
  const [open, setOpen] = useState(false);
  const mobileMenu = useRef();

  const openHandle = () => setOpen(!open);

  useEffect(() => {
    if (open) {
      mobileMenu.current.classList = "flex flex-col justify-center items-center";
    }
    else {
      mobileMenu.current.classList = "hidden";
    }
  }, [open])
  return (
    <div className="container mx-auto px-20 xl:px-32 2xl:px-0">
      <div className="flex flex-col max-h-screen">
        <nav>
          <div className="flex mt-5 justify-between items-center">
            <div className="font-kode-mono group pl-10 transition-all duration-200 ease-linear">
              <a href="#" className="text-primary">
                <div className="flex text-xl md:text-2xl">
                  <div>&lt;</div>
                  <div className="w-0 overflow-hidden opacity-0 transition-all duration-200 ease-linear group-hover:w-36 md:group-hover:w-40 h-8 group-hover:opacity-100">Furkan İpek</div>
                  <div>/&gt;</div>
                </div>
              </a>
            </div>
            <ul className="flex gap-20 ml-auto 2xl:text-3xl">
              <div className="gap-20 items-center justify-center hidden md:flex">
                <li><a href="#">Home</a></li>
                <li className="opacity-50 group hover:opacity-100">
                  <a href="#" className="relative">
                    About
                    <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
                  </a>
                </li>
                <li className="opacity-50 group hover:opacity-100">
                  <a href="#" className="relative">
                    Portfolio
                    <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
                  </a>
                </li>
                <li className="opacity-50 group hover:opacity-100">
                  <a href="#" className="relative">
                    Services
                    <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
                  </a>
                </li>
                <li className="opacity-50 group hover:opacity-100">
                  <a href="#" className="relative">
                    Contact
                    <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
                  </a>
                </li>
              </div>
              <button onClick={openHandle} className="block md:hidden">
                {open ? <IoIosCloseCircleOutline size={30} /> : <RxHamburgerMenu size={30} />}
              </button>
            </ul>
          </div>
          <ul className="hidden" ref={mobileMenu}>
            <li className="mb-5 mt-5"><a href="#">Home</a></li>
            <li className="mb-5 opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                About
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
              </a>
            </li>
            <li className=" mb-5 opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Portfolio
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
              </a>
            </li>
            <li className="mb-5 opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Services
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
              </a>
            </li>
            <li className="mb-5 opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Contact
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Soon</span>
              </a>
            </li>
          </ul>
        </nav>

        <main className="mt-16 2xl:mt-40 w-full">
          <section className="flex flex-wrap-reverse justify-center items-center md:gap-48">
            <div className="flex-1 p-10">
              <h2 className="text-xl md:text-3xl 2xl:text-5xl">Furkan İPEK</h2>
              <h1 className="font-bold mt-5 text-3xl md:text-5xl text-primary 2xl:text-7xl">DEVELOPER</h1>
              <p className="mt-5 font-anta 2xl:text-3xl">Selam 👋 <br></br>Ben Furkan İPEK. 20 yaşımdayım. Burdur Mehmet Akif Ersoy Üniversitesinde Bilgisayar Programcılığı bölümünde okuyorum. İzmir’in Konak ilçesinde doğdum. Çocukluğumu ve üniversite dönemine kadar olan eğitim hayatımı İzmirde geçirdim. </p>
              <div className="flex mt-10 flex-col md:flex-row items-center">
                <button href="#" className="w-[107px] h-20 relative px-6 py-3 overflow-hidden group">
                  <span className="h-28 w-40 bg-primary absolute bottom-10 -translate-x-full ease-out duration-500 translate-y-full mb-9 ml-9 group-hover:ml-32"></span>
                  <span className="relative duration-300">Hire Me</span>
                </button>
                <img src="rightArrow.png" alt="Img" className="mt-5 hidden md:block md:mt-0 md:ml-5" />
              </div>
            </div>
            <div className="flex justify-center items-center w-72 md:w-80 2xl:w-96">
              <img src="IMG_1227.jpg" alt="Img" className="border rounded-2xl border-primary" />
            </div>
          </section>
        </main>


        <footer className="h-24 2xl:mt-32">
          <div className="flex justify-center md:justify-start gap-20 mt-10 md:mt-32 2xl:text-3xl">
            <div className="pl-0 md:pl-11">
              <h2 className="font-bold mb-5">CONTACT</h2>
              <a href="mailto:furkan@ipek.dev">furkan@ipek.dev</a>
            </div>
            <div>
              <h2 className="font-bold mb-5">FOLLOW</h2>
              <a href="https://www.linkedin.com/in/furkansalihipek/">Linkedin</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
