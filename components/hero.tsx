"use client"

import { Download, ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100"
    >
      {/* Retro Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-stone-300 rotate-45 opacity-20 hidden lg:block animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-stone-900 opacity-5 hidden lg:block animate-pulse" />

      {/* Additional spinning squares */}
      <div className="absolute top-40 left-1/4 w-16 h-16 border border-stone-400 opacity-10 hidden md:block animate-spin-reverse" />
      <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-stone-800 opacity-5 hidden md:block animate-bounce-slow" />
      <div className="absolute top-1/3 right-16 w-12 h-12 border-2 border-stone-500 rotate-12 opacity-15 hidden lg:block animate-spin-slow" />
      <div className="absolute bottom-1/3 left-16 w-28 h-28 border border-stone-300 rotate-45 opacity-10 hidden lg:block animate-spin-reverse" />

      {/* Floating elements */}
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-stone-600 opacity-10 hidden xl:block animate-float" />
      <div className="absolute bottom-60 right-1/3 w-6 h-6 bg-stone-700 opacity-15 hidden xl:block animate-float-delayed" />
      <div className="absolute top-1/2 left-8 w-10 h-10 border border-stone-400 rotate-45 opacity-10 hidden lg:block animate-spin-slow" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 animate-fade-in">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight font-mono tracking-tight">
            DANIEL
            <br />
            <span className="text-stone-600">HARIYANTO</span>
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
              a problem solver who thrives on constraints, obsessed with building technology that serves and uplifts
              others
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/114-SiUKE7X8012P22tiA3U09RGCJlJ8V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-stone-800 hover:scale-105 transition-all duration-200 border-2 border-stone-900"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hover:scale-110 transition-transform"
      >
        <ArrowDown size={24} className="text-stone-400" />
      </button>
    </section>
  )
}
