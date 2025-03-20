"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, User, Briefcase, Send } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [mounted, setMounted] = useState(false)

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Only run client-side code after mounting
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "project", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Render a simple loading state or nothing until client-side code is ready
  if (!mounted) {
    return null // Return nothing during SSR
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          >
            AL
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" isActive={activeSection === "home"} icon={<User size={16} />}>
              Home
            </NavLink>
            <NavLink href="#about" isActive={activeSection === "about"} icon={<User size={16} />}>
              About
            </NavLink>
            <NavLink href="#project" isActive={activeSection === "project"} icon={<Briefcase size={16} />}>
              Project
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"} icon={<Send size={16} />}>
              Contact
            </NavLink>
          </div>
          <div className="md:hidden">
            <button className="p-2 text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 pb-32 px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/5 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]">
              <span className="text-sm font-medium">Developer & Audio Engineer</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Andrew Luthringer
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Creating immersive digital experiences at the intersection of audio technology and web development.
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              <SocialButton href="https://github.com/andrewluthringer" icon={<Github />} label="GitHub" />
              <SocialButton href="https://linkedin.com/in/andrewluthringer" icon={<Linkedin />} label="LinkedIn" />
              <SocialButton href="mailto:andrew.luthringer@example.com" icon={<Mail />} label="Email" />
            </div>

            <div className="flex justify-center space-x-4">
              <Link href="#project">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
                  View My Work
                </button>
              </Link>
              <Link href="#contact">
                <button className="px-6 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white font-medium hover:bg-[#2a2a2a] transition-all duration-300">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <button className="p-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#2a2a2a] transition-all duration-300">
              <ArrowDown className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-[#0f0f0f]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader>About Me</SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Developer with a passion for audio technology</h3>
              <p className="text-gray-400">
                I'm a full-stack developer and audio engineer with over 5 years of experience creating immersive digital
                experiences. My unique background in both music production and software development allows me to build
                applications that bridge technology and creativity.
              </p>
              <p className="text-gray-400">
                I specialize in developing interactive audio applications, music visualization tools, and creative
                coding projects. My expertise includes real-time audio processing, 3D visualization, and creating
                intuitive user interfaces for complex audio systems.
              </p>
              <p className="text-gray-400">
                When I'm not coding, you'll find me producing music, experimenting with modular synthesizers, or
                exploring new audio processing techniques.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                  <div className="text-3xl font-bold text-teal-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                  <div className="text-3xl font-bold text-blue-400">24</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative h-full">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg border-2 border-teal-500/20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg border-2 border-blue-500/20"></div>
                <div className="relative z-10 rounded-lg overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Andrew Luthringer"
                    width={500}
                    height={600}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard title="Frontend Development" icon="🎨" skills={["React", "TypeScript", "Three.js", "WebGL"]} />
              <SkillCard
                title="Backend Development"
                icon="⚙️"
                skills={["Node.js", "Express", "MongoDB", "WebSockets"]}
              />
              <SkillCard
                title="Audio Engineering"
                icon="🎵"
                skills={["Web Audio API", "TensorFlow.js", "DSP", "Synthesis"]}
              />
              <SkillCard title="Creative Coding" icon="✨" skills={["p5.js", "GLSL", "Tone.js", "ML5.js"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader>Featured Project</SectionHeader>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 rounded-xl overflow-hidden">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sound Wave Project"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex space-x-3">
                      <Link href="https://soundwave-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </Link>
                      <Link
                        href="https://github.com/andrewluthringer/soundwave"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                          <Github className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-2">
                  Featured Project
                </div>
                <h3 className="text-2xl font-bold text-white">Sound Wave</h3>
                <p className="text-gray-400 mt-2">
                  An immersive audio visualization platform that transforms music into stunning visual experiences using
                  advanced signal processing and machine learning.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time audio analysis and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Machine learning for audio feature extraction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Interactive 3D visualizations with WebGL</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Customizable visual themes and parameters</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">React</span>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">
                    Web Audio API
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">Three.js</span>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">
                    TensorFlow.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">WebGL</span>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm">Node.js</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="https://soundwave-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#0f0f0f]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader>Get In Touch</SectionHeader>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's work together</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out if you want to connect!
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href="mailto:andrew.luthringer@example.com"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      andrew.luthringer@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <Linkedin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <a
                      href="https://linkedin.com/in/andrewluthringer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      linkedin.com/in/andrewluthringer
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <Github className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">GitHub</div>
                    <a
                      href="https://github.com/andrewluthringer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      github.com/andrewluthringer
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="#home"
                className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
              >
                Andrew Luthringer
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link href="https://github.com/andrewluthringer" target="_blank" rel="noopener noreferrer">
                <button className="p-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <Github className="w-5 h-5" />
                </button>
              </Link>
              <Link href="https://linkedin.com/in/andrewluthringer" target="_blank" rel="noopener noreferrer">
                <button className="p-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </Link>
              <Link href="mailto:andrew.luthringer@example.com">
                <button className="p-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Andrew Luthringer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper Components
function NavLink({
  href,
  isActive,
  icon,
  children,
}: { href: string; isActive: boolean; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${isActive ? "text-teal-400" : "text-gray-400 hover:text-white"}`}
    >
      {icon}
      <span>{children}</span>
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></div>
      )}
    </Link>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="p-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-teal-500/50 transition-all duration-300">
        {icon}
        <span className="sr-only">{label}</span>
      </button>
    </Link>
  )
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        {children}
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
    </div>
  )
}

function SkillCard({ title, icon, skills }: { title: string; icon: string; skills: string[] }) {
  return (
    <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-teal-500/30 transition-all duration-300 group">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">{title}</h4>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-center">
            <div className="mr-2 w-1 h-1 rounded-full bg-teal-500"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

