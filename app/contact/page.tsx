import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import AnimatedBackground from "@/components/effects/animated-background";

export const metadata = {
  title: "Contact | Lual Ajak",
  description: "Get in touch with Lual Ajak for collaborations and opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto min-h-screen max-w-4xl px-5 pb-24 pt-40 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-500">
          CONTACT
        </p>
        <h1 className="mt-5 text-5xl font-bold md:text-7xl">
          Let&apos;s build something meaningful.
        </h1>
        <p className="mt-8 max-w-xl leading-8 text-(--muted)">
          Whether you have an interesting AI project,
          collaboration opportunity or simply want to
          exchange ideas, I&apos;d be glad to connect.
        </p>

        <div className="mt-12 rounded-2xl border border-(--border) p-8">
          <h2 className="text-xl font-semibold">
            Start a conversation.
          </h2>
          <p className="mt-3 text-sm leading-7 text-(--muted)">
            Contact details and social links will be added
            here so visitors can reach me directly.
          </p>
        </div>

        <Link href="/" className="mt-10 inline-block text-blue-500">
          ← Back home
        </Link>
      </main>
    </>
  );
}