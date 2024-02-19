export default function Home() {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <header className="font-kode-mono">
        <div className="flex mt-5 justify-between items-center h-10">
          <div className="pl-10 group">
            <a href="#" className=" text-primary group-hover:text-secondary">
              <span className="group-hover:hidden text-5xl font-kode-mono">&lt; &gt;</span>
              <span className="hidden group-hover:inline text-3xl font-kode-mono">&lt; Furkan İpek /&gt;</span>
            </a>
          </div>
          <ul className="flex gap-20 ml-auto">
            <li><a href="#">Home</a></li>
            <li className="opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                About
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100">Soon</span>
              </a>
            </li>
            <li className="opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Portfolio
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100">Soon</span>
              </a>
            </li>
            <li className="opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Services
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100">Soon</span>
              </a>
            </li>
            <li className="opacity-50 group hover:opacity-100">
              <a href="#" className="relative">
                Contact
                <span className="absolute -top-3 bg-primary py-1 px-2 rounded-full text-xs opacity-0 group-hover:opacity-100">Soon</span>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="mt-20">
          <main className=" flex justify-center items-center">
            <section>
              <div className="flex justify-center items-center gap-96">
                <div className="flex flex-col p-10 w-3/4 h-2/4">
                  <h2 className="text-3xl font-kode-mono">Furkan İPEK</h2>
                  <h1 className="font-bold mt-5 text-5xl text-primary font-kode-mono">DEVELOPER</h1>
                  <p className="mt-5 font-kode-mono">Selam 👋 <br></br>Ben Furkan İPEK. 20 yaşımdayım. Burdur Mehmet Akif Ersoy Üniversitesinde Bilgisayar Programcılığı bölümünde okuyorum. İzmir’in Konak ilçesinde doğdum. Çocukluğumu ve üniversite dönemine kadar olan eğitim hayatımı İzmirde geçirdim. </p>
                  <div className="mt-20">
                    <button className="w-28 h-20 bg-primary font-kode-mono">Hire Me</button>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <img src="IMG_1227.jpg" alt="Img" className="border rounded-2xl border-primary" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>

      <footer className="mt-auto font-kode-mono">
        <div className="flex gap-20 mb-5">
          <div className="pl-11">
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
  );
}
