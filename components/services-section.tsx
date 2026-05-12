"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Activity, FileText, ClipboardList, TrendingUp, Users } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const approachItems = [
  {
    title: "Comprehensive Evaluation",
    description:
      "Every patient begins with a detailed physician assessment focused on identifying the root causes of pain and movement limitation — not just symptoms.",
    icon: ClipboardList,
  },
  {
    title: "Structured Rehabilitation",
    description:
      "Therapy progresses through clearly defined phases designed to restore mobility, strength, endurance, and functional independence.",
    icon: TrendingUp,
  },
  {
    title: "Objective Progress Tracking",
    description:
      "We use functional benchmarks and validated outcome measures when appropriate so improvement is visible and measurable over time.",
    icon: Activity,
  },
  {
    title: "Coordinated Team Care",
    description:
      "Physicians and therapists collaborate closely to minimize delays, adjust plans promptly, and ensure continuity throughout your recovery.",
    icon: Users,
  },
]

const serviceCards = [
  {
    title: "Physician Evaluation",
    eyebrow: "Medical oversight",
    body: "Comprehensive musculoskeletal assessment, diagnosis-focused care planning, and physician-directed oversight from intake through recovery.",
    icon: Stethoscope,
  },
  {
    title: "Physical Therapy",
    eyebrow: "Functional restoration",
    body: "Progressive rehabilitation focused on mobility, strength, neuromuscular control, gait quality, and safe return to daily activity.",
    icon: Activity,
  },
  {
    title: "Clinical Documentation",
    eyebrow: "Clear records",
    body: "Organized visit notes, progress benchmarks, functional limitations, and care coordination to support continuity and clarity.",
    icon: FileText,
  },
]

const outcomeMeasures = ["ROM deficits", "Pain trends", "ADL limits", "Oswestry", "DASH", "LEFS"]

export function ApproachSection() {
  return (
    <section className="relative border-t border-border/50 bg-gradient-to-b from-background to-card px-6 py-20 md:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,var(--color-accent)/0.15,transparent_65%)]" />
      </div>

      <motion.div {...fadeUp} className="relative mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
          Our Approach to Patient-Centered Care
        </h2>
        <div className="mx-auto mb-12 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

        {/* Philosophy callout */}
        <div className="mb-12 rounded-xl border-l-4 border-apex-emerald bg-muted/50 p-6 shadow-sm">
          <p className="font-medium text-foreground">
            We believe recovery should be structured, measurable, and built around your goals.
            From your first visit through discharge, your care is coordinated, clearly explained,
            and adapted as you improve.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid gap-8 md:grid-cols-2">
          {approachItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-t border-border/50 bg-gradient-to-b from-card to-muted/30 px-6 py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,var(--color-primary)/0.05,transparent_65%)]" />
      </div>

      <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-apex-gold-dark">
            Clinical services
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
            Comprehensive Musculoskeletal Rehabilitation Services
          </h2>
          <div className="mx-auto mb-8 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We provide physician-directed evaluation and rehabilitation for traumatic,
            work-related, and functional musculoskeletal conditions with care plans designed to
            restore mobility, rebuild strength, and improve measurable performance.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <CardContent className="p-7">
                  <div className="mb-6 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 transition-colors group-hover:bg-accent/10">
                    <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {service.eyebrow}
                  </p>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Documentation & Outcomes Section */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-primary/10 bg-primary text-primary-foreground shadow-xl shadow-primary/10">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Documentation & outcomes
              </p>
              <h3 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                Clear clinical records. Measurable recovery progression.
              </h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Our care model emphasizes consistent documentation, objective functional tracking,
                and clear communication across the course of care. This helps patients understand
                progress while giving referring partners a more organized view of recovery.
              </p>
            </div>
            <div className="border-t border-primary-foreground/10 bg-primary-foreground/5 p-8 md:p-10 lg:border-l lg:border-t-0">
              <div className="grid grid-cols-2 gap-3">
                {outcomeMeasures.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
