import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio | Furkan İpek",
  description:
    "Selected front-end and web projects — stacks, context, and links when available.",
};

function ProjectCard({ project }) {
  const { title, description, tags, year, demoUrl, repoUrl, appStoreSoon } =
    project;
  const hasWebOrRepoLinks = Boolean(demoUrl || repoUrl);

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col h-full transition-colors hover:border-primary/35">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <h2 className="font-anta text-xl md:text-2xl text-white font-medium pr-4">
          {title}
        </h2>
        <span className="font-kode-mono text-primary text-xs tracking-widest shrink-0">
          {year}
        </span>
      </div>
      <p className="font-anta text-white/75 text-base md:text-lg leading-relaxed grow">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2 mt-5" aria-label="Tech stack">
        {tags.map((tag) => (
          <li
            key={`${title}-${tag}`}
            className="font-kode-mono text-[0.65rem] md:text-xs uppercase tracking-wider text-primary/90 px-2.5 py-1 rounded-md border border-primary/25 bg-primary/5"
          >
            {tag}
          </li>
        ))}
      </ul>
      {hasWebOrRepoLinks ? (
        <div className="flex flex-wrap gap-4 mt-6 pt-5 border-t border-white/10">
          {demoUrl ? (
            <a
              href={demoUrl}
              className="font-kode-mono text-sm text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          ) : null}
          {repoUrl ? (
            <a
              href={repoUrl}
              className="font-kode-mono text-sm text-white/70 hover:text-primary transition-colors underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          ) : null}
        </div>
      ) : appStoreSoon ? (
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="font-kode-mono text-sm text-primary/95 leading-relaxed">
            Coming soon on the App Store
          </p>
          <p className="font-anta text-sm text-white/50 mt-2 leading-relaxed">
            Not live in the store yet — listing will be updated when the app is
            published.
          </p>
        </div>
      ) : (
        <p className="font-kode-mono text-xs text-white/40 mt-6 pt-5 border-t border-white/10">
          Demo &amp; repo links coming soon — ask via{" "}
          <Link
            href="/contact"
            className="text-primary/80 hover:text-primary underline-offset-2 hover:underline"
          >
            Contact
          </Link>
          .
        </p>
      )}
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-20 xl:px-32 2xl:px-0">
      <div className="flex flex-col pb-4 md:pb-6">
        <Navbar />

        <main className="mt-16 2xl:mt-24 w-full max-w-5xl px-10">
          <p className="text-primary font-kode-mono text-sm md:text-base mb-4">
            / portfolio
          </p>
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-3 tracking-tight">
            Selected work
          </h1>
          <p className="text-white/55 font-anta text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Client-facing websites, an iOS build in the pipeline, and personal
            tools. Follow the links for live sites; mobile releases are called out
            when they&apos;re still pre–App Store.
          </p>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={`${project.title}-${project.year}`}
                project={project}
              />
            ))}
          </div>
        </main>

        <footer className="mt-10 md:mt-12 border-t border-white/10 pt-6 md:border-0 md:pt-4">
          <div className="flex max-w-5xl flex-col px-10 sm:flex-row sm:justify-center md:justify-start gap-8 sm:gap-14 md:text-lg lg:text-xl">
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
