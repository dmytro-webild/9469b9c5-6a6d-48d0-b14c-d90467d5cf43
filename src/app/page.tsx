"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Aivora Labs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "glowing-orb",
      }}
      title="We Build AI Systems That Scale Businesses."
      description="Aivora Labs helps brands automate operations, capture leads, build AI assistants, and create modern digital experiences."
      tag="Next Generation AI Agency"
      buttons={[
        {
          text: "Book a Free Consultation",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-cyberpunk-neon-cityscape_23-2151966340.jpg",
          imageAlt: "futuristic tech background neon",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-background-flowing-particles_1048-14872.jpg",
          imageAlt: "futuristic tech background neon",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/neon-city-street_23-2151966339.jpg",
          imageAlt: "Neon city street",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-cyber-particles-background-with-shallow-depth-field_1048-13249.jpg",
          imageAlt: "3D render of an abstract cyber particles background with shallow depth of field",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/connecting-lines-dots-with-floating-particles_1048-12013.jpg",
          imageAlt: "connecting lines and dots with floating particles",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by 100+ Brands"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "AI Automation",
          description: "Automate complex business operations to save 120+ hours monthly.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/computer-education-sticker-part-3_534985-141.jpg",
            imageAlt: "3d ai automation icon",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/creative-process-concept-icons-set_98292-1706.jpg",
            imageAlt: "3d ai automation icon",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-cyberpunk-neon-cityscape_23-2151966340.jpg",
          imageAlt: "3d ai automation icon",
        },
        {
          title: "AI Chatbots",
          description: "Intelligent, human-like virtual agents for 24/7 customer support.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/chatbot-conversation-vectorart_78370-4107.jpg",
            imageAlt: "chat bot technology icon",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-drawing-wifi-internet_1134-225.jpg",
            imageAlt: "chat bot technology icon",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/illustration-hexagonal-figure-made-brown-gold-lights_181624-21212.jpg",
          imageAlt: "3d ai automation icon",
        },
        {
          title: "AI Voice Assistants",
          description: "Advanced voice interaction systems for modern commerce.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg",
            imageAlt: "voice assistant icon digital",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/smart-speaker-3d-vector-illustration-voice-control-digital-assistant-cartoon-style-isolated-white-background-modern-technology-artificial-intelligence-smart-home-concept_778687-734.jpg",
            imageAlt: "voice assistant icon digital",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/old-man-standing-office-with-laptop_1157-33379.jpg",
          imageAlt: "3d ai automation icon",
        },
      ]}
      showStepNumbers={false}
      title="Our AI Services"
      description="High-end automation solutions tailored for modern business."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "120+",
          title: "Hours Saved Monthly",
          items: [
            "Per average client",
            "Automated workflows",
          ],
        },
        {
          id: "2",
          value: "3X",
          title: "Lead Growth",
          items: [
            "Conversion optimization",
            "Data driven results",
          ],
        },
        {
          id: "3",
          value: "24/7",
          title: "Smart Support",
          items: [
            "Constant monitoring",
            "Always online",
          ],
        },
      ]}
      title="Why Choose Aivora Labs"
      description="Premium delivery, scalable AI solutions, and 24/7 support."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Fintech Workflow",
          price: "Saved 200hrs",
          imageSrc: "http://img.b2bpic.net/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg",
        },
        {
          id: "p2",
          name: "Retail Chatbot",
          price: "5X Leads",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-software-ui-pc-screen-apartment-office-desk_482257-122945.jpg",
        },
        {
          id: "p3",
          name: "Health CRM",
          price: "Increased ROI",
          imageSrc: "http://img.b2bpic.net/free-photo/flag-sign-right-side_187299-45945.jpg",
        },
        {
          id: "p4",
          name: "Logistics AI",
          price: "Scaling Systems",
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg",
        },
        {
          id: "p5",
          name: "E-commerce Voice",
          price: "Premium UX",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241197.jpg",
        },
        {
          id: "p6",
          name: "Marketing Automation",
          price: "3X Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/upload-icon-front-side_187299-45737.jpg",
        },
      ]}
      title="Case Studies"
      description="Proven results for ambitious brands."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "CEO",
          company: "TechStream",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/old-man-standing-office-with-laptop_1157-33379.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          role: "CTO",
          company: "CloudFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-15972.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Founder",
          company: "Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/manager-sitting-office_1098-22033.jpg",
        },
        {
          id: "4",
          name: "James L.",
          role: "Director",
          company: "GrowthX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",
        },
        {
          id: "5",
          name: "Sophie K.",
          role: "VP",
          company: "DigitalCore",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-using-laptop-tablet-same-time_482257-8141.jpg",
        },
      ]}
      title="Client Success"
      description="What industry leaders say about our work."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          title: "Starter",
          price: "$2,999",
          period: "/mo",
          features: [
            "3 AI Workflows",
            "Chatbot Basic",
            "Email Support",
          ],
          button: {
            text: "Get Started",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-futuristic-sci-fi-techno-background-with-lights-creating-cool-shapes_181624-27757.jpg",
          imageAlt: "3D rendering futuristic sci-fi techno background with lights creating cool shapes",
        },
        {
          id: "growth",
          title: "Growth",
          price: "$5,999",
          period: "/mo",
          features: [
            "10 AI Workflows",
            "Advanced Chatbots",
            "Priority Support",
            "Dashboard Access",
          ],
          button: {
            text: "Get Started",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-cyberpunk-neon-cityscape_23-2151966340.jpg",
          imageAlt: "3D rendering futuristic sci-fi techno background with lights creating cool shapes",
        },
        {
          id: "enterprise",
          title: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "Unlimited Workflows",
            "Full Custom Build",
            "Dedicated Architect",
            "24/7 Priority",
          ],
          button: {
            text: "Schedule Call",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/computer-education-sticker-part-3_534985-141.jpg",
          imageAlt: "3D rendering futuristic sci-fi techno background with lights creating cool shapes",
        },
      ]}
      title="Choose Your Path"
      description="Scaling automation solutions for every business size."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to Transform Your Business With AI?"
      buttons={[
        {
          text: "Schedule a Call",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Aivora Labs"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
