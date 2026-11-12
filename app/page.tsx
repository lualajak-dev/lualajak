import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Code2,
  BrainCircuit,
  Terminal,
  Sparkles,
  Layers3,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Navbar from "@/components/layout/navbar";
import AnimatedBackground from "@/components/effects/animated-background";
import CurrentYear from "@/components/current-year";

const projects = [
  {
    number: "01",
    name: "FocalNote AI",
    category: "AI PRODUCT · FOUNDER",
    description:
      "An AI-powered study assistant that transforms learning materials into an interactive learning experience through RAG-based tutoring, quizzes, summaries and flashcards.",
    stack: ["Python", "FastAPI", "RAG", "LLMs"],
    featured: true,
    href: "/projects/focalnote-ai",
    external: false,
    icon: BrainCircuit,
    label: "FLAGSHIP PROJECT",
  },
  {
    number: "02",
    name: "RAG Document Chatbot",
    category: "AI ENGINEERING",
    description:
      "A document intelligence system that enables users to interact with their documents and retrieve context-aware answers using retrieval-augmented generation.",
    stack: ["Python", "Embeddings", "Vector Search"],
    href: "https://github.com/Lual13012/rag-document-ChatBot-APP",
    external: true,
    icon: Layers3,
    label: "DOCUMENT INTELLIGENCE",
  },
  {
    number: "03",
    name: "Text Summarizer AI",
    category: "NATURAL LANGUAGE PROCESSING",
    description:
      "An NLP application that uses transformer-based language models to generate concise summaries from longer documents.",
    stack: ["Python", "Transformers", "BART"],
    href: "https://github.com/Lual13012/text-summarizer-ai",
    external: true,
    icon: Sparkles,
    label: "NLP APPLICATION",
  },
];

const interests = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Building intelligent applications and AI-powered systems.",
  },
  {
    icon: Code2,
    title: "Machine Learning & NLP",
    text: "Exploring transformers, language models and applied machine learning.",
  },
  {
    icon: Terminal,
    title: "Software Engineering",
    text: "Turning ideas into reliable, practical software products.",
  },
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* HERO */}
        <section
          id="home"
          className="flex min-h-[90vh] flex-col justify-center pt-28"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-(--muted)">
              AI Engineer · Founder · Builder
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl lg:text-8xl">
            Building intelligent systems.
            <span className="block bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Exploring what&apos;s possible.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-(--muted) md:text-lg">
            I&apos;m Lual Ajak, an AI Engineer interested in machine
            learning, natural language processing and building
            technology that solves meaningful problems. I enjoy
            turning ideas into practical intelligent systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-(--border) px-7 py-3.5 text-sm font-medium transition duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              More about me
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-16 flex items-center gap-5 text-(--muted)">
            <Link
              href="https://github.com/Lual13012"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-500"
            >
              <FaGithub size={19} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/lual-ajak/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-500"
            >
              <FaLinkedinIn size={19} />
            </Link>

            <span className="h-5 w-px bg-(--border)" />

            <span className="font-mono text-xs tracking-wider">
              JUBA, SOUTH SUDAN
            </span>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="border-y border-(--border) py-12">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-(--muted)">
            Areas I work in
          </p>

          <div className="grid gap-10 sm:grid-cols-3">
            {interests.map((item) => (
              <div key={item.title} className="group">
                <item.icon
                  size={24}
                  className="mb-5 text-blue-500 transition duration-300 group-hover:-translate-y-1"
                />

                <h2 className="mb-3 text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="text-sm leading-7 text-(--muted)">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
                Selected work / 01
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Things I&apos;ve built
                <span className="text-blue-500">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-(--muted)">
              A selection of projects exploring the intersection
              of AI, engineering and real-world applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.number}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface)/80 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 md:p-8 ${
                  project.featured ? "md:col-span-2 md:p-10" : ""
                }`}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-(--muted)">
                      / {project.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-(--muted) transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-500"
                    />
                  </div>

                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-(--border) bg-(--background)">
                      <project.icon
                        size={27}
                        className="text-blue-500"
                      />
                    </div>

                    {project.featured && (
                      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 font-mono text-[9px] tracking-wider text-blue-500">
                        {project.label}
                      </span>
                    )}
                  </div>

                  <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-blue-500">
                    {project.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold transition group-hover:text-blue-500 md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="max-w-2xl text-sm leading-7 text-(--muted)">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-(--border) px-3 py-1.5 font-mono text-[10px] text-(--muted)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex items-center gap-2 text-xs font-semibold text-blue-500">
                    {project.external ? "View repository" : "View project"}
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="grid scroll-mt-24 gap-10 border-t border-(--border) py-24 md:grid-cols-2 md:items-center"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
              A little about me
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Curious about technology.
              <span className="text-(--muted)">
                {" "}Driven by possibility.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-(--muted)">
              My journey revolves around understanding how technology
              works and using that knowledge to build useful solutions.
              From machine learning and NLP to full-stack AI applications,
              I&apos;m interested in the entire process of turning an idea
              into a working product.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-cyan-500"
            >
              Read my story
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        {/* WRITING */}
        <section
          id="writing"
          className="scroll-mt-24 border-t border-(--border) py-24"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
            Notes & thinking / 02
          </p>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold md:text-5xl">
              Ideas worth sharing
              <span className="text-blue-500">.</span>
            </h2>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-blue-500 transition hover:text-cyan-500"
            >
              Visit the blog
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-(--muted)">
            A space for documenting what I&apos;m learning, sharing
            technical experiments, exploring AI and reflecting
            on building technology.
          </p>

          <div className="mt-10 rounded-2xl border border-dashed border-(--border) p-8">
            <p className="font-mono text-xs text-(--muted)">
              WRITING / COMING SOON
            </p>

            <p className="mt-3 text-lg font-medium">
              The best way to learn is to build, document and share.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-(--border) py-28 text-center"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
            What&apos;s next?
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
            Have an interesting idea?
            <span className="text-blue-500"> Let&apos;s connect.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-(--muted)">
            I&apos;m interested in meaningful collaborations, AI
            opportunities and conversations about technology.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            Get in touch
            <Mail size={17} />
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-(--border)">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 py-8 text-xs text-(--muted) sm:flex-row md:px-8">
          <p>
            © <CurrentYear /> Lual Ajak. Built with curiosity.
          </p>

          <p className="font-mono tracking-wider">
            AI ENGINEER · FOUNDER · BUILDER
          </p>
        </div>
      </footer>
    </>
  );
}