"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Terminal, Home, FileText, Code, Menu, X, ChevronUp, User } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "~/home", icon: Home, command: "cd ~/" },
  { href: "/about", label: "~/about", icon: User, command: "cat about.md" },
  { href: "/projects", label: "~/projects", icon: Code, command: "git status" },
  { href: "/articles", label: "~/articles", icon: FileText, command: "ls articles/" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [isCollapsed, setIsCollapsed] = useState(false)
const [isMinimized, setIsMinimized] = useState(false)
const [isMaximized, setIsMaximized] = useState(false)


// const handleClose = () => setIsCollapsed(true)
const handleMinimize = () => {
  setIsMinimized(!isMinimized)
  setIsMaximized(false)
}
const handleMaximize = () => {
  setIsMaximized(!isMaximized)
  setIsMinimized(false)
}


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Desktop Terminal Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        // className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          className={`
    fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-300
    ${isMinimized ? "w-16" : isMaximized ? "w-96" : "w-64"}
    ${isCollapsed ? "pointer-events-none" : ""}
  `}
      >
        <div className="bg-black/95 backdrop-blur-xl border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500/20">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
     <button
    // onClick={handleClose}
    className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition"
    aria-label="Close"
  />
  <button
    onClick={handleMinimize}
    className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition"
    aria-label="Minimize"
  />
  <button
    onClick={handleMaximize}
    className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition"
    aria-label="Maximize"
  />

  
              </div>
              <span className="text-green-400 text-sm font-mono">terminal</span>
            </div>
          </div>

          {/* {isCollapsed && (
  <button
    onClick={() => setIsCollapsed(false)}
    className="fixed top-1/2 left-2 z-50 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
    aria-label="Open Sidebar"
  >
    <Terminal className="h-4 w-4" />
  </button>
)} */}
          

          {/* Terminal Content */}
          <div className="p-3 space-y-2">
            {/* Logo/User */}
            <Link href="/" className="group block mb-3">
              <div className="flex items-center space-x-2 p-2 rounded hover:bg-green-500/10 transition-colors">
                <Terminal className="h-4 w-4 text-green-500" />
                <span className="text-green-400 text-sm font-mono">shivam@website</span>
              </div>
            </Link>

            {/* Navigation Items */}
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =  pathname.includes('articles') ? item.href === '/articles': pathname == item.href
              return (
                <motion.div key={item.href} whileHover={{ x: 4 }} className="relative">
                  <Link href={item.href} className="group block">
                    <div
                      className={`flex items-center space-x-2 p-2 rounded transition-all duration-200 ${
                        isActive
                          ? "bg-green-500/20 text-green-400 border-l-2 border-green-500"
                          : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                      }`}
                    >
                      <span className="text-green-500 text-sm font-mono">$</span>
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-mono">{item.label}</span>
                    </div>

                    {/* Command tooltip */}
                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-black border border-green-500/30 rounded px-2 py-1 whitespace-nowrap">
                        <span className="text-green-400 text-xs font-mono">{item.command}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}

            {/* Theme Toggle */}
            {/* <div className="pt-2 border-t border-green-500/20">
              <ThemeToggle />
            </div> */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Terminal Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-xl shadow-lg shadow-green-500/10" : "bg-black/90 backdrop-blur-md"
        }`}
      >
        <div className="border-b border-green-500/30">
          {/* Terminal Header Bar */}
          <div className="bg-gray-800 px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-green-400 text-xs font-mono">mobile-terminal</span>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-green-400 hover:text-green-300 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="px-4 py-3">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-green-500" />
              <span className="text-green-400 text-sm font-mono">shivam@website:~$</span>
              <span className="text-gray-400 text-sm font-mono">whoami</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/95 backdrop-blur-xl border-b border-green-500/30 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname.includes('articles') ? item.href === '/articles': pathname == item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 p-3 rounded transition-all duration-200 ${
                          isActive
                            ? "bg-green-500/20 text-green-400 border-l-2 border-green-500"
                            : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                        }`}
                      >
                        <span className="text-green-500 font-mono">$</span>
                        <Icon className="h-4 w-4" />
                        <span className="font-mono text-sm">{item.label}</span>
                        <span className="ml-auto text-xs font-mono text-gray-500">{item.command}</span>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-2 border-t border-green-500/20 flex justify-center"
                >
                  <ThemeToggle />
                </motion.div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Bottom Terminal */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
      >
        <div className="bg-black/95 backdrop-blur-xl border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden">
          {/* Mini Terminal Header */}
          <div className="bg-gray-800 px-3 py-1 border-b border-green-500/20">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-xs font-mono ml-2">nav</span>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="p-2">
            <div className="flex items-center justify-around">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname.includes('articles') ? item.href === '/articles': pathname == item.href
                return (
                  <Link key={item.href} href={item.href} className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? "bg-green-500/20 text-green-400"
                          : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-black border border-green-500/30 rounded px-2 py-1 whitespace-nowrap">
                        <span className="text-green-400 text-xs font-mono">{item.label}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-32 right-4 z-40 lg:hidden w-10 h-10 bg-green-500 text-black rounded flex items-center justify-center shadow-lg shadow-green-500/25 font-mono text-sm"
          >
            <ChevronUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
