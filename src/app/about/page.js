import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About | Furkan İpek",
  description:
    "Front-end developer from Turkey — background, focus on UI and accessible web, and how to get in touch.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-20 xl:px-32 2xl:px-0">
      <div className="flex flex-col pb-4 md:pb-6">
        <Navbar />

        <main className="mt-16 2xl:mt-24 w-full max-w-3xl px-10">
          <p className="text-primary font-kode-mono text-sm md:text-base mb-4">
            / about
          </p>
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-3 tracking-tight">
            About me
          </h1>
          <p className="text-white/55 font-anta text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            A few words on where I come from, what I care about in software, and
            how to reach me.
          </p>

          <div className="font-anta space-y-8 text-lg md:text-xl 2xl:text-2xl text-white/90 leading-relaxed">
            <section>
              <h2 className="font-kode-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                Now
              </h2>
              <p>
                I&apos;m Furkan İpek — a{" "}
                <span className="text-white">Computer Programming graduate</span>{" "}
                from Mehmet Akif Ersoy University in Burdur, Turkey. The part of
                the stack that pulls me in is the front: turning briefs and
                shapes in Figma into interfaces that load fast, behave
                predictably, and don&apos;t leave anyone behind on accessibility.
              </p>
            </section>

            <div className="h-px w-16 bg-primary/45" aria-hidden />

            <section>
              <h2 className="font-kode-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                Background
              </h2>
              <p>
                Born in Konak, İzmir — I grew up there through school before
                university. That mix of coast-city curiosity and later, more
                structured study made me stubborn about both{" "}
                <span className="text-white">fundamentals</span> (how things
                actually work) and{" "}
                <span className="text-white">shipping</span> (small releases that
                prove the learning, not just collect dust in a repo).
              </p>
            </section>

            <div className="h-px w-16 bg-primary/45" aria-hidden />

            <section>
              <h2 className="font-kode-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                This site
              </h2>
              <p>
                This portfolio will fill in over time with projects, write-ups,
                and experiments. If something here resonates — or you have an idea
                worth building together — say hello at{" "}
                <a
                  href="mailto:furkan@ipek.dev"
                  className="text-primary underline-offset-4 hover:underline decoration-primary/50"
                >
                  furkan@ipek.dev
                </a>{" "}
                or connect on{" "}
                <a
                  href="https://www.linkedin.com/in/furkansalihipek/"
                  className="text-primary underline-offset-4 hover:underline decoration-primary/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </section>
          </div>
        </main>

        <footer className="mt-10 md:mt-12 border-t border-white/10 pt-6 md:border-0 md:pt-4">
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 sm:gap-14 md:text-lg lg:text-xl">
            <div className="pl-0 md:pl-11 text-center md:text-left">
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
