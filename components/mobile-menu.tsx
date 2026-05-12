"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MapPin, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onBookAppointment: () => void
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Modalities", href: "#modalities" },
  { label: "Providers", href: "#providers" },
  { label: "Contact", href: "#contact" },
]

const locations = [
  { name: "Roxborough", address: "501 Leverington Ave, Suite 103" },
  { name: "Bala Cynwyd", address: "Two Bala Plaza, Suite 300" },
]

export function MobileMenu({ isOpen, onClose, onBookAppointment }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onClose()
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleBookClick = () => {
    onClose()
    onBookAppointment()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-border shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-foreground">Apex Medical</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col h-[calc(100%-65px)] overflow-y-auto">
              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between w-full p-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </motion.button>
                ))}
              </nav>

              {/* Book Appointment Button */}
              <div className="px-4">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={handleBookClick}
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </motion.button>
              </div>

              {/* Locations */}
              <div className="p-4 mt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Our Locations</h4>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{location.name}</p>
                        <p className="text-xs text-muted-foreground">{location.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="p-4 mt-auto border-t border-border">
                <Link
                  href="tel:215-472-3500"
                  className="group flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-accent/50 text-foreground font-medium transition-all duration-200 hover:bg-accent active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-primary transition-transform group-hover:scale-110 group-hover:animate-pulse" />
                  (215) 472-3500
                </Link>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
