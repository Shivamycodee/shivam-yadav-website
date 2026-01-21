"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import { Terminal, Activity, GitCommit, Code2 } from "lucide-react"

export default function GitHubContributions() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [contributionCount, setContributionCount] = useState(0)

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="bg-black border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden hover:border-green-500/50 transition-all duration-300">
            {/* Enhanced Terminal Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-3 border-b border-green-500/30">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Terminal className="h-4 w-4 text-green-500" />
                            <span className="text-green-400 text-sm font-mono">github-stats.sh</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Activity className="h-3 w-3 text-green-500 animate-pulse" />
                        <span className="text-green-500/70 text-xs font-mono">LIVE</span>
                    </div>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-6">
                {/* Command Prompt */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="text-green-500 font-mono text-sm">shivam@website</span>
                        <span className="text-gray-500 font-mono text-sm">~</span>
                        <span className="text-green-400 font-mono text-sm">$</span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isLoaded ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-gray-300 font-mono text-sm"
                        >
                            {isLoaded ? "git-stats --user=Shivamycodee --show-graph" : "fetching data..."}
                        </motion.span>
                        {!isLoaded && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="text-green-400 font-mono text-sm"
                            >
                                |
                            </motion.span>
                        )}
                    </div>

                    {isLoaded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex items-start space-x-2 text-xs font-mono text-gray-400"
                        >
                            <span className="text-green-500">&gt;</span>
                            <span>Analyzing contribution patterns...</span>
                        </motion.div>
                    )}
                </div>

                {/* Stats Section */}
                {isLoaded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="grid grid-cols-3 gap-3 pb-4 border-b border-green-500/20"
                    >
                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3 hover:border-green-500/40 transition-colors">
                            <div className="flex items-center space-x-2 mb-1">
                                <GitCommit className="h-3 w-3 text-green-500" />
                                <span className="text-xs font-mono text-gray-400">Total</span>
                            </div>
                            <div className="text-lg font-bold text-green-400 font-mono">707+</div>
                        </div>
                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3 hover:border-green-500/40 transition-colors">
                            <div className="flex items-center space-x-2 mb-1">
                                <Code2 className="h-3 w-3 text-green-500" />
                                <span className="text-xs font-mono text-gray-400">Period</span>
                            </div>
                            <div className="text-lg font-bold text-green-400 font-mono">12m</div>
                        </div>
                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3 hover:border-green-500/40 transition-colors">
                            <div className="flex items-center space-x-2 mb-1">
                                <Activity className="h-3 w-3 text-green-500" />
                                <span className="text-xs font-mono text-gray-400">Status</span>
                            </div>
                            <div className="text-lg font-bold text-green-400 font-mono flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                On
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Calendar Display */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative"
                >
                    <div className="github-calendar-wrapper">
                        <GitHubCalendar
                            username="Shivamycodee"
                            colorScheme="dark"
                            theme={{
                                dark: ['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            blockSize={11}
                            blockMargin={4}
                            fontSize={12}
                            showWeekdayLabels
                            style={{
                                color: '#8b949e',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Footer Info */}
                {isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="pt-4 border-t border-green-500/20"
                    >
                        <div className="flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center space-x-2 text-gray-500">
                                <span className="text-green-500">#</span>
                                <span>GitHub Activity Graph</span>
                            </div>
                            <a
                                href="https://github.com/Shivamycodee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500/70 hover:text-green-400 transition-colors flex items-center space-x-1 group"
                            >
                                <span>View Profile</span>
                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Custom CSS for glow effect */}
            <style jsx>{`
        .github-calendar-wrapper :global(.react-activity-calendar__count) {
          filter: drop-shadow(0 0 2px rgba(34, 197, 94, 0.5));
        }
        .github-calendar-wrapper :global(rect[data-level="4"]),
        .github-calendar-wrapper :global(rect[data-level="3"]) {
          filter: drop-shadow(0 0 3px rgba(34, 197, 94, 0.6));
        }
      `}</style>
        </div>
    )
}
