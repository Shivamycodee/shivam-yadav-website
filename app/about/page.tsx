"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Send as Telegram,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Coffee,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


// const BLOCKCHAIN_SKILLS = [
//   "Solidity",
//   "Hardhat",
//   "Foundry",
//   "The Graph",
//   "Bitcoin Devlopment",
//   "EVM Chain Development",
// ]

export default function AboutPage() {
  return (
    <div className="min-h-screen subtle-pattern">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <Heart className="h-4 w-4 text-green-500" />
              <span className="text-green-500 text-sm">Nice to meet you!</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know me better
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio Section */}
            <div className="md:col-span-2">
              <Card className="bg-card border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-500 flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5" />
                    <span>My Story</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Hey there, I'm Shivam Yadav a blockchain developer, I'm on a
                    mission to cook up something so ridiculously useful that
                    it'll have billions of people flocking to it - and nope, not
                    because of some flashy ads, but because it's just that
                    awesome. it's like creating a chocolate cake that's healthy.
                  </p>
                  <p>
                    We're surfing the wild waves of tech growth, so why not make
                    some waves of our own with some insanely cool tech magic?
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Info Card */}
            <div className="space-y-6">
              <Card className="bg-card border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-500 flex items-center space-x-2">
                    <Coffee className="h-5 w-5" />
                    <span>Quick Facts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>Based on Earth</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span>Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-[13px] break-all">{`shivamyadav8758@gmail.com`}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Status Card */}
              <Card className="bg-green-500/10 border-green-500/30">
                <CardContent className="p-4">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-500 font-semibold">
                        Currently Building
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Always Building something new and exciting. Stay tuned for updates!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          {/* <Card className="bg-card border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-500">What I Work With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Frontend Development</h3>
                  <div className="space-y-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Frontend Development</h3>
                  <div className="space-y-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Backend Development</h3>
                  <div className="space-y-2">
                    {["Node.js", "Python", "Express.js", "FastAPI"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Tools & More</h3>
                  <div className="space-y-2">
                    {["PostgreSQL", "MongoDB", "Docker", "AWS"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Social Links */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Let's Connect</h2>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                asChild
                className="border-green-500/50 hover:bg-green-500/10 hover:text-green-500"
              >
                <a
                  href="https://github.com/Shivamycodee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-green-500/50 hover:bg-green-500/10 hover:text-green-500"
              >
                <a
                  href="https://www.linkedin.com/in/shivam-yadav-917863224/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-green-500/50 hover:bg-green-500/10 hover:text-green-500"
              >
                <a
                  href="https://x.com/VibeWeb3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-green-500/50 hover:bg-green-500/10 hover:text-green-500"
              >
                <a
                  href="https://t.me/VibeWeb3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Telegram className="mr-2 h-4 w-4" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
