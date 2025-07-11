"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Novozymes Enzyme Stability Prediction",
    subtitle: "Kaggle Competition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/kaggle-HtVhROwqZjpkTMXhXRFUhwfFu5Cnqi.jpeg",
    link: "https://www.kaggle.com/competitions/novozymes-enzyme-stability-prediction",
    tech: "BLOSUM, pLDDT, DeepDDG, DeMask, RMSD, SASA, Rosetta, ThermoNet, PyTorch",
    achievements: [
      "Achieved top 7% placement (Leaderboard Team Name: The Brogrammers); predicted thermostability of enzyme variants based on protein sequence",
      "Designed an ensemble model with BLOSUM, pLDDT, DeepDDG, DeMask, RMSD, SASA, Rosetta, and ThermoNet models that achieved a Spearman's correlation coefficient of 0.606 compared to ground truth",
    ],
  },
  {
    title: "Shopee Product Matching based on Image and Text Description",
    subtitle: "Kaggle Competition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/kaggle-HtVhROwqZjpkTMXhXRFUhwfFu5Cnqi.jpeg",
    link: "https://www.kaggle.com/c/shopee-product-matching",
    tech: "EfficientNets (ensemble) for image embeddings, TF-IDF vectorizer for text embeddings, k-nearest neighbors, PyTorch",
    achievements: [
      "Achieved top 8% placement (Leaderboard Team Name: Shopee Masters); determined if two products are the same based on image and text descriptions from Shopee's e-commerce dataset",
      "Designed an ensemble model of EfficientNets B2-B6 with ArcFace loss for image embeddings, TF-IDF vectorizer for text embeddings, and similarity score function from the embeddings using k-nearest neighbors; achieved F1-score of 0.734",
    ],
  },
  {
    title: "HeatPumpBuddy",
    subtitle: "Resource Hub for Prospective Heat Pump Owners",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/heatsmartalliance-dDwoIuV2RpXChqZKK8Q6IbK9EhSaL4.jpeg",
    link: "https://devpost.com/software/heatpumpbuddy",
    tech: "React.js + Next.js + Redux (frontend), Flask (backend), nearest neighbor algorithm + scikit-learn (ML)",
    achievements: [
      "Built interactive web application for local volunteer group HeatSmart Alliance to incentivize homeowners to replace current high carbon-emitting systems with energy-efficient heat pumps; currently used by HeatSmart Alliance to reach >14,000 homeowners across Massachusetts",
      "Designed a heat pump calculator to help homeowners calculate annual heat pump costs, and a networking functionality that connects homeowners to heat pump coaches based on house, location, and lifestyle similarity, driven by a nearest neighbor algorithm",
      "Won 1st place and the Highest Organizational Impact prize at Deis Hacks 2021, a social good hackathon for local organizations",
    ],
  },
  {
    title: "iPresent",
    subtitle: "AI-powered Public Speaking Evaluator",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/ipresent-EdzLKk3vVb29yudRx0C0qgcm6MUTBl.jpeg",
    link: "https://devpost.com/software/ipresent-ny3a6u",
    tech: "Vanilla JS (frontend), Flask (backend), Google Cloud Storage (database), Google Cloud speech & language APIs + CNN + TensorFlow (ML)",
    achievements: [
      "Created web application that provides both a real-time presentation simulator and evaluator to improve users' public speaking skills",
      "Engineered a set of algorithms based on multi-label classification, CNN, and GC speech & language APIs that utilizes transcript and audio as training modalities to compute useful presentation metrics such as rating classification, brevity, cadence, diction, etc.",
    ],
  },
  {
    title: "MediLoc",
    subtitle: "Optimal Location Finder for Nutrition Centers in Rural Indonesia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/mediloc-HHrjQ0zhMO4cCxCYKD0e1eLsg4in9H.jpeg",
    link: "#",
    tech: "React.js (frontend), Flask (backend), SQLAlchemy (database), k-means clustering + scikit-learn (ML)",
    achievements: [
      "Built web application that identifies optimal locations for nutrition centers to aid the Indonesian government combat stunted growth in rural villages in Indonesia",
      "Developed backend in Flask and optimal location algorithm based on k-means clustering and population density",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">PROJECTS</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-stone-100 border-2 border-stone-200 overflow-hidden hover:border-stone-300 hover:-translate-y-2 transition-all duration-200 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-stone-200 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/5 transition-colors" />{" "}
                {/* Corrected self-closing div */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-mono">{project.title}</h3>
                    <p className="text-stone-600 text-sm font-light">{project.subtitle}</p>
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-900 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      <div className="w-1 h-1 bg-stone-900 mt-2 flex-shrink-0" />
                      <span className="font-light">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">Technologies</p>
                  <p className="text-sm text-stone-600 font-light italic">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
