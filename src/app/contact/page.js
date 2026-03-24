import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact | Furkan İpek",
  description:
    "Get in touch with Furkan İpek — email, LinkedIn, and what to expect when you reach out.",
};

function ContactCard({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
      <h2 className="mb-2 font-kode-mono text-xs uppercase tracking-[0.2em] text-primary sm:mb-3 md:text-sm">
        {label}
      </h2>
      <div className="font-anta text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto w-full max-w-[100vw] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-0">
      <div className="flex flex-col pb-4 md:pb-6">
        <Navbar />

        <main className="mt-8 w-full max-w-3xl sm:mt-12 md:mt-16 lg:mt-20 2xl:mt-24">
          <p className="text-primary font-kode-mono text-sm md:text-base mb-4">
            / contact
          </p>
          <h1 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl 2xl:text-6xl">
            Let&apos;s talk
          </h1>
          <p className="mb-8 max-w-2xl font-anta text-base leading-relaxed text-white/55 sm:mb-10 sm:text-lg md:text-xl">
            Whether you have a project in mind, a role to discuss, or just want
            to connect — the best way to reach me is below. I read everything and
            reply when I can.
          </p>

          <div className="space-y-5 md:space-y-6">
            <ContactCard label="Email">
              <p className="mb-3 text-white/70 text-base md:text-lg">
                For inquiries, collaborations, or a quick hello:
              </p>
              <a
                href="mailto:furkan@ipek.dev?subject=Hello%20from%20your%20portfolio"
                className="inline-flex break-words text-lg font-medium text-primary underline-offset-4 decoration-primary/50 hover:underline sm:text-xl md:text-2xl"
              >
                furkan@ipek.dev
              </a>
            </ContactCard>

            <ContactCard label="LinkedIn">
              <p className="mb-3 text-white/70 text-base md:text-lg">
                Updates, experience, and the occasional longer thread:
              </p>
              <a
                href="https://www.linkedin.com/in/furkansalihipek/"
                className="inline-block break-all text-lg text-primary underline-offset-4 decoration-primary/50 hover:underline sm:text-xl md:text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/furkansalihipek
              </a>
            </ContactCard>

            <ContactCard label="What to expect">
              <p className="text-white/80">
                I&apos;m in Turkey (GMT+3). If your note needs a thoughtful
                answer, give me a day or two — weekends can run slower. Short
                context and what you&apos;re hoping for up front helps a lot.
              </p>
            </ContactCard>
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
