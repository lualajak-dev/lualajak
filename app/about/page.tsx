import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import AnimatedBackground from "@/components/effects/animated-background";

export const metadata = {
  title: "About | Lual Ajak",
  description: "Learn about Lual Ajak, his background, interests and work in AI engineering.",
};

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto min-h-screen max-w-4xl px-5 pb-24 pt-40 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-500">
          ABOUT ME
        </p>
        <h1 className="mt-5 text-5xl font-bold md:text-7xl">
          The person behind the projects.
        </h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-(--muted)">
          <p>
            I&apos;m Lual Ajak, an AI Engineer and builder based in
            Juba, South Sudan.
          </p>
          <p>
            My interests include artificial intelligence,
            machine learning, natural language processing and
            developing intelligent applications.
          </p>
          <p>
            I enjoy exploring ideas, experimenting with
            emerging technologies and building products that
            address real-world challenges.
          </p>
          <p>
            I&apos;m particularly interested in the potential of AI
            to create meaningful opportunities across Africa.
          </p>
        </div>
        <Link href="/" className="mt-10 inline-block text-blue-500">
          ← Back home
        </Link>
      </main>
    </>
  );
}