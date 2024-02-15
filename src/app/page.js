export default function Home() {
  return (
    <><header>
      <nav className="flex justify-end mt-5">
        <ul className="flex gap-20 mr-20">
          <li className="text-primary"><a href="#">Home</a></li>
          <li className="text-primary" s><a href="#">About</a></li>
          <li className="text-primary" s><a href="#">Portfolio</a></li>
          <li className="text-primary" s><a href="#">Reviews</a></li>
          <li className="text-primary" s><a href="#">Services</a></li>
          <li className="text-primary" s><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header><main className="h-screen">
        <section>
          <div className="flex justify-center items-center h-screen gap-96 pl-5 pr-5">
            <div className="flex flex-col p-10 w-3/4 h-2/4">
              <h2 className=" text-3xl">Furkan İPEK</h2>
              <h1 className="font-bold mt-5 text-5xl text-primary">DEVELOPER</h1>
              <p className="mt-5">Selam 👋 <br></br>Ben Furkan İPEK 20 yaşımdayım Burdur Mehmet Akif Ersoy Üniversitesinde Bilgisayar Programcılığı bölümünde okuyorum. İzmir’in Konak ilçesinde doğdum. Çocukluğumu ve üniversite dönemine kadar olan eğitim hayatımı İzmirde geçirdim. </p>
            </div>
            <div className="flex justify-center items-center w-1/4 h-2/4">
              <img src="my-image.jpg" alt="Img" className="pr-20"/>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="flex gap-20 mb-5">
          <div className="pl-16">
            <h2 className="font-bold mb-5">CONTACT</h2>
            <a href="mailto:furkan@ipek.dev">furkan@ipek.dev</a>
          </div>
          <div>
            <h2 className="font-bold mb-5">FOLLOW</h2>
            <a href="https://www.linkedin.com/in/furkansalihipek/">Linkedin</a>
          </div>
        </div>
      </footer></>

  );
}
