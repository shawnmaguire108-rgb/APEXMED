"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, CheckCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onBookAppointment?: () => void
}

const locations = [
  "637 South 52nd Street, Philadelphia, PA 19143",
  "1335 West Tabor Road, Suite 305, Philadelphia, PA 19141",
]

const phoneNumber = "215-472-3500"

const trustMetrics = [
  "Physician-led care planning",
  "Structured rehabilitation progression",
  "Objective outcome tracking",
  "Two Philadelphia locations",
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-secondary via-muted/50 to-background px-6 py-20 md:py-28 md:pt-32"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-28 left-1/2 h-96 w-[65rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)/0.08,transparent_60%)]" />
        <div className="absolute -bottom-24 right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--color-apex-emerald)/0.08,transparent_62%)]" />
      </div>

      <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-6xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-apex-emerald animate-pulse" />
          Physician-led rehabilitation · Two Philadelphia locations
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          Move Better. Recover Stronger.{" "}
          <br className="hidden md:block" />
          Return Confidently.
          <span className="mt-2 block text-xl font-medium text-foreground sm:text-2xl md:mt-3 md:text-3xl">
            Physician-Led Rehabilitation in Philadelphia
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Apex Medical Care delivers physician-led rehabilitation for injury recovery, 
          pain-related movement limitations, and functional restoration. Our model 
          combines medical oversight, structured physical therapy, and objective 
          progress tracking so every patient moves through care with clarity, 
          confidence, and measurable clinical direction.
        </p>

        {/* Trust Metrics */}
        <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div
              key={metric}
              className="flex items-center gap-2 rounded-xl border border-card bg-card/65 px-4 py-3 text-sm font-medium text-primary shadow-sm backdrop-blur transition-all hover:shadow-md"
            >
              <span className="text-accent">
                <CheckCircle className="h-4 w-4" />
              </span>
              {metric}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {onBookAppointment && (
            <Button
              onClick={onBookAppointment}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-apex-blue-900"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Appointment
            </Button>
          )}
          <a
            href={`tel:${phoneNumber.replace(/-/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/70 px-6 py-3 font-semibold text-primary shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>{phoneNumber}</span>
          </a>
        </div>

        {/* Location and Contact Info */}
        <div className="mt-8 flex flex-col items-start gap-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:gap-6">
          {locations.map((location) => (
            <a
              key={location}
              href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-3 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-foreground">{location}</span>
            </a>
          ))}
          <a
            href={`tel:${phoneNumber.replace(/-/g, "")}`}
            className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-3 font-semibold text-primary shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>{phoneNumber}</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
