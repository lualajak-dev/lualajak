
export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  href: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "FocalNote AI",
    description:
      "An AI-powered study assistant that helps students learn through intelligent tutoring, document-based question answering, summaries, quizzes, flashcards and progress tracking.",
    category: "AI Education Platform",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "LLMs",
      "React Native",
    ],
    href: "/projects/focalnote-ai",
    featured: true,
  },
  {
    title: "RAG Document Chatbot",
    description:
      "A retrieval-augmented generation application that allows users to interact with documents and retrieve relevant information through natural language questions.",
    category: "Generative AI",
    technologies: [
      "Python",
      "LangChain",
      "Vector Search",
      "NLP",
    ],
    href: "/projects/rag-document-chatbot",
    featured: true,
  },
  {
    title: "Text Summarizer AI",
    description:
      "An NLP application that uses transformer-based models to generate concise summaries from lengthy documents and articles.",
    category: "Natural Language Processing",
    technologies: [
      "Python",
      "Transformers",
      "BART",
      "Hugging Face",
    ],
    href: "/projects/text-summarizer-ai",
    featured: true,
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Transformers",
      "Retrieval-Augmented Generation",
      "Large Language Models",
    ],
  },
  {
    category: "Backend Development",
    items: ["FastAPI", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Hugging Face",
      "PyTorch",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/lualajak-dev",
  linkedin: "https://www.linkedin.com/in/lual-ajak/",
};
