"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const providers = [
  {
    name: "Courtney Waters, MD",
    role: "Medical Director · Musculoskeletal Medicine",
    body: "Dr. Waters provides comprehensive musculoskeletal evaluation and directs individualized rehabilitation plans from initial diagnosis through functional recovery. Her oversight ensures medical necessity, continuity of care, and structured progression aligned with objective clinical benchmarks.",
    bullets: [
      "Diagnostic evaluation & treatment planning",
      "Non-surgical musculoskeletal care planning",
      "Physician-directed rehabilitation oversight",
    ],
  },
  {
    name: "Aaron Myers, MSPT",
    role: "Senior Physical Therapist",
    body: "Mr. Myers specializes in structured rehabilitation programming focused on measurable strength restoration, mobility optimization, and functional performance advancement following traumatic and occupational injuries.",
    bullets: [
      "Manual therapy & biomechanical correction",
      "Progressive strength & conditioning",
      "Functional capacity development",
    ],
  },
  {
    name: "Joseph Donly, MPT",
    role: "Physical Therapist",
    body: "Mr. Donly focuses on neuromuscular retraining and advanced movement restoration, guiding patients through evidence-informed rehabilitation phases to ensure safe progression toward full functional reintegration.",
    bullets: [
      "Neuromuscular re-education",
      "Gait & mobility restoration",
      "Functional reintegration training",
    ],
  },
  {
    name: "James Barker, PTA",
    role: "Physical Therapy Assistant",
    body: "Mr. Barker supports the implementation of therapist-directed treatment plans, ensuring precise execution of exercise progression and patient safety within established clinical parameters.",
    bullets: [
      "Treatment plan implementation",
      "Monitored therapeutic exercise progression",
      "Functional recovery support",
    ],
  },
  {
    name: "Shawn Maguire, MHA",
    role: "Director of Clinical Operations",
    body: "Mr. Maguire oversees clinical operations, compliance systems, and interdisciplinary coordination to maintain a structured, physician-led model of care delivery. His leadership ensures documentation integrity, operational efficiency, and alignment with measurable quality standards.",
    bullets: [
      "Clinical governance & regulatory compliance",
      "Documentation systems & quality assurance",
      "Strategic development & operational leadership",
    ],
  },
]

export function ProvidersSection() {
  return (
    <section
      id="providers"
      className="relative border-t border-border/50 bg-gradient-to-b from-muted/50 to-card px-6 py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,var(--color-muted)/0.5,transparent_65%)]" />
      </div>

      <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-apex-gold-dark">
            Clinical leadership
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
            Providers & Executive Leadership
          </h2>
          <div className="mx-auto mb-8 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
          <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            Our interdisciplinary team integrates physician oversight, advanced rehabilitation
            science, and operational leadership to deliver structured, evidence-informed care.
            Each provider contributes distinct clinical expertise within a coordinated,
            physician-directed model designed to ensure consistency, accountability, and
            measurable patient outcomes.
          </p>
        </div>

        {/* Providers List */}
        <div className="mx-auto max-w-4xl space-y-0">
          {providers.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-border/50 py-10 pl-6 last:border-none"
            >
              {/* Vertical accent line */}
              <div className="absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />
              
              {/* Dot indicator */}
              <div className="absolute left-[-4px] top-10 h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />

              <h3 className="font-serif text-xl font-semibold tracking-tight text-primary md:text-2xl">
                {person.name}
              </h3>
              <p className="mb-5 mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {person.role}
              </p>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {person.body}
              </p>
              <ul className="space-y-2">
                {person.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-apex-emerald" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
