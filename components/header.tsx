"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMobileMenuToggle?: () => void
  onBookAppointment?: () => void
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#modalities", label: "Physical Therapy" },
  { href: "#providers", label: "Providers" },
  { href: "#contact", label: "Contact" },
]

const phoneNumber = "215-472-3500"

export function Header({ onMobileMenuToggle, onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 border-border shadow-lg shadow-primary/5"
          : "bg-card/85 border-border/50 shadow-none"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group relative flex items-center gap-3 pb-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4"
          aria-label="Go to top of Apex Medical Care website"
        >
          <span
            className={`font-semibold text-primary transition-all duration-500 group-hover:text-apex-blue-900 ${
              isScrolled ? "text-base tracking-[-0.01em] md:text-lg" : "text-lg tracking-tight md:text-xl"
            }`}
          >
            Apex Medical Care
          </span>
          <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 group-hover:w-full" />
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className={`hidden items-center gap-8 font-medium text-muted-foreground md:flex ${
            isScrolled ? "text-xs" : "text-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${phoneNumber.replace(/-/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-apex-blue-900"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{phoneNumber}</span>
          </a>
          {onBookAppointment && (
            <button
              onClick={onBookAppointment}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-apex-blue-900"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Schedule Appointment</span>
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-border/50 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-apex-blue-900"
              >
                <Phone className="h-4 w-4" />
                <span>Call {phoneNumber}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
