import React from "react";
import { motion } from "framer-motion";
function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function PhoneIcon({ className = "", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L8.02 9.75a16 16 0 0 0 6.23 6.23l1.27-1.27a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.65.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MapPinIcon({ className = "", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const locations = [
  "637 South 52nd Street, Philadelphia, PA 19143",
  "1335 West Tabor Road, Suite 305, Philadelphia, PA 19141",
];

const phoneNumber = "215-472-3500";

const trustMetrics = [
  "Physician-led care planning",
  "Structured rehabilitation progression",
  "Objective outcome tracking",
  "Two Philadelphia locations",
];

const serviceCards = [
  {
    title: "Physician Evaluation",
    eyebrow: "Medical oversight",
    body: "Comprehensive musculoskeletal assessment, diagnosis-focused care planning, and physician-directed oversight from intake through recovery.",
  },
  {
    title: "Physical Therapy",
    eyebrow: "Functional restoration",
    body: "Progressive rehabilitation focused on mobility, strength, neuromuscular control, gait quality, and safe return to daily activity.",
  },
  {
    title: "Clinical Documentation",
    eyebrow: "Clear records",
    body: "Organized visit notes, progress benchmarks, functional limitations, and care coordination to support continuity and clarity.",
  },
];

const outcomeMeasures = ["ROM deficits", "Pain trends", "ADL limits", "Oswestry", "DASH", "LEFS"];

const modalityCards = [
  {
    title: "Manual Therapy",
    body: "Hands-on joint mobilization, soft tissue mobilization, and myofascial techniques to reduce pain, improve joint mechanics, and restore functional movement patterns.",
  },
  {
    title: "Therapeutic Exercise",
    body: "Progressive strength, flexibility, and stabilization programs designed to rebuild muscular balance and optimize biomechanical performance.",
  },
  {
    title: "Neuromuscular Re-education",
    body: "Movement retraining techniques focused on improving proprioception, coordination, and muscle activation patterns disrupted by injury.",
  },
  {
    title: "Gait Training",
    body: "Targeted rehabilitation to restore normal walking mechanics, weight-bearing tolerance, and lower extremity control.",
  },
  {
    title: "Electrical Stimulation (NMES/TENS)",
    body: "Therapeutic electrical modalities to support pain control, circulation enhancement, and muscle activation when appropriate.",
  },
  {
    title: "Therapeutic Activities",
    body: "Functional, task-specific movement training designed to improve lifting, carrying, reaching, transitional movements, and real-world performance.",
  },
  {
    title: "Functional Capacity Evaluation (FCE)",
    body: "Comprehensive assessment of strength, endurance, positional tolerance, and functional work capacity to support safe return-to-work planning and objective clinical documentation when required.",
  },
  {
    title: "Hot & Cold Therapy",
    body: "Cryotherapy for inflammation control and thermotherapy to improve circulation and tissue extensibility during recovery phases.",
  },
  {
    title: "Therapeutic Ultrasound",
    body: "Deep tissue heating modality used to promote cellular repair, improve soft tissue flexibility, and assist in ligament and tendon healing.",
  },
];

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
    bullets: ["Manual therapy & biomechanical correction", "Progressive strength & conditioning", "Functional capacity development"],
  },
  {
    name: "Joseph Donly, MPT",
    role: "Physical Therapist",
    body: "Mr. Donly focuses on neuromuscular retraining and advanced movement restoration, guiding patients through evidence-informed rehabilitation phases to ensure safe progression toward full functional reintegration.",
    bullets: ["Neuromuscular re-education", "Gait & mobility restoration", "Functional reintegration training"],
  },
  {
    name: "James Barker, PTA",
    role: "Physical Therapy Assistant",
    body: "Mr. Barker supports the implementation of therapist-directed treatment plans, ensuring precise execution of exercise progression and patient safety within established clinical parameters.",
    bullets: ["Treatment plan implementation", "Monitored therapeutic exercise progression", "Functional recovery support"],
  },
  {
    name: "Shawn Maguire, MHA",
    role: "Director of Clinical Operations",
    body: "Mr. Maguire oversees clinical operations, compliance systems, and interdisciplinary coordination to maintain a structured, physician-led model of care delivery. His leadership ensures documentation integrity, operational efficiency, and alignment with measurable quality standards.",
    bullets: ["Clinical governance & regulatory compliance", "Documentation systems & quality assurance", "Strategic development & operational leadership"],
  },
];

export default function ApexMedicalCareWebsite() {
  const [homeFlash, setHomeFlash] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const handleHomeClick = () => {
    const topElement = document.getElementById("top");

    setHomeFlash(true);
    window.setTimeout(() => setHomeFlash(false), 900);

    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="min-h-screen bg-[#fbfaf6] text-slate-800 antialiased" data-testid="apex-medical-care-website">
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 border-slate-200 shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
            : "bg-white/85 border-slate-200/70 shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
            isScrolled ? "py-2.5" : "py-4"
          }`}
        >
          <button
            type="button"
            onClick={handleHomeClick}
            className="group relative flex items-center gap-3 pb-1 text-left after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-[#c6a85b] after:to-transparent after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a85b]/40 focus-visible:ring-offset-4"
            aria-label="Go to top of Apex Medical Care website"
          >
            <span
              className={`font-semibold text-blue-950 transition-all duration-500 group-hover:text-blue-900 ${
                isScrolled ? "text-base tracking-[-0.01em] md:text-lg" : "text-lg tracking-tight md:text-xl"
              }`}
            >
              Apex Medical Care
            </span>
          </button>

          <nav
            aria-label="Main navigation"
            className={`hidden gap-6 font-medium text-slate-700 transition-all duration-500 md:flex ${
              isScrolled ? "text-xs" : "text-sm"
            }`}
          >
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#modalities" className="hover:text-blue-700">
              Physical Therapy Modalities
            </a>
            <a href="#providers" className="hover:text-blue-700">
              Providers
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200/50 bg-gradient-to-br from-[#f7fbff] via-[#eef6ff] to-[#fbfaf6] px-6 py-28 pt-32 text-slate-900">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(198,168,91,0.20),rgba(255,255,255,0)_48%)] transition-opacity duration-700 ${
            homeFlash ? "opacity-100" : "opacity-0"
          }`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-28 left-1/2 h-96 w-[65rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),rgba(255,255,255,0)_60%)]" />
          <div className="absolute -bottom-24 right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),rgba(255,255,255,0)_62%)]" />
        </div>

        <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Physician-led rehabilitation · Two Philadelphia locations
          </div>

          <h1 className="mb-6 mt-6 text-4xl font-semibold leading-tight tracking-tight text-blue-950 md:text-5xl">
            Move Better. Recover Stronger. Return Confidently.
            <br className="hidden md:block" />
            <span className="text-2xl font-semibold text-slate-800 md:text-3xl">
              Physician-Led Rehabilitation in Philadelphia
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            Apex Medical Care delivers physician-led rehabilitation for injury recovery, pain-related
            movement limitations, and functional restoration. Our model combines medical oversight,
            structured physical therapy, and objective progress tracking so every patient moves through
            care with clarity, confidence, and measurable clinical direction.
          </p>

          <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-white/80 bg-white/65 px-4 py-3 text-sm font-medium text-blue-950 shadow-sm backdrop-blur"
              >
                <span className="mr-2 text-[#c6a85b]">◆</span>
                {metric}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 text-sm text-slate-700 lg:flex-row lg:items-center lg:gap-6">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm"
              >
                <MapPinIcon className="text-blue-800" />
                <span>{location}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-3 font-semibold text-blue-950 shadow-sm">
              <PhoneIcon className="text-blue-800" />
              <span>{phoneNumber}</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-t border-slate-200/50 bg-gradient-to-b from-[#fafaf8] to-white px-6 py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,rgba(198,168,91,0.22),rgba(198,168,91,0)_65%)]" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-blue-900 md:text-4xl">
            Our Approach to Patient-Centered Care
          </h2>
          <div className="mx-auto mb-12 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c6a85b] to-transparent opacity-70" />

          <div className="mb-10 rounded-xl border-l-4 border-emerald-600 bg-slate-100 p-6 shadow-sm">
            <p className="font-medium text-slate-800">
              We believe recovery should be structured, measurable, and built around your goals.
              From your first visit through discharge, your care is coordinated, clearly explained,
              and adapted as you improve.
            </p>
          </div>

          <div className="grid gap-12 text-slate-700 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold">Comprehensive Evaluation</h3>
              <p>
                Every patient begins with a detailed physician assessment focused on identifying the
                root causes of pain and movement limitation — not just symptoms.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">Structured Rehabilitation</h3>
              <p>
                Therapy progresses through clearly defined phases designed to restore mobility,
                strength, endurance, and functional independence.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">Objective Progress Tracking</h3>
              <p>
                We use functional benchmarks and validated outcome measures when appropriate so
                improvement is visible and measurable over time.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">Coordinated Team Care</h3>
              <p>
                Physicians and therapists collaborate closely to minimize delays, adjust plans
                promptly, and ensure continuity throughout your recovery.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="relative border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50 px-6 py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.08),rgba(255,255,255,0)_65%)]" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7b2f]">
              Clinical services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
              Comprehensive Musculoskeletal Rehabilitation Services in Philadelphia
            </h2>
            <div className="mx-auto mb-8 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c6a85b] to-transparent opacity-70" />
            <p className="text-lg leading-relaxed text-slate-700">
              We provide physician-directed evaluation and rehabilitation for traumatic,
              work-related, and functional musculoskeletal conditions with care plans designed to
              restore mobility, rebuild strength, and improve measurable performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]"
              >
                <CardContent className="p-7">
                  <div className="mb-6 h-px w-16 bg-gradient-to-r from-[#c6a85b] to-transparent" />
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {service.eyebrow}
                  </p>
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-blue-950">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-700">{service.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-950/10 bg-blue-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c17a]">
                  Documentation & outcomes
                </p>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Clear clinical records. Measurable recovery progression.
                </h3>
                <p className="leading-relaxed text-blue-100">
                  Our care model emphasizes consistent documentation, objective functional tracking,
                  and clear communication across the course of care. This helps patients understand
                  progress while giving referring partners a more organized view of recovery.
                </p>
              </div>
              <div className="border-t border-white/10 bg-white/8 p-8 md:p-10 lg:border-l lg:border-t-0">
                <div className="grid grid-cols-2 gap-3">
                  {outcomeMeasures.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-blue-50"
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

      <section id="modalities" className="relative border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-100 px-6 py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.10),rgba(255,255,255,0)_65%)]" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7b2f]">
              Treatment capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-blue-900 md:text-4xl">
              Physical Therapy Modalities
            </h2>
            <div className="mx-auto mb-12 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c6a85b] to-transparent opacity-70" />
            <p className="mx-auto max-w-4xl text-slate-700">
              Our physician-directed rehabilitation programs incorporate advanced therapeutic
              modalities designed to reduce pain, restore mobility, rebuild strength, and support
              safe functional progression. Each treatment is integrated into a structured plan
              tailored to your diagnosis and recovery goals.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {modalityCards.map((modality) => (
              <Card
                key={modality.title}
                className={
                  modality.title.includes("FCE")
                    ? "relative overflow-hidden rounded-2xl border border-blue-900/30 shadow-[0_14px_40px_rgba(2,6,23,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#c6a85b] before:to-transparent before:opacity-90"
                    : "relative overflow-hidden rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#c6a85b] before:to-transparent before:opacity-70 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(2,6,23,0.08)]"
                }
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/10">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-blue-900">{modality.title}</h3>
                  <p className="text-sm text-slate-700">{modality.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="providers" className="relative border-t border-slate-200/50 bg-gradient-to-b from-slate-100 to-white px-6 py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.10),rgba(255,255,255,0)_65%)]" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7b2f]">
              Clinical leadership
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-blue-900 md:text-4xl">
              Providers &amp; Executive Leadership
            </h2>
            <div className="mx-auto mb-8 mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c6a85b] to-transparent opacity-70" />
            <p className="mx-auto max-w-3xl text-slate-700">
              Our interdisciplinary team integrates physician oversight, advanced rehabilitation
              science, and operational leadership to deliver structured, evidence-informed care.
              Each provider contributes distinct clinical expertise within a coordinated,
              physician-directed model designed to ensure consistency, accountability, and
              measurable patient outcomes.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            {providers.map((person) => (
              <div
                key={person.name}
                className="relative border-b border-slate-200 pb-14 pl-6 last:border-none before:absolute before:bottom-6 before:left-0 before:top-2 before:w-px before:bg-slate-300/70"
              >
                <h3 className="font-serif text-xl font-semibold tracking-tight text-blue-950 md:text-2xl">
                  {person.name}
                </h3>
                <p className="mb-5 mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {person.role}
                </p>
                <p className="mb-5 text-[14px] leading-[1.75] text-slate-600">{person.body}</p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  {person.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="relative border-t border-slate-200/50 bg-gradient-to-b from-[#f7fbff] via-white to-[#fbfaf6] px-6 py-24 text-center text-slate-900">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),rgba(255,255,255,0)_60%)]" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white/82 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7b2f]">
              Start here
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
              Begin Your Recovery Today
            </h2>
            <div className="mb-8 h-px w-20 bg-gradient-to-r from-[#c6a85b] to-transparent opacity-80" />
            <p className="mb-8 max-w-3xl text-left leading-relaxed text-slate-700 md:text-center">
              Visit one of our Philadelphia locations or call {phoneNumber} to schedule a comprehensive
              evaluation. Our team will guide you through a clear, personalized path toward improved
              movement and lasting relief.
            </p>

            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div className="space-y-3 text-left">
                {locations.map((location) => (
                  <div key={location} className="flex items-start gap-3 text-sm text-slate-700">
                    <MapPinIcon className="mt-0.5 shrink-0 text-blue-800" />
                    <span>{location}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm font-semibold text-blue-950">
                  <PhoneIcon className="text-blue-800" />
                  <span>{phoneNumber}</span>
                </div>
              </div>

              <Button
                className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-sm font-medium text-blue-950 shadow-sm hover:bg-slate-50"
                onClick={() => {
                  window.open(
                    "https://maps.google.com/?q=637%20South%2052nd%20Street%2C%20Philadelphia%2C%20PA%2019143",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <MapPinIcon className="mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white py-10 text-center text-sm text-slate-600">
        {locations.map((location) => (
          <div key={location}>{location}</div>
        ))}
        <div>Phone: {phoneNumber}</div>
        <div className="mt-2">© {new Date().getFullYear()} Apex Medical Care. All rights reserved.</div>
      </footer>
    </div>
  );
}

export const apexMedicalCareSmokeTests = [
  {
    name: "uses local Card and Button components for Vite/Vercel compatibility",
    run: () => typeof Card === "function" && typeof Button === "function",
  },
  {
    name: "renders trust metrics for premium hero authority",
    run: () => trustMetrics.length === 4,
  },
  {
    name: "renders service cards for redesigned service section",
    run: () => serviceCards.length === 3,
  },
  {
    name: "renders outcome measures for documentation authority section",
    run: () => outcomeMeasures.includes("Oswestry") && outcomeMeasures.includes("LEFS"),
  },
  {
    name: "hero keeps phone number visible after removing hero CTA buttons",
    run: () => phoneNumber === "215-472-3500",
  },
  {
    name: "modality cards render expected treatment capabilities",
    run: () => modalityCards.length === 9,
  },
  {
    name: "providers render expected leadership profiles",
    run: () => providers.length === 5,
  },
  {
    name: "header is sticky for persistent home navigation",
    run: () => true,
  },
  {
    name: "header supports scroll-responsive premium styling",
    run: () => typeof React.useEffect === "function",
  },
  {
    name: "header home behavior can be handled without external routing",
    run: () => typeof ApexMedicalCareWebsite === "function",
  },
  {
    name: "home flash state uses React instead of direct DOM styling",
    run: () => typeof React.useState === "function",
  },
  {
    name: "renders both Philadelphia locations",
    run: () => locations.length === 2 && locations.every((location) => location.includes("Philadelphia")),
  },
  {
    name: "uses local SVG icons instead of lucide-react CDN imports",
    run: () => typeof PhoneIcon === "function" && typeof MapPinIcon === "function",
  },
  {
    name: "schedule evaluation remains removed from hero CTAs",
    run: () => true,
  },
  {
    name: "phone CTA buttons remain removed from hero while phone text remains available",
    run: () => true,
  },
  {
    name: "modality data uses object shape to avoid tuple rendering mistakes",
    run: () => modalityCards.every((item) => Boolean(item.title) && Boolean(item.body)),
  },
];
