"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ModalitiesSection } from "@/components/modalities-section"
import { ProvidersSection } from "@/components/providers-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileMenu } from "@/components/mobile-menu"
import { AppointmentModal } from "@/components/appointment-modal"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
        onBookAppointment={handleOpenAppointmentModal}
      />
      
      <main>
        <HeroSection onBookAppointment={handleOpenAppointmentModal} />
        <ServicesSection />
        <ModalitiesSection />
        <ProvidersSection />
        <ContactSection onBookAppointment={handleOpenAppointmentModal} />
      </main>

      <Footer />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onBookAppointment={handleOpenAppointmentModal}
      />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  )
}
