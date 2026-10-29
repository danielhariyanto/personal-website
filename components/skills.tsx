"use client"

import {
  Bot,
  Code,
  Database,
  Cloud,
  Rocket,
  Terminal,
  PenToolIcon as Tools,
  Microscope,
  BookOpen,
} from "lucide-react"

const skillCategories = [
  {
    icon: Bot,
    title: "AI & Agentic Systems",
    skills: [
      "Agent Loop Engineering",
      "Context Engineering",
      "RAG",
      "Memory Architecture",
      "MCP Design",
      "Agent Runtime Design",
      "Evals",
    ],
  },
  {
    icon: Tools,
    title: "AI Development Tools",
    skills: [
      "Claude Code",
      "GitHub Copilot",
      "Microsoft Agent Framework",
      "Azure AI Foundry",
      "OpenAI & Anthropic APIs",
      "Vercel v0",
    ],
  },
  {
    icon: Terminal,
    title: "Programming Languages",
    skills: ["Python (expert)", "Java (expert)", "JavaScript (expert)", "R (expert)", "C++ (intermediate)"],
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    skills: [
      "Frontend: React.js, Vue.js, React Native, jQuery",
      "Backend: Flask, Django, Node.js, Spring, Dropwizard",
      "Frameworks: Next.js, Nuxt.js, Express.js",
      "Stacks: MERN, MEVN, FReMP, LAMP",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "SQL: MySQL, PostgreSQL, SQLite, SQLAlchemy",
      "NoSQL: MongoDB, Cloud Firestore",
      "Cloud Storage: Google Cloud Storage, Amazon S3, Azure Blob Storage",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: [
      "Build: Maven, Gradle, Grunt, Poetry",
      "CI/CD: Docker, Kubernetes, Jenkins",
      "Cloud: Heroku, Vercel, Google Firebase, Google Cloud Platform, AWS, Azure",
      "Server: Apache",
    ],
  },
  {
    icon: Microscope,
    title: "Machine Learning",
    skills: [
      "Data: NumPy, Pandas, Matplotlib, Plotly",
      "ML: SciPy, Scikit-learn, PyTorch, TensorFlow, Keras, CUDA",
      "NLP: Gensim, NLTK",
    ],
  },
  {
    icon: Rocket,
    title: "Product",
    skills: [
      "Zero-to-One Product Development",
      "AI Product Strategy",
      "OKR Roadmapping",
      "Cross-Functional Leadership",
      "Figma & AI Prototyping",
      "Agile/Scrum",
    ],
  },
  {
    icon: BookOpen,
    title: "Relevant Courses",
    skills: [
      "Computer Science: Object-Oriented Programming, Functional Programming, Data Structures & Algorithms, Operating Systems, Theory of Computation",
      "Machine Learning: Fundamentals of AI, Statistical ML, Deep Learning, Practical ML with Big Data, Numerical Methods & Big Data",
      "Mathematics: Discrete Math, Linear Algebra, Multivariable Calculus, Differential Equations, Probability, Statistics, Mathematical Modeling, Fourier Analysis",
      "Business: Business Fundamentals, Business Analytics, Accounting",
    ],
    isWide: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">SKILLS</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-stone-100 border-2 border-stone-200 p-6 hover:border-stone-300 hover:-translate-y-1 transition-all duration-200 group animate-slide-up ${
                category.isWide ? "col-span-full" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-stone-900 group-hover:bg-stone-800 transition-colors">
                  <category.icon className="w-5 h-5 text-stone-50" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold">{category.title}</h3>
              </div>

              <div className={`space-y-2 ${category.isWide ? "columns-1 md:columns-2" : ""}`}>
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-stone-600 flex items-start gap-2 font-light hover:text-stone-900 transition-colors break-inside-avoid"
                  >
                    <div className="w-1 h-1 bg-stone-400 mt-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
