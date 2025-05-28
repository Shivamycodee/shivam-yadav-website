"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, PenTool } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    slug: "judgement-ai",
    title: "Judgement AI",
    description:
      "How AI can help us decrease the high number of cases in the Indian court.",
    date: "2024-04-16",
    readTime: "8 min read",
    category: "AI",
    image: "/images/articles/3.png",
    imageAlt: "Judgement AI image",
  },
  {
    slug: "confession",
    title: "Confession",
    description: "Now your calls are truly secure.",
    date: "2024-09-11",
    readTime: "8 min read",
    category: "NPM",
    image: "/images/articles/5.png",
    imageAlt: "Confession",
  },
   {
    slug: "brics-currency",
    title: "BRICS Currency",
    description: "BRICS is using BLOCKCHAIN to kill dollar dominance.",
    date: "2025-04-12",
    readTime: "8 min read",
    category: "Blockchain",
    image: "/images/articles/brics.png",
    imageAlt: "brics currency",
  },
    {
    slug: "why-build-alienmeet",
    title: "Why Build AlienMeet?",
    description: "Why I built Alienmeet: No borders. Just People.",
    date: "2025-05-13",
    readTime: "4 min read",
    category: "WebRTC",
    image: "/images/articles/alienmeet.png",
    imageAlt: "alienmeet",
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen subtle-pattern">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <PenTool className="h-4 w-4 text-green-500" />
              <span className="text-green-500 text-sm">Knowledge sharing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">My Articles</h1>
            {/* <p className="text-xl text-muted-foreground">
              Ideas, thoughts and plans about blockchain, AI, technology and whatever comes to my mind.
              </p> */}
          </div>

          {/* Articles Summary */}
          <Card className="bg-green-500/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <h2 className="text-lg font-semibold text-green-500">
                  What You'll Find Here
                </h2>
                <p className="text-muted-foreground">
                  I write about Ideas, thoughts and plans about blockchain, AI,
                  technology and whatever comes to my mind.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all h-full overflow-hidden group flex flex-col">
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.imageAlt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs bg-green-500/90 text-white rounded-full border border-green-500/30 backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center space-x-2 text-xs text-white">
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 text-green-500" />
                      {/* <span>{new Date(article.date).toLocaleDateString()}</span> */}
                      <span>
                        {new Intl.DateTimeFormat("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }).format(new Date(article.date))}
                      </span>
                    </div>
                    <CardTitle className="text-lg hover:text-green-500 transition-colors line-clamp-2">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full border-green-500/50 text-green-500 hover:bg-green-500/10 hover:text-green-500/80"
                    >
                      <Link href={`/articles/${article.slug}`}>
                        <BookOpen className="mr-2 h-3 w-3" />
                        Read Article <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Want to be notified when I publish new articles?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              <a
                href="https://www.linkedin.com/in/shivam-yadav-917863224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PenTool className="mr-2 h-4 w-4" />
                Connect with me on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
