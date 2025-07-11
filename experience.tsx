"use client"

import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    company: "Microsoft",
    role: "Product Manager",
    location: "Redmond, WA",
    period: "OCT 2023 - PRESENT",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/microsoft-AU8eHBVXQZWfde78TO1ftJ4wdlCsrP.jpeg",
    website: "https://microsoft.com/",
    description:
      "Microsoft's flagship content distribution platform that ships >132EB of Microsoft products annually to every device on the planet.",
    customer:
      "1) device users & IT admins + 2) Microsoft's content publishers owning products like Windows, Microsoft Store, M365, Xbox, Azure, Edge.",
    highlights: [
      "Cut publisher onboarding lead-time by 97% (2 months → 2 days). Redesigned onboarding as a self-serve wizard with built-in integration, abstracting complex distribution setup into intuitive UI flows that save ~500 engineer-hours per onboarding.",
      "Enabled 7x publisher capacity in year 1 alone (3 → 20 publishers). Drove the org-wide shift from reactive support to a product-led platform by launching an AI-powered publisher-facing portal that centralized end-to-end publisher workflows—unlocking platform scale to virtually unlimited publishers.",
      "Onboarded Microsoft's crown-jewel products—Teams, Defender, SQL Server, Visual Studio, and Exchange. Expanded platform capabilities to support high-throughput, mission-critical workloads—unlocking billions in ARR and cementing the platform as the backbone of Microsoft's software delivery.",
      "Protected 1.5B devices by isolating security breaches to the affected publisher, averting >$150B in potential losses. Designed and rolled out infra-wide security guardrails adopted by 20 partner teams, ensuring a compromised publisher cannot impact others—a 15,000x threat exposure reduction.",
      "Drove 10× PM efficiency through AI-powered workflows. Built and deployed agentic tools for specs, prototypes, and cross-team communication—reducing cycle time and manual effort—and showcased in two main-stage sessions at a Microsoft PM summit with >600 PM leaders.",
    ],
  },
  {
    company: "Augment Industries",
    role: "Co-Founder, Head of Product & Applied AI",
    location: "Jakarta, Indonesia",
    period: "JUL 2023 - MAY 2025",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/augment-px21Qs4dAi2infK9X7CZA7W9j1q8qc.jpeg",
    website: "http://augmentindustries.com/",
    description:
      "AI-powered drone surveillance platform that enables faster and more informed command-and-control decision-making during riots.",
    customer: "Indonesia's SWAT and police forces.",
    highlights: [
      "Enabled 90× faster detection of riot formations (30 min → 20 sec). Delivered real-time aerial analytics—high-altitude reconnaissance, crowd density mapping, vehicle tracking, facial recognition, live annotation tooling, and automated alerts—to support rapid tactical coordination.",
      "Achieved full pilot adoption in <2 months. Embedded in 3 field missions and led >10 iterations with commanders to translate workflows into features.",
      "Generated inbound interest from 3 additional government agencies. Validated strong product-market fit and operational enthusiasm beyond pilot.",
      "Sunsetted the venture as a team due to growing ethical concerns around government contracting.",
    ],
  },
  {
    company: "Mobile Memory",
    role: "Co-Founder, Head of Product & Engineering",
    location: "Boston, MA",
    period: "SEP 2020 - AUG 2024",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/mobilememory-24eJuLmDQN773ScCGqMu5XsmkUFiIF.jpeg",
    website: "https://mobilememory.app/",
    description: "AI model that screens for early-onset Alzheimer's by analyzing vocal biomarkers in natural speech.",
    customer:
      "pharmaceutical and experimental drug trial companies (pivoted from insurance and primary care providers).",
    highlights: [
      "Achieved 87% detection accuracy for early-onset Alzheimer's using voice alone. Built cloud pipeline and trained ML models on real patient speech from DementiaBank to screen for cognitive decline.",
      "Secured 6-figure non-dilutive funding and 8 top awards. Awards include 1st at Babson $100K Pitch Competition, 1st at Brandeis SPARKTank, 2nd at AI@MIT, Harvard Capital Partners Fund Winner, Harvard iLab Spark Grant, Dove InstaGrants Winner (1 of 3), Rothberg Catalyzer, and Harvard CBE Venture.",
      "Undergoing clinical validation in the Swedish BioFINDER study, one of the advanced programs on early Alzheimer's detection. Positioned product for FDA De Novo pathway with top-tier neuroscience partnerships like Carney Institute for Brain Sciences and Butler Hospital.",
      "Stepped away due to elongated clinical timelines and slow go-to-market momentum, but still rooting for the team and firmly believing in the tech's impact.",
    ],
  },
  {
    company: "Hong Research Group",
    role: "Undergraduate Researcher",
    location: "Waltham, MA",
    period: "AUG 2022 - MAY 2023",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/brandeis-EEEbotg88EKImBfhUht556FODCsK1X.jpeg",
    website: "https://www.cs.brandeis.edu/~hong/",
    description:
      "a machine learning research group within the Department of Computer Science at Brandeis University with a focus on ML applications",
    highlights: [
      "Spearheaded independent machine learning research with Dr. Pengyu Hong, investigating novel dataset pruning strategies that enabled accelerated training convergence while maintaining remarkable accuracy; novelty: uniquely targeted samples with similar difficulty levels for removal",
      "Successfully achieved a notable >30% reduction in training time with a mere 0.3% accuracy compromise, validated through rigorous trials with ResNet-18 on 1.3M ImageNet samples",
      "Impact: more time-efficient training processes, reduction in computational resource requirements, and enhanced accessibility to previously large datasets",
    ],
  },
  {
    company: "Bessemer Venture Partners",
    role: "Bessemer Fellow & Software Engineer",
    location: "San Francisco, CA",
    period: "FEB 2022 - AUG 2022",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/bessemer-iyNeLrJC0jdmdvU5kCHNeROKzuAJf3.jpeg",
    website: "https://www.bvp.com/",
    highlights: [
      "1 of 20 Fellows selected out of >2,000 applicants across the US to be part of the Bessemer VC network",
      "Interned as a software engineer at Bevi, a Bessemer portfolio company, building Alexa smart speaker functionality for Bevi's IoT flagship product",
      "Built a proof-of-concept interface based in Java Dropwizard that enables a custom Alexa skill to connect to Bevi's IoT product and recreate all functionality via voice commands; created detailed Confluence documentation on the interface's endpoints and on Alexa skill creation and distribution",
    ],
    learnMore: "https://www.bvp.com/news/bessemers-2022-fellowship-class",
  },
  {
    company: "Microsoft",
    role: "Product Manager Intern",
    location: "Redmond, WA",
    period: "MAY 2022 - AUG 2022",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/microsoft-AU8eHBVXQZWfde78TO1ftJ4wdlCsrP.jpeg",
    website: "https://microsoft.com/",
    highlights: [
      "Investigated new business areas to expand Microsoft's content delivery optimization technology, which is responsible for reliably and performantly distributing 10+ exabytes of Microsoft content per month to 1.5B+ Windows devices globally",
      "Designed a go-to-market plan that evaluates business opportunities and risks with 3rd party content support for Microsoft's peer-to-peer and caching services, addressing highly expressed customer pain points (88% customer approval via surveys) and providing value-add to Microsoft's Intune and Azure CDN services simultaneously",
      "Conducted usage and revenue modeling based on large internal datasets across 3 teams to evaluate growth opportunities in the next 5 years",
      "Created feature spec and UX wireframes using Figma, coordinated feature implementation with the development team, and presented project to CVP",
    ],
  },
  {
    company: "PayPal",
    role: "Software Engineer Intern",
    location: "San Jose, CA",
    period: "MAY 2021 - AUG 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/paypal-9d7A9cfxt6HMQ2urxSpj5tz6bsHB2i.jpeg",
    website: "https://www.paypal.com/us/business/financial-services/debit-card",
    highlights: [
      "Implemented features in web application of PayPal's Business Debit Mastercard, the #1 largest US Mastercard small business debit portfolio; built multiple secondary cards functionality and recurrent payments dashboard with React.js & Node.js (Kraken framework) used by >1.8 million cardholders",
      "Designed and led isolated component testing in Java Spring application of PayPal's Shipping & Tracking, which reduced dependency on shared staging environments and enabled developers to have complete control over their test suite; increased development productivity by >400%",
      "Developed NLP clustering model for PayPal's Innovation Lab that classifies ideas based on their content; after receiving positive feedback from leadership, implemented model in their Idea Portal now used to classify >4,000 yearly instances of employee ideas to inform better decision-making for key stakeholders",
    ],
  },
  {
    company: "Brandeis Online Learning Lab",
    role: "Software Engineer",
    location: "Waltham, MA",
    period: "MAY 2021 - MAY 2023",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/brandeis-EEEbotg88EKImBfhUht556FODCsK1X.jpeg",
    website: "https://www.brandeis.edu/global/faculty/research/online-learning-lab.html",
    description:
      "a cutting-edge classroom analytics tool to measure student engagement in online classrooms, spearheaded by Professors Pito Salas and Ben Gomes-Casseres",
    highlights: [
      "Developed an end-to-end data pipeline that transforms Zoom class recording data into useful data abstractions and visualizations; this is a university-funded research project exploring how pedagogy affects student engagement in online courses and, in particular, how it can enhance equity in the classroom",
      "Built PostgreSQL database within on-prem Apache server from scratch that models complex interactions among courses, instructors, Zoom meetings, participants, and transcripts",
      "Designed efficient algorithms capable of matching >80,000 Zoom meetings to classes and >60,000 encrypted Zoom participants to registered students",
      "Leveraged advanced SQL join queries and analytical algorithms to transmute raw Zoom data into insightful statistics on student engagement",
    ],
    learnMore: "https://www.brandeis.edu/global/faculty/research/online-learning-lab.html",
  },
  {
    company: "TAMID Group",
    location: "Waltham, MA",
    period: "AUG 2020 - MAY 2023",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0%20personal%20website/images/tamid-qiohwfRSiMPp6uvEALe4NOa40ujsfu.jpeg",
    website: "https://tamidgroup.org/",
    description: "a student-run organization that facilitates hands-on experiential learning with Israeli companies",
    roleProgression: [
      {
        title: "President",
        period: "AUG 2022 - MAY 2023",
        highlights: [
          "Doubled membership from 40 to 80+ students and led 12 consulting, tech, and investing projects; secured $18K+ sponsorships and hosted exclusive career events with Deloitte and other top firms",
          "Established TAMID as Brandeis' most successful pipeline to top firms like Microsoft, Google, Meta, Amazon, LinkedIn, McKinsey, Deloitte, JPMorgan, etc.",
        ],
      },
      {
        title: "Director of Tech Consulting",
        period: "AUG 2020 - JUL 2022",
        highlights: [
          "Led 11 student engineers to complete tech consulting projects for four Israeli tech startups: Mappo, SOLO, TapTapes, & Vibo",
          "Spearheaded client-project matching, project scoping, client expectation negotiations, user story creation, AGILE practices, and team communications",
          "Ensured quality of >300 total commits through conducting code reviews that have been pushed to production; coordinated weekly presentations to client",
          "Consistently achieved perfect 5-star evaluations from previous clients, by often outperforming clients' expectations and by delivering high quality of work",
        ],
      },
    ],
  },
  {
    company: "Mappo",
    role: "Software Engineer",
    location: "Tel Aviv, Israel (Remote)",
    period: "FEB 2022 - MAY 2022",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mappo-EL89wgRjASh9XjfMwIWmxVaCDJgNcc.jpeg",
    website: "https://mappo.world/",
    description:
      "an in-car app for location-based cultural content working with leading automotive OEMs",
    highlights: [
      "Led a 5-person team to build book collection APIs using BeautifulSoup, Flask, and Heroku for Mappo's literature-based content",
      "Designed clever CAPTCHA-bypassing web scrapers for Amazon, Goodreads, and Project Gutendex that return cleaned data for >428 million books",
      "Built Mappo's book data insertion pipeline, which will be responsible for providing >70% of Mappo's cultural content in their app",
    ],
  },
  {
    company: "SOLO",
    role: "Software Engineer",
    location: "Tel Aviv, Israel (Remote)",
    period: "SEP 2021 - DEC 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solo-pH8k8ztx43QQRClktH0OlJJ0JxmMP9.jpeg",
    website: "https://www.imsolo.ai/",
    description:
      "an emotional wellbeing app that uses facial recognition to measure mood cues",
    highlights: [
      "Led a 3-person team to build an iFrame widget implementation of SOLO's flagship product based in React.js frontend and Node.js backend",
      "Enabled SOLO's product to exist as an isolated app widget on external websites, which is currently used by one of SOLO's clients with >200k users",
    ],
  },
  {
    company: "TapTapes",
    role: "Software Engineer",
    location: "Tel Aviv, Israel (Remote)",
    period: "FEB 2021 - MAY 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taptapes-SY6dpSfYlI1OiCpdv4GMqYqkTVueSY.jpeg",
    website: "https://www.crunchbase.com/organization/taptapes/",
    description: "a podcast-sharing social network mobile app",
    highlights: [
      "Led a team of 4 student engineers to build monetization strategy of TapTapes, a podcast-sharing social network mobile application",
      "Designed digital tokenization mechanism in React Native frontend and Node.js backend with MongoDB database and S3 storage, to become TapTapes's first revenue stream",
    ],
  },
  {
    company: "Vibo",
    role: "Software Engineer",
    location: "Tel Aviv, Israel (Remote)",
    period: "AUG 2020 - DEC 2020",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibo-cGEN0XeGqkvM6lMx69D82HFRwXirxV.jpeg",
    website: "https://vibodj.com/",
    description:
      "a music management tool for DJs and event planners",
    highlights: [
      "Led a team of 2 student engineers to create a song trends analysis platform on Vibo, a music management tool for DJs and event planners, based in React.js frontend and Node.js & GraphQL backend that queries MongoDB database; increased screen-time and user engagement by >40%",
      "Headed software testing: internal testing using generated fake data via Faker.js & GraphQL integration tests via Jest",
    ],
  },
  {
    company: "AgroFides",
    role: "Software Engineer",
    location: "Newburyport, MA",
    period: "NOV 2020 - JAN 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrofides-wLKMjFaH2u6RnGHRRyqvYMtAaKVbXQ.jpeg",
    website: "https://agrofides.com/",
    description:
      "an analytical tool to assess creditworthiness for African farmers",
    highlights: [
      "Developed data visualization dashboards using React and D3.js for agricultural analytics and crop monitoring systems",
      "Built IoT sensor data integration pipelines that processed real-time environmental data from farm sensors",
      "Implemented machine learning models for crop yield prediction and irrigation optimization recommendations",
      "Created responsive farmer-facing interface that simplified complex agricultural data into actionable insights",
    ],
  },
  {
    company: "W. B. Rogers Lab",
    role: "Undergraduate Research Fellow",
    location: "Waltham, MA",
    period: "JUN 2020 - JUN 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogerslab-MerAxrSvtITXrZDHdAi1LXhkVtfs3R.jpeg",
    website: "http://www.rogers-lab.com/",
    description:
      "an experimental research group within the Department of Physics at Brandeis University working in the areas of soft matter and biological physics",
    highlights: [
      "1 of 7 to acquire two highly competitive undergraduate research fellowships, funded by the NSF and by Brandeis University, for two consecutive years",
      "Organized independent nanotechnology research with Dr. Ben Rogers and Dr. Melissa Rinaldin, analyzing the liquid-liquid phase separation (LLPS) behavior of DNA nanostars",
      "Investigated unexpected LLPS behavior of DNA nanostars at high temperatures using a variety of experimental techniques including confocal, brightfield, & DIC microscopy (using Leica Application Suite X), FRAP, and NUPACK",
      "Conducted extensive data analysis using a variety of NumPy, Pandas, Matplotlib, Scipy, and image-analysis Python libraries to investigate the biophysical properties of DNA nanostars",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">EXPERIENCE</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="bg-stone-50 border-2 border-stone-200 p-6 hover:border-stone-300 transition-all duration-200 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-stone-200 border-2 border-stone-300 overflow-hidden">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold font-mono">{exp.company}</h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-400 hover:text-stone-900 transition-colors hover:scale-110 duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      {exp.role && <h4 className="text-lg font-semibold text-stone-700 mb-2">{exp.role}</h4>}
                      {exp.description && (
                        <div className="mb-3 p-3 bg-stone-100 border-l-4 border-stone-300 rounded-r">
                          {exp.customer ? (
                            <div className="space-y-1 text-sm">
                              <div>
                                <span className="font-semibold text-stone-700">Product:</span>{" "}
                                <span className="text-stone-600 font-light">{exp.description}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-stone-700">Customer:</span>{" "}
                                <span className="text-stone-600 font-light">{exp.customer}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm">
                              <span className="text-stone-600 font-light italic">{exp.description}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col lg:items-end gap-2 text-sm text-stone-500 lg:text-right lg:min-w-0 lg:flex-shrink-0">
                      <div className="flex items-center gap-1 font-mono lg:justify-end">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono lg:justify-end">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role Progression for TAMID */}
                  {exp.roleProgression ? (
                    <div className="space-y-6">
                      {exp.roleProgression.map((role, roleIndex) => (
                        <div key={roleIndex}>
                          <h5 className="text-lg font-semibold text-stone-700 mb-1">{role.title}</h5>
                          <p className="text-sm text-stone-500 font-mono mb-3">{role.period}</p>
                          <div className="space-y-3">
                            {role.highlights.map((highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex items-start gap-3 text-stone-700 hover:text-stone-900 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 flex-shrink-0" />
                                <p className="leading-relaxed font-light">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Regular Highlights */
                    <div className="space-y-3">
                      {exp.highlights?.map((highlight, highlightIndex) => {
                        // Bold first sentence for specific companies
                        const shouldBoldFirstSentence =
                          (exp.company === "Microsoft" && exp.role === "Product Manager") ||
                          exp.company === "Augment Industries" ||
                          exp.company === "Mobile Memory"

                        if (shouldBoldFirstSentence) {
                          const firstSentenceEnd = highlight.indexOf(". ")
                          if (firstSentenceEnd !== -1) {
                            const firstSentence = highlight.substring(0, firstSentenceEnd + 1)
                            const restOfText = highlight.substring(firstSentenceEnd + 2)

                            return (
                              <div
                                key={highlightIndex}
                                className="flex items-start gap-3 text-stone-700 hover:text-stone-900 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 flex-shrink-0" />
                                <p className="leading-relaxed font-light">
                                  <span className="font-semibold">{firstSentence}</span> {restOfText}
                                </p>
                              </div>
                            )
                          }
                        }

                        return (
                          <div
                            key={highlightIndex}
                            className="flex items-start gap-3 text-stone-700 hover:text-stone-900 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 flex-shrink-0" />
                            <p className="leading-relaxed font-light">{highlight}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Learn More Link */}
                  {exp.learnMore && (
                    <div className="mt-4">
                      <a
                        href={exp.learnMore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        Learn More
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
