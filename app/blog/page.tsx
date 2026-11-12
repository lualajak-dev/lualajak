import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import AnimatedBackground from "@/components/effects/animated-background";

export const metadata = {
  title: "Blog | Lual Ajak",
  description: "Technical writing, AI experiments and ideas from Lual Ajak.",
};

export default function BlogPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto min-h-screen max-w-4xl px-5 pb-24 pt-40 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-500">
          WRITING & IDEAS
        </p>
        <h1 className="mt-5 text-5xl font-bold md:text-7xl">
          Thinking out loud.
        </h1>
        <p className="mt-7 max-w-xl leading-8 text-(--muted)">
          A collection of technical notes, AI experiments,
          lessons learned and thoughts on building technology.
        </p>

        <div className="mt-16 rounded-2xl border border-(--border) p-8">
          <p className="font-mono text-xs text-blue-500">
            FIRST ARTICLES COMING SOON
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            Documenting the journey of building AI systems.
          </h2>
          <p className="mt-3 text-sm leading-7 text-(--muted)">
            This is where we&apos;ll publish articles on RAG,
            transformers, NLP, AI engineering and lessons
            from building FocalNote AI.
          </p>
        </div>

        <Link href="/" className="mt-10 inline-block text-blue-500">
          ← Back home
        </Link>
      </main>
    </>
  );
}