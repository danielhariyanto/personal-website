"use client"

import { MapPin, GraduationCap, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">ABOUT</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
              <div className="prose prose-stone max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Hi, I'm Daniel.</strong>
                </p>
                <p className="text-base leading-relaxed mb-6 text-stone-700">
                  I'm a builder at heart—driven not by profit or power, but by a desire to create meaningful impact. And
                  for me, impact isn't measured in metrics—it's measured in people helped.
                </p>
                <p className="text-base leading-relaxed mb-6 text-stone-700">
                  I believe technology and innovation are most powerful when they serve others—not just the one who
                  built them. Whether through startups, side projects, or my work at Microsoft, I build with one
                  question in mind: Will this create real value for real people?
                </p>
                <p className="text-base leading-relaxed mb-6 text-stone-700">
                  That question reflects something deeper: character is what matters most. That means choosing integrity
                  over ease, humility over ego, and service over self. Whether I'm designing a product or leading a
                  team, my goal is the same—to build in a way that honors God, uplifts others, and leaves the world
                  better than I found it. Because how we build is just as important as what we build.
                </p>
                <p className="text-base leading-relaxed text-stone-700">
                  If this inspires even one person to hold fast to what truly matters, then I've done something
                  worthwhile.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-900">Location</h3>
              </div>
              <p className="text-stone-700">Seattle, Washington</p>
              <p className="text-stone-700">Jakarta, Indonesia</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-900">Education</h3>
              </div>
              <div className="space-y-2 text-sm text-stone-700">
                <p>
                  <strong>B.S. in Computer Science</strong>
                </p>
                <p>
                  <strong>B.S. in Applied Mathematics</strong>
                </p>
                <p>
                  <strong>Minor in Business</strong>
                </p>
                <p className="text-stone-600">Summa Cum Laude, GPA: 3.94</p>
                <p className="text-stone-600">Graduated from Brandeis University with highest departmental honors</p>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-900">Awards & Recognition</h3>
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2 text-sm text-stone-700">
                <div className="pb-2 border-b border-stone-100">
                  <p className="font-medium">Presidential Scholarship</p>
                </div>
                <div className="pb-2 border-b border-stone-100">
                  <p className="font-medium">Phi Beta Kappa Honors Society</p>
                </div>
                <div className="pb-2 border-b border-stone-100">
                  <p className="font-medium">Bessemer Fellow (1 of 20 selected)</p>
                </div>
                <div className="pb-2 border-b border-stone-100">
                  <p className="font-medium">NSF Fellowship</p>
                </div>
                <div className="pb-2 border-b border-stone-100">
                  <p className="font-medium">Schiff Fellowship</p>
                </div>
                <div>
                  <p className="font-medium">Multi-award-winning startup founder (8 awards)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
