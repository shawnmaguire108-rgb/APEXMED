"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  "Physician Evaluation",
  "Physical Therapy - Initial Evaluation",
  "Physical Therapy - Follow-up",
  "Functional Capacity Evaluation",
  "Workers' Compensation Evaluation",
  "Post-Surgical Rehabilitation",
]

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

const locations = [
  { name: "Roxborough", address: "501 Leverington Ave, Suite 103" },
  { name: "Bala Cynwyd", address: "Two Bala Plaza, Suite 300" },
]

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    preferredDate: "",
    preferredTime: "",
    insurance: "",
    referralSource: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Open email client with pre-filled data as backup
        window.open(result.mailtoLink, "_blank")
        
        setIsSubmitting(false)
        setIsSuccess(true)
        
        // Reset after showing success
        setTimeout(() => {
          setIsSuccess(false)
          setStep(1)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            location: "",
            preferredDate: "",
            preferredTime: "",
            insurance: "",
            referralSource: "",
            notes: "",
          })
          onClose()
        }, 3000)
      } else {
        throw new Error(result.error || "Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting appointment:", error)
      setIsSubmitting(false)
      // Fallback: open mailto directly
      const mailtoLink = `mailto:apexmedcarellc@gmail.com?subject=${encodeURIComponent(
        `Appointment Request - ${formData.firstName} ${formData.lastName}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}\nDate: ${formData.preferredDate}\nTime: ${formData.preferredTime}\nInsurance: ${formData.insurance}\nNotes: ${formData.notes}`
      )}`
      window.open(mailtoLink, "_blank")
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setStep(1)
        onClose()
      }, 3000)
    }
  }

  const canProceedStep1 = formData.firstName && formData.lastName && formData.email && formData.phone
  const canProceedStep2 = formData.service && formData.location && formData.preferredDate && formData.preferredTime

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Schedule an Appointment</h2>
              <p className="text-sm text-muted-foreground">Step {step} of 3</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-3 bg-muted/30">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Appointment Request Submitted</h3>
                <p className="text-muted-foreground">
                  We&apos;ll contact you within 24 hours to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Personal Information</h3>
                        <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(215) 555-0123"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance Provider</Label>
                      <Input
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        placeholder="e.g., Blue Cross Blue Shield"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Appointment Details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Appointment Details</h3>
                        <p className="text-sm text-muted-foreground">Choose your service and preferred time</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Location *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {locations.map((location) => (
                          <label
                            key={location.name}
                            className={`relative flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.location === location.name
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="location"
                              value={location.name}
                              checked={formData.location === location.name}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="font-medium text-foreground">{location.name}</span>
                            <span className="text-sm text-muted-foreground">{location.address}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="pl-10"
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full h-10 pl-10 pr-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            required
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Information */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Additional Information</h3>
                        <p className="text-sm text-muted-foreground">Help us prepare for your visit</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referralSource">How did you hear about us?</Label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select an option</option>
                        <option value="physician">Physician Referral</option>
                        <option value="insurance">Insurance Company</option>
                        <option value="attorney">Attorney Referral</option>
                        <option value="friend">Friend/Family</option>
                        <option value="search">Online Search</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Please share any relevant information about your condition, injury, or specific concerns..."
                        rows={4}
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <h4 className="font-medium text-foreground">Appointment Summary</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="text-foreground">{formData.firstName} {formData.lastName}</span>
                        <span className="text-muted-foreground">Service:</span>
                        <span className="text-foreground">{formData.service}</span>
                        <span className="text-muted-foreground">Location:</span>
                        <span className="text-foreground">{formData.location}</span>
                        <span className="text-muted-foreground">Date & Time:</span>
                        <span className="text-foreground">{formData.preferredDate} at {formData.preferredTime}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={step === 1 ? !canProceedStep1 : !canProceedStep2}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
