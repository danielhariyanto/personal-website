"use client"

import { Mail, Github, Linkedin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dthariyanto@gmail.com",
    href: "mailto:dthariyanto@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "danielhariyanto",
    href: "https://github.com/danielhariyanto",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "danielhariyanto",
    href: "https://www.linkedin.com/in/danielhariyanto/",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">CONTACT</h2>
          <div className="w-16 h-1 bg-stone-50 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-stone-800 border-2 border-stone-700 p-6 hover:border-stone-500 hover:-translate-y-1 transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-stone-700 group-hover:bg-stone-600 transition-colors mb-4">
                    <contact.icon className="w-6 h-6 text-stone-50" />
                  </div>
                  <h3 className="font-mono text-sm uppercase tracking-wider mb-2 text-stone-300">{contact.label}</h3>
                  <p className="text-sm font-light text-stone-400 group-hover:text-stone-200 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-stone-800">
          <p className="text-stone-500 font-mono text-sm">© 2025 Daniel Hariyanto. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
