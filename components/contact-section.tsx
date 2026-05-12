"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, ExternalLink, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  onBookAppointment?: () => void
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const locations = [
  {
    address: "637 South 52nd Street, Philadelphia, PA 19143",
    mapUrl: "https://maps.google.com/?q=637+South+52nd+Street+Philadelphia+PA+19143",
  },
  {
    address: "1335 West Tabor Road, Suite 305, Philadelphia, PA 19141",
    mapUrl: "https://maps.google.com/?q=1335+West+Tabor+Road+Suite+305+Philadelphia+PA+19141",
  },
]

const phoneNumber = "215-472-3500"
const emailAddress = "apexmedcarellc@gmail.com"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-border/50 bg-gradient-to-b from-secondary via-card to-background px-6 py-20 md:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)/0.08,transparent_60%)]" />
      </div>

      <motion.div {...fadeUp} className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/90 p-8 shadow-xl shadow-primary/5 backdrop-blur md:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-apex-gold-dark">
            Start here
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
            Begin Your Recovery Today
          </h2>
          <div className="mb-8 h-px w-20 bg-gradient-to-r from-accent to-transparent opacity-80" />
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Visit one of our Philadelphia locations or call {phoneNumber} to schedule a comprehensive
            evaluation. Our team will guide you through a clear, personalized path toward improved
            movement and lasting relief.
          </p>

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
            {/* Locations and Phone */}
            <div className="space-y-4">
              {locations.map((location) => (
                <a
                  key={location.address}
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-colors hover:border-border hover:bg-muted/50"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground group-hover:text-primary">
                    {location.address}
                  </span>
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="flex items-center gap-3 p-2 -ml-2 text-sm font-semibold text-primary transition-colors hover:text-apex-blue-900"
              >
                <Phone className="h-5 w-5" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 p-2 -ml-2 text-sm font-semibold text-primary transition-colors hover:text-apex-blue-900"
              >
                <Mail className="h-5 w-5" />
                <span>{emailAddress}</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-apex-blue-900"
              >
                <a
                  href={locations[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border"
              >
                <a href={`tel:${phoneNumber.replace(/-/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
