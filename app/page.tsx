"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Terminal, FileText, Code, Github, Linkedin, Twitter, Send as Telegram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

const TECHS = ["TypeScript","JavaScript", "Solidity","Smart Contract","Hardhat","Foundry","The Graph","React","Vite","Next", "Node.js", "Python","DEFI","RWA","TOKEN","NFT","Web3","Blockchain"]

export default function HomePage() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const commands = ["whoami", "ls -la ~/skills", "cat README.md", "git status", "bun run dev"]

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0

    const typeCommand = () => {
      if (charIndex < commands[commandIndex].length) {
        setCurrentCommand(commands[commandIndex].slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeCommand, 100)
      } else {
        setTimeout(() => {
          charIndex = 0
          commandIndex = (commandIndex + 1) % commands.length
          setCurrentCommand("")
          setTimeout(typeCommand, 500)
        }, 2000)
      }
    }

    typeCommand()

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
          {/* Terminal Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Terminal Window */}
            <div className="bg-black border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 border-b border-green-500/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-green-400 text-sm font-mono">shivam@website: ~</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">shivam@website:~$</span>
                    <span className="text-green-400">{currentCommand}</span>
                    <span className={`text-green-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                  </div>

                  <div className="text-gray-300 space-y-1 pl-4">
                    <div className="text-green-400">Output:</div>
                    <div>
                      Name: <span className="text-white">Shivam Yadav</span>
                    </div>
                    <div>
                      Role: <span className="text-white">Full-Stack Blockchain Developer</span>
                    </div>
                    <div>
                      Status: <span className="text-green-400 animate-pulse">Alive</span>
                    </div>
                    <div>
                      Location: <span className="text-white">~/Earth</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-green-500/20 pt-4">
                  {/* <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                    <span className="text-gray-500"># </span>Hello, World!
                  </h1> */}
                  <p className="text-gray-300 text-lg mb-4">
                    <span className="text-green-500">// </span>Building things which will be used by billions of people.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {TECHS.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-mono">
                    <Link href="/about">
                      ./explore --more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* System Stats */}
          {/* <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
          >
            {[
              { label: "Projects", value: "15+", icon: Code, command: "ls projects/" },
              { label: "Articles", value: "25+", icon: FileText, command: "wc -l articles/*" },
              { label: "Uptime", value: "5+ Years", icon: Activity, command: "uptime" },
              { label: "Coffee", value: "∞", icon: Coffee, command: "brew coffee" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-black border border-green-500/30 rounded p-3 hover:border-green-500/50 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-mono text-gray-400">{stat.command}</span>
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-green-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.section> */}

          {/* Directory Structure */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-5 w-5 text-green-500" />
              <span className="text-green-400 font-mono">tree ~/portfolio</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "~/about",
                  description: "About Me",
                  content: "Learn about me and what drives me to create amazing software.",
                  href: "/about",
                  icon: "📁",
                  command: "cat about.md",
                },
                {
                  title: "~/projects",
                  description: "Projects I have launched",
                  content: "Applications, websites, NPM packages and tools I've built to solve real-world problems.",
                  href: "/projects",
                  icon: "🚀",
                  command: "git log --oneline",
                },
                {
                  title: "~/articles",
                  description: "Technical writings",
                  content: "Ideas, thoughts and plans about blockchain, AI, technology and whatever comes to my mind.",
                  href: "/articles",
                  icon: "📝",
                  command: "ls articles/*.md",
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                >
                  <Card className="bg-black border-green-500/30 hover:border-green-500/50 transition-all h-full group flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">{section.icon}</span>
                        <span className="text-xs font-mono text-gray-400">{section.command}</span>
                      </div>
                      <CardTitle className="text-green-400 font-mono text-lg group-hover:text-green-300 transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm">{section.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col flex-1">
                      <div className="flex-1 flex flex-col">
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">{section.content}</p>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-green-500/50 text-green-400 hover:bg-green-500/10 w-full font-mono mt-auto"
                        >
                          <Link href={section.href}>cd {section.title}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Status Bar */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-black border border-green-500/30 rounded p-4"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono">Status: Alive & Online</span>
                </div>
                <p className="text-gray-300 text-sm">
                  <span className="text-green-500"># </span>
                  Always building to find right product for billions.
                </p>
              </div>

                <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                  <a href="https://github.com/Shivamycodee" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                  <a href="https://www.linkedin.com/in/shivam-yadav-917863224/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                  </a>
                </Button>

                   <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                    <a href="https://medium.com/@shivam_yadav" target="_blank" rel="noopener noreferrer" title="Medium">
                    <img src="/medium.svg" alt="Medium" className="h-4 w-4" />
                    </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                  <a href="https://x.com/VibeWeb3" target="_blank" rel="noopener noreferrer" title="Twitter">
                  <Twitter className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                  <a href="https://t.me/VibeWeb3" target="_blank" rel="noopener noreferrer" title="Telegram">
                  <Telegram className="h-4 w-4" />
                  </a>
                </Button>
                </div>

            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
