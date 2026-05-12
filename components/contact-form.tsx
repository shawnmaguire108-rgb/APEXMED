"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Simulate success (in real app, handle actual form submission)
    setStatus("success")
    
    // Reset form after success
    setTimeout(() => {
      setStatus("idle")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
          <p className="text-muted-foreground">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : status === "error" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-red-600" />
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Something went wrong</h4>
          <p className="text-muted-foreground mb-4">
            Please try again or call us directly at (215) 472-3500.
          </p>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Try Again
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full Name *</Label>
              <Input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(215) 555-0123"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email Address *</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-subject">Subject *</Label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            >
              <option value="">Select a subject</option>
              <option value="appointment">Appointment Inquiry</option>
              <option value="insurance">Insurance Question</option>
              <option value="services">Services Information</option>
              <option value="records">Medical Records Request</option>
              <option value="billing">Billing Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message *</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can we help you?"
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  )
}
