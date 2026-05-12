import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

const locations = [
  "637 South 52nd Street, Philadelphia, PA 19143",
  "1335 West Tabor Road, Suite 305, Philadelphia, PA 19141",
]

const phoneNumber = "215-472-3500"
const emailAddress = "apexmedcarellc@gmail.com"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#modalities", label: "Physical Therapy" },
  { href: "#providers", label: "Providers" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Apex Medical Care
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Physician-led rehabilitation for injury recovery, pain-related movement limitations,
              and functional restoration in Philadelphia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              {locations.map((location) => (
                <div
                  key={location}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{location}</span>
                </div>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{emailAddress}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Apex Medical Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
