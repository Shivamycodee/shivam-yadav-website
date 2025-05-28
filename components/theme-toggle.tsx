"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center space-x-2 p-2 rounded text-gray-400 hover:text-green-400 hover:bg-green-500/10 transition-all duration-200 font-mono text-sm w-full"
      title="Toggle theme"
    >
      <span className="text-green-500">$</span>
      <Monitor className="h-4 w-4" />
      <span>theme --toggle</span>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="ml-auto"
      >
        {theme === "dark" ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      </motion.div>
    </motion.button>
  )
}
