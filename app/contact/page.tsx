import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import PartnerSection from "@/components/contact/PartnerSection";
import InquirySection from "@/components/contact/InquirySection";
import AccessibilityNote from "@/components/contact/AccessibilityNote";
import ContactFooter from "@/components/contact/ContactFooter";

export const metadata: Metadata = {
  title: "Contact & Partner | Tɛkyerɛma Pa",
  description:
    "Get in touch with the Tɛkyerɛma Pa hackathon team — general inquiries, corporate sponsorship, academic collaboration, and community partnerships.",
};

export default function ContactPage() {
  return (
    <div
      data-theme="editions"
      className="min-h-screen bg-background text-on-background font-body-md text-body-md"
    >
      <div
        data-theme="contact"
        className="selection:bg-primary-fixed selection:text-on-primary-fixed"
      >
        <TopNav variant="contact" />
        <main className="pt-32 pb-section-gap">
          <ContactHero />
          <ContactInfo />
          <PartnerSection />
          <InquirySection />
          <AccessibilityNote />
        </main>
        <ContactFooter />
      </div>
    </div>
  );
}
