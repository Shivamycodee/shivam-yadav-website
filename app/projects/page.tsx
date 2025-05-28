"use client";

import { CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Rocket,
  Zap,
  Terminal,
  Code2,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Dverse",
    description:
      "A secure and decentralized platform to commuite. Leave 0 footprints online.",
    technologies: [
      "Next.js",
      "Javascript",
      "WebRTC",
      "Libp2p",
      "IPFS",
      "livepeer",
      "Crypto Wallet",
    ],
    githubUrl: "https://github.com/Shivamycodee/dverse-git",
    liveUrl: "https://dverse-git.vercel.app/",
    status: "Live",
    statusColor: "text-green-500",
    image: "/projects/1.gif",
    imageAlt: "dverse",
  },
    {
    id: 1.5,
    title: "Alienmeet: No borders. Just Peoples ",
    description:
      "Connect with random people without sharing personal info. Fast, secure, private—powered by WebRTC",
    technologies: [
      "Next.js",
      "Typescript",
      "WebRTC",
      "STUN/TURN Server",
      "AWS",
      "WSS",
      "Node"
    ],
    githubUrl: "https://github.com/Shivamycodee/alienmeet",
    liveUrl: "https://alienmeet.com/about",
    status: "Live",
    statusColor: "text-green-500",
    image: "/images/articles/alienmeet.png",
    imageAlt: "dverse",
  },
  {
    id: 2,
    title: "Account Abstraction (ERC-4337)",
    description: "Made account abstraction easy to understand and use.",
    technologies: ["NPM", "Javascript", "Node.js", "Polygon Amoy", "Gasless"],
    githubUrl: "https://github.com/Shivamycodee/vice-aa",
    liveUrl: "https://www.npmjs.com/package/vice-aa",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/4.gif",
    imageAlt: "account abstraction",
  },
    {
    id: 2.5,
    title: "Welone - Clone of Aave",
    description: "Crypto borrow and supply system on blockchain platform",
    technologies: ["Next.js", "Javascript","Blockchain","Solidity","Smart Contracts","Hardhat","Cryptocurrency","Tokens"],
    githubUrl: "https://github.com/Shivamycodee/weloan",
    liveUrl: "https://github.com/Shivamycodee/weloan",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/welone.png",
    imageAlt: "welone",
  },
  {
    id: 3,
    title: "WID-KYC Hook Uniswap (V4)",
    description: "Use your world-id to get verfied and swap on uniswapV4.",
    technologies: ["Blockchain","Solidity","Smart Contracts","Foundry","Uniswap","Hooks","World ID","Worldcoin","$UNI","$WID"],
    githubUrl: "https://github.com/Shivamycodee/WID-KYC-Hook",
    liveUrl:
      "https://github.com/ora-io/awesome-uniswap-hooks/blob/main/README.md#:~:text=WID%20KYC%3A%20A%20hook%20that%20uses%20World%20ID%20to%20perform%20KYC%20checks.%20This%20can%20be%20used%20to%20provide%20specific%20liquidity%20pools%20for%20users%20who%20have%20registered%20on%20the%20World%20ID%20of%20World%20Coin.",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/3.gif",
    imageAlt: "wid kyc hook",
  },
  {
    id: 3.1,
    title: "ARTHA",
    description: "Artha is a universal bot which monitors all types of profitable trade on solana to generate profit. people can invest in the pool and the profit will be distributed on the basis of investment.",
    technologies: ["Blockchain","Solana","Bot","Typescript","Meme Coin","WSS","AWS","SOL","Jupiter"],
    githubUrl: "https://github.com/Shivamycodee/artha",
    liveUrl:
      "https://www.loom.com/share/b334382a92c844f8ac376981f0828281",
    status: "Live",
    statusColor: "text-green-500",
    image: "/projects/artha.png",
    imageAlt: "artha",
  },
  {
    id: 4,
    title: "@shivamycodee/confession",
    description:
      "A package for a secure commuite to your server from browser.",
    technologies: ["NPM","Javascript","Network","JWT","API","Security"],
    githubUrl: "https://github.com/Shivamycodee/confession",
    liveUrl: "https://www.npmjs.com/package/@shivamycodee/confession",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/6.gif",
    imageAlt:
      "AI chat interface with conversation bubbles and modern messaging design",
    command: "python -m uvicorn main:app",
  },
    {
    id: 5,
    title: "AIArena",
    description:
      "Bringing Blockchain And AI Together.",
    technologies: ["Blockchain","AI","LLM","Python","Next.js","Javascript","Solidity","Smart Contracts","Hardhat"],
    githubUrl: "https://github.com/Shivamycodee/aiARENA",
    liveUrl: "https://aiarena-verse.vercel.app/",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/2.gif",
    imageAlt:
      "AI chat interface with conversation bubbles and modern messaging design",
    command: "python -m uvicorn main:app",
  },
  {
    id: 3.5,
    title: "Limit-Order Hook Uniswap (V4)",
    description: "Set limit Order to swap tokens on uniswap",
    technologies: ["Blockchain","Solidity","Smart Contracts","Foundry","Uniswap","Hooks","World ID","Worldcoin","$UNI"],
    githubUrl: "https://github.com/Shivamycodee/limit-order-hook",
    liveUrl:
      "https://github.com/Shivamycodee/limit-order-hook",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "/projects/3.gif",
    imageAlt: "limit order hook",
  },
  {
    id: 3.8,
    title: "C2T2",
    description: "Cross-Chain Token Transfer Application using Foundry & Wormhole",
    technologies: ["Blockchain","Solidity","Smart Contracts","Foundry","Wormhole","Tokens","Cross-Chain"],
    githubUrl: "https://github.com/Shivamycodee/c2t2",
    liveUrl:
      "https://github.com/Shivamycodee/c2t2",
    status: "Maintained",
    statusColor: "text-blue-500",
    image: "images/swap.png",
    imageAlt: "limit order hook",
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen subtle-pattern">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <Rocket className="h-4 w-4 text-green-500" />
              <span className="text-green-500 text-sm">My creations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              Applications and websites I've built
            </p>
          </div>

          {/* Projects Summary */}
          <Card className="bg-green-500/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <h2 className="text-lg font-semibold text-green-500 flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>What I Build</span>
                </h2>
                <p className="text-muted-foreground">
                  Applications, websites, NPM packages and tools I've built to
                  solve real-world problems.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          {/* <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs font-medium ${project.statusColor}`}>● {project.status}</span>
                        <div className="flex space-x-2">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3 text-green-500" />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <GitFork className="h-3 w-3 text-green-500" />
                            <span>{project.forks}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-green-500/50 text-green-500">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-green-500/50 hover:bg-green-500/10 hover:text-green-500"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-3 w-3" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div> */}

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between bg-black border-green-500/30 hover:border-green-500/50 hover:bg-green-500/5 transition-all group overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        project.image || "/placeholder.svg?height=200&width=400"
                      }
                      alt={project.imageAlt}
                      className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 text-xs bg-black/80 border border-green-500/30 rounded-full backdrop-blur-sm ${project.statusColor} font-mono`}
                      >
                        ● {project.status}
                      </span>
                    </div>

                    {/* Stats */}
                    {/* <div className="absolute top-3 right-3 flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-xs text-white bg-black/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-green-500" />
                    <span className="font-mono">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-white bg-black/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <GitFork className="h-3 w-3 text-green-500" />
                    <span className="font-mono">{project.forks}</span>
                    </div>
                  </div> */}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-400 font-mono group-hover:text-green-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-gray-300">
                      <span className="text-green-500">// </span>
                      {project.description}
                    </CardDescription>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mt-3 mb-3">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-green-500/50 text-green-400 bg-green-500/10 font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-row items-center gap-2">
                    {/* Action Buttons */}
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-green-500/50 hover:bg-green-500/10 hover:text-green-400 font-mono text-xs"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        github
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-black font-mono text-xs"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        ./run --live
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Have a Project in Mind?</h2>
            <p className="text-muted-foreground">
              I'd love to help bring those ideas to life
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              <a
                href="https://t.me/VibeWeb3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Send 👋 on Telegram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
