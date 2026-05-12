"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Hand, 
  Dumbbell, 
  Brain, 
  Footprints, 
  Zap, 
  Target, 
  ClipboardCheck, 
  Thermometer, 
  Waves 
} from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const modalityCards = [
  {
    title: "Manual Therapy",
    body: "Hands-on joint mobilization, soft tissue mobilization, and myofascial techniques to reduce pain, improve joint mechanics, and restore functional movement patterns.",
    icon: Hand,
  },
  {
    title: "Therapeutic Exercise",
    body: "Progressive strength, flexibility, and stabilization programs designed to rebuild muscular balance and optimize biomechanical performance.",
    icon: Dumbbell,
  },
  {
    title: "Neuromuscular Re-education",
    body: "Movement retraining techniques focused on improving proprioception, coordination, and muscle activation patterns disrupted by injury.",
    icon: Brain,
  },
  {
    title: "Gait Training",
    body: "Targeted rehabilitation to restore normal walking mechanics, weight-bearing tolerance, and lower extremity control.",
    icon: Footprints,
  },
  {
    title: "Electrical Stimulation",
    body: "Therapeutic electrical modalities (NMES/TENS) to support pain control, circulation enhancement, and muscle activation when appropriate.",
    icon: Zap,
  },
  {
    title: "Therapeutic Activities",
    body: "Functional, task-specific movement training designed to improve lifting, carrying, reaching, transitional movements, and real-world performance.",
    icon: Target,
  },
  {
    title: "Functional Capacity Evaluation",
    body: "Comprehensive assessment of strength, endurance, positional tolerance, and functional work capacity to support safe return-to-work planning.",
    icon: ClipboardCheck,
    featured: true,
  },
  {
    title: "Hot & Cold Therapy",
    body: "Cryotherapy for inflammation control and thermotherapy to improve circulation and tissue extensibility during recovery phases.",
    icon: Thermometer,
  },
  {
    title: "Therapeutic Ultrasound",
    body: "Deep tissue heating modality used to promote cellular repair, improve soft tissue flexibility, and assist in ligament and tendon healing.",
    icon: Waves,
  },
]

export function ModalitiesSection() {
  return (
    <section
      id="modalities"
      className="relative border-t border-border/50 bg-gradient-to-b from-card to-muted/50 px-6 py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,var(--color-muted)/0.5,transparent_65%)]" />
      </div>

      <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-apex-gold-dark">
            Treatment capabilities
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
            Physical Therapy Modalities
          </h2>
          <div className="mx-auto mb-8 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
          <p className="mx-auto max-w-4xl text-base text-muted-foreground md:text-lg">
            Our physician-directed rehabilitation programs incorporate advanced therapeutic
            modalities designed to reduce pain, restore mobility, rebuild strength, and support
            safe functional progression. Each treatment is integrated into a structured plan
            tailored to your diagnosis and recovery goals.
          </p>
        </div>

        {/* Modality Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalityCards.map((modality) => {
            const Icon = modality.icon
            return (
              <Card
                key={modality.title}
                className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  modality.featured
                    ? "border-primary/30 shadow-lg shadow-primary/5"
                    : "border-border/70 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
                
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-apex-emerald/10 transition-colors group-hover:bg-apex-emerald/20">
                    <Icon className="h-5 w-5 text-apex-emerald" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-primary">
                    {modality.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {modality.body}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
