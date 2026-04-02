import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, MapPin, Building, TrendingUp, Star, Users, Clock, Shield, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

interface LocationEntry {
  city: string;
  state: string;
  marketSize: string;
  projects: string;
  activeClients: string;
  highlights: string[];
  description: string;
  faqs: { q: string; a: string }[];
  keyFeatures: { title: string; desc: string }[];
  geoRegion: string;
  geoPosition: string;
  ratingValue?: string;
  ratingCount?: string;
}

const locationData: Record<string, LocationEntry> = {
  india: {
    city: "India",
    state: "",
    marketSize: "₹4.2T",
    projects: "500+",
    activeClients: "120+",
    highlights: [
      "Largest construction management platform in India",
      "Active across 25+ states and union territories",
      "Support for all Indian regulatory frameworks",
      "Offline mode for remote and rural construction sites",
      "Local-language support for foremen and workers",
    ],
    description: "Infrakaart is India's leading AI-powered construction management software, built specifically for the unique challenges of Indian infrastructure projects — from metro rail corridors to highway widening to commercial towers.",
    faqs: [
      { q: "What is the best construction management software in India?", a: "Infrakaart is India's leading AI-powered construction management platform, used by 120+ clients across 25+ states for real-time project monitoring, workforce tracking, and cost optimization." },
      { q: "How does Infrakaart help Indian construction companies?", a: "Infrakaart provides real-time site intelligence, AI-powered delay prediction, workforce compliance tracking, and cost overrun alerts — all built for Indian regulatory frameworks and infrastructure challenges." },
      { q: "Is Infrakaart available across all Indian states?", a: "Yes. Infrakaart operates across 25+ Indian states and union territories, with support for local regulations, offline mode for remote sites, and multi-language support." },
    ],
    keyFeatures: [
      { title: "Pan-India Coverage", desc: "Deployed across 25+ states with region-specific compliance built in" },
      { title: "Offline Mode", desc: "Works at remote and rural sites without consistent internet" },
      { title: "Multi-Language", desc: "Hindi, Telugu, Tamil, Kannada, and more for ground-level workers" },
      { title: "AI Delay Prediction", desc: "Predict project delays 14 days in advance with ML models" },
    ],
    geoRegion: "IN",
    geoPosition: "20.5937;78.9629",
    ratingValue: "4.9",
    ratingCount: "214",
  },
  hyderabad: {
    city: "Hyderabad",
    state: "Telangana",
    marketSize: "₹42,000Cr",
    projects: "80+",
    activeClients: "22",
    highlights: [
      "Active across Hyderabad Metro, Outer Ring Road projects",
      "Integrated with Telangana construction regulatory portal",
      "Support for Telugu-language site operations",
      "Real-time monsoon risk monitoring for Musi river projects",
    ],
    description: "Hyderabad's construction sector is booming with IT corridor expansion, metro phase 2, and large-scale residential development. Infrakaart is the platform of choice for Hyderabad's top construction companies.",
    faqs: [
      { q: "What is the best construction software in Hyderabad?", a: "Infrakaart is Hyderabad's top-rated AI construction management platform, actively used on Hyderabad Metro, ORR projects, and major residential towers across Telangana." },
      { q: "Does Infrakaart support Telangana construction regulations?", a: "Yes. Infrakaart is integrated with the Telangana construction regulatory portal and provides automated compliance alerts for all HMDA and GHMC requirements." },
      { q: "How does Infrakaart handle monsoon risks in Hyderabad?", a: "Infrakaart includes real-time weather monitoring with Musi river flood alerts, monsoon risk windows, and automated site suspension recommendations to protect workers and equipment." },
    ],
    keyFeatures: [
      { title: "Metro Project Tracking", desc: "Dedicated module for Hyderabad Metro Phase 2 real-time progress" },
      { title: "Telangana Compliance", desc: "HMDA, GHMC, and RERA compliance built-in and auto-updated" },
      { title: "Telugu Language UI", desc: "Full platform support in Telugu for site supervisors and foremen" },
      { title: "Monsoon Risk Alerts", desc: "Musi river level monitoring with work suspension recommendations" },
    ],
    geoRegion: "IN-TG",
    geoPosition: "17.3850;78.4867",
    ratingValue: "4.9",
    ratingCount: "48",
  },
  nellore: {
    city: "Nellore",
    state: "Andhra Pradesh",
    marketSize: "₹8,200Cr",
    projects: "28+",
    activeClients: "9",
    highlights: [
      "Tracking Nellore Port expansion and NHDP projects",
      "APIIC industrial zone project monitoring",
      "Integration with AP RERA for compliance reporting",
      "Aquaculture zone construction risk alerts",
      "Support for Telugu-speaking field teams",
    ],
    description: "Nellore is emerging as a key infrastructure hub in Andhra Pradesh with port expansion, industrial corridors, and highway projects. Infrakaart brings AI-powered construction intelligence to Nellore's rapidly growing project landscape.",
    faqs: [
      { q: "What is the best construction management software in Nellore?", a: "Infrakaart is the leading construction management platform in Nellore, used for tracking port expansion, NHDP projects, and APIIC industrial corridor development in the region." },
      { q: "Does Infrakaart work for Nellore construction projects?", a: "Yes. Infrakaart is active in Nellore with support for AP RERA compliance, Telugu-language operations, and specialized tools for coastal and aquaculture-adjacent construction sites." },
      { q: "How can construction companies in Nellore benefit from Infrakaart?", a: "Construction companies in Nellore can use Infrakaart to track real-time project progress, manage workforce compliance, predict delays, and optimize costs across all active sites in the region." },
    ],
    keyFeatures: [
      { title: "Port Project Monitoring", desc: "Real-time tracking of Nellore Port expansion and cargo terminal projects" },
      { title: "AP RERA Compliance", desc: "Automated RERA filing support and compliance alerts for Andhra Pradesh" },
      { title: "Coastal Site Alerts", desc: "Aquaculture zone and cyclone risk monitoring for coastal construction" },
      { title: "Telugu Language Support", desc: "Full platform in Telugu for ground-level workforce management" },
    ],
    geoRegion: "IN-AP",
    geoPosition: "14.4426;79.9865",
    ratingValue: "4.8",
    ratingCount: "19",
  },
  bangalore: {
    city: "Bangalore",
    state: "Karnataka",
    marketSize: "₹55,000Cr",
    projects: "75+",
    activeClients: "20",
    highlights: [
      "Namma Metro Phase 2 and Phase 3 project monitoring",
      "BBMP and BDA compliance integration",
      "Tech corridor infrastructure tracking across Whitefield and Electronic City",
      "Underground utility mapping for Bangalore's dense urban construction",
      "Traffic impact analysis for CBD projects",
    ],
    description: "Bangalore's tech-driven growth is creating unprecedented construction demand across residential, commercial, and infrastructure sectors. Infrakaart serves Bangalore's construction industry with AI-powered delay prediction and real-time site intelligence.",
    faqs: [
      { q: "What is the best construction software in Bangalore?", a: "Infrakaart is Bangalore's leading AI construction management software, actively used on Namma Metro projects, major tech corridor infrastructure, and residential towers across Bengaluru." },
      { q: "Does Infrakaart support BBMP and BDA compliance in Bangalore?", a: "Yes. Infrakaart has built-in BBMP and BDA compliance tools with automated permit tracking, occupancy certificate reminders, and real-time regulatory alert dashboards." },
      { q: "How does Infrakaart help tech corridor construction in Bangalore?", a: "Infrakaart provides real-time coordination for Whitefield, Electronic City, and Outer Ring Road corridor projects including underground utility mapping, traffic impact tracking, and multi-contractor coordination." },
    ],
    keyFeatures: [
      { title: "Metro Phase Tracking", desc: "Namma Metro Phase 2 & 3 milestone and progress dashboards" },
      { title: "BBMP/BDA Compliance", desc: "Automated permit tracking and regulatory deadline alerts" },
      { title: "Tech Corridor Ops", desc: "Multi-site coordination for Whitefield and Electronic City projects" },
      { title: "Underground Mapping", desc: "Utility conflict detection for dense urban construction zones" },
    ],
    geoRegion: "IN-KA",
    geoPosition: "12.9716;77.5946",
    ratingValue: "4.9",
    ratingCount: "57",
  },
  bengaluru: {
    city: "Bengaluru",
    state: "Karnataka",
    marketSize: "₹55,000Cr",
    projects: "75+",
    activeClients: "20",
    highlights: [
      "Namma Metro Phase 2 project monitoring",
      "Tech corridor infrastructure tracking",
      "BBMP project compliance integration",
      "Underground utility mapping for dense urban projects",
    ],
    description: "Bengaluru's tech-driven growth is creating unprecedented construction demand. Infrakaart serves Bengaluru's infrastructure sector with AI-powered delay prediction and real-time site intelligence.",
    faqs: [
      { q: "What is the best construction software in Bengaluru?", a: "Infrakaart is Bengaluru's leading AI construction management platform, actively used on Namma Metro, BBMP projects, and major tech corridor infrastructure." },
      { q: "Does Infrakaart support BBMP compliance in Bengaluru?", a: "Yes. Infrakaart has full BBMP and BDA compliance integration with automated permit tracking and real-time regulatory alerts for all Bengaluru construction projects." },
      { q: "How does Infrakaart help Bengaluru construction companies?", a: "Infrakaart gives Bengaluru contractors real-time site dashboards, AI delay prediction, workforce compliance tracking, and cost overrun alerts across all active project sites." },
    ],
    keyFeatures: [
      { title: "Metro Project Tracking", desc: "Namma Metro Phase 2 milestone and progress dashboards" },
      { title: "BBMP Compliance", desc: "Automated permit tracking and regulatory deadline alerts" },
      { title: "Tech Corridor Ops", desc: "Infrastructure coordination for Whitefield and Electronic City" },
      { title: "Underground Mapping", desc: "Utility conflict detection for dense urban construction" },
    ],
    geoRegion: "IN-KA",
    geoPosition: "12.9716;77.5946",
    ratingValue: "4.9",
    ratingCount: "57",
  },
  mumbai: {
    city: "Mumbai",
    state: "Maharashtra",
    marketSize: "₹85,000Cr",
    projects: "120+",
    activeClients: "35",
    highlights: [
      "Coastal Construction Zone regulatory compliance built-in",
      "Mumbai Metro and Coastal Road project tracking",
      "CRZ (Coastal Regulation Zone) alert integration",
      "High-rise structural monitoring with IoT sensors",
    ],
    description: "Mumbai's infrastructure boom — from Coastal Road to Metro Line 3 — demands world-class project intelligence. Infrakaart's platform is trusted by Maharashtra's leading contractors for multi-site, high-stakes urban construction.",
    faqs: [
      { q: "What is the best construction management software in Mumbai?", a: "Infrakaart is Mumbai's top-rated construction platform, trusted by Maharashtra's leading contractors for real-time monitoring of Mumbai Metro, Coastal Road, and high-rise projects." },
      { q: "Does Infrakaart support CRZ compliance in Mumbai?", a: "Yes. Infrakaart has built-in Coastal Regulation Zone (CRZ) compliance alerts and coastal construction monitoring for all Mumbai projects near the shoreline." },
      { q: "Can Infrakaart handle high-rise construction in Mumbai?", a: "Infrakaart supports structural monitoring for high-rise projects with IoT sensor integration, floor-wise progress tracking, and compliance alerts for MCGM and Maharashtra RERA." },
    ],
    keyFeatures: [
      { title: "CRZ Compliance", desc: "Coastal Regulation Zone alerts and coastal construction monitoring" },
      { title: "Metro Line Tracking", desc: "Real-time progress dashboards for Mumbai Metro Lines" },
      { title: "High-Rise Monitoring", desc: "Floor-wise progress tracking with IoT structural sensor feeds" },
      { title: "MCGM Integration", desc: "Automated compliance alerts for MCGM and RERA requirements" },
    ],
    geoRegion: "IN-MH",
    geoPosition: "19.0760;72.8777",
    ratingValue: "4.9",
    ratingCount: "71",
  },
  delhi: {
    city: "Delhi",
    state: "Delhi NCR",
    marketSize: "₹68,000Cr",
    projects: "95+",
    activeClients: "28",
    highlights: [
      "DMRC integration for Delhi Metro project tracking",
      "NHAI highway project monitoring across NCR",
      "Real-time air quality compliance monitoring",
      "Smart city project tracking for Delhi Smart City Mission",
    ],
    description: "Delhi NCR's massive infrastructure development — from RRTS to airport expansion — requires sophisticated project intelligence. Infrakaart brings AI-powered monitoring to Delhi's most complex construction projects.",
    faqs: [
      { q: "What is the best construction software in Delhi?", a: "Infrakaart is Delhi NCR's leading AI construction platform, actively used on DMRC Metro projects, NHAI highway expansion, and airport terminal development." },
      { q: "Does Infrakaart work with DMRC projects in Delhi?", a: "Yes. Infrakaart has DMRC integration for real-time Delhi Metro project tracking including civil works, system installation, and station finishing milestones." },
      { q: "How does Infrakaart handle air quality compliance in Delhi?", a: "Infrakaart monitors real-time AQI levels at construction sites and triggers automated compliance alerts when dust emission thresholds are exceeded under DPCC guidelines." },
    ],
    keyFeatures: [
      { title: "DMRC Integration", desc: "Real-time Delhi Metro milestone and civil works dashboards" },
      { title: "Air Quality Monitoring", desc: "AQI tracking and DPCC compliance alerts for Delhi sites" },
      { title: "NHAI Highway Tracking", desc: "Multi-stretch highway project management across NCR" },
      { title: "Smart City Module", desc: "Delhi Smart City Mission project tracking and reporting" },
    ],
    geoRegion: "IN-DL",
    geoPosition: "28.6139;77.2090",
    ratingValue: "4.8",
    ratingCount: "62",
  },
  "andhra-pradesh": {
    city: "Andhra Pradesh",
    state: "Andhra Pradesh",
    marketSize: "₹28,000Cr",
    projects: "45+",
    activeClients: "14",
    highlights: [
      "Amaravati Capital Region development tracking",
      "AP infrastructure corridor project monitoring",
      "Integration with AP government project portal",
      "Rural construction support with offline mode",
    ],
    description: "Andhra Pradesh's rapid infrastructure development, including the Amaravati capital region and coastal corridor, makes it one of India's fastest-growing construction markets. Infrakaart serves AP's contractors with purpose-built intelligence.",
    faqs: [
      { q: "What is the best construction software in Andhra Pradesh?", a: "Infrakaart is Andhra Pradesh's leading construction management platform, used across Amaravati Capital Region, port projects, and major highway corridors." },
      { q: "Does Infrakaart support AP RERA compliance?", a: "Yes. Infrakaart provides automated AP RERA filing support, compliance dashboards, and deadline alerts for all registered construction projects in Andhra Pradesh." },
      { q: "How does Infrakaart help Andhra Pradesh construction companies?", a: "Infrakaart provides AP contractors with real-time progress tracking, workforce management, cost optimization, and regulatory compliance tools tailored to AP's infrastructure priorities." },
    ],
    keyFeatures: [
      { title: "Amaravati Tracking", desc: "Capital Region project monitoring with government portal integration" },
      { title: "AP RERA Compliance", desc: "Automated RERA filing and compliance alert dashboards" },
      { title: "Coastal Construction", desc: "Shoreline and port project zone compliance monitoring" },
      { title: "Telugu Language UI", desc: "Full platform in Telugu for field operations" },
    ],
    geoRegion: "IN-AP",
    geoPosition: "15.9129;79.7400",
    ratingValue: "4.8",
    ratingCount: "31",
  },
  vijayawada: {
    city: "Vijayawada",
    state: "Andhra Pradesh",
    marketSize: "₹12,500Cr",
    projects: "32+",
    activeClients: "10",
    highlights: [
      "Vijayawada-Amaravati corridor project tracking",
      "Krishna river infrastructure monitoring",
      "AP RERA compliance integration",
      "Telugu language support for field teams",
      "Cyclone preparedness alerts for AP coast projects",
    ],
    description: "Vijayawada is central to Andhra Pradesh's infrastructure vision with proximity to Amaravati and major highway connections. Infrakaart supports Vijayawada's construction sector with AI-powered project tracking and compliance tools.",
    faqs: [
      { q: "What is the best construction software in Vijayawada?", a: "Infrakaart is Vijayawada's leading construction management platform, used for tracking the Vijayawada-Amaravati corridor, Krishna river projects, and major urban infrastructure." },
      { q: "Does Infrakaart work for AP projects in Vijayawada?", a: "Yes. Infrakaart is fully integrated with AP government portals and provides RERA compliance, Telugu language UI, and real-time project monitoring for all Vijayawada construction projects." },
      { q: "How does Infrakaart handle cyclone risks for Vijayawada projects?", a: "Infrakaart provides real-time cyclone and flood alerts, automatic site suspension recommendations, and equipment protection protocols for AP coastal and river-adjacent construction." },
    ],
    keyFeatures: [
      { title: "Corridor Project Tracking", desc: "Vijayawada-Amaravati capital corridor project dashboards" },
      { title: "River Zone Monitoring", desc: "Krishna river level alerts and flood risk management" },
      { title: "AP RERA Integration", desc: "Automated compliance filing for Andhra Pradesh projects" },
      { title: "Cyclone Alerts", desc: "Real-time weather alerts and site suspension protocols" },
    ],
    geoRegion: "IN-AP",
    geoPosition: "16.5062;80.6480",
    ratingValue: "4.8",
    ratingCount: "24",
  },
  visakhapatnam: {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    marketSize: "₹18,000Cr",
    projects: "38+",
    activeClients: "12",
    highlights: [
      "Vizag Port expansion project monitoring",
      "Petroleum refinery infrastructure tracking",
      "Cyclone risk management for AP coastal sites",
      "APIIC industrial zone project compliance",
      "Telugu language support for site operations",
    ],
    description: "Visakhapatnam is Andhra Pradesh's industrial and port powerhouse. With major port expansion, refinery infrastructure, and smart city development underway, Infrakaart provides the real-time intelligence Vizag's contractors need.",
    faqs: [
      { q: "What is the best construction software in Visakhapatnam?", a: "Infrakaart is Visakhapatnam's leading AI construction platform, actively monitoring Vizag Port expansion, APIIC industrial zones, and major coastal infrastructure projects." },
      { q: "How does Infrakaart manage cyclone risks in Vizag?", a: "Infrakaart provides real-time Bay of Bengal cyclone tracking, automatic site closure recommendations, and equipment protection alerts for all coastal and port construction in Visakhapatnam." },
      { q: "Does Infrakaart support APIIC project compliance in Vizag?", a: "Yes. Infrakaart is integrated with APIIC project portals and provides automated compliance reporting for all industrial zone construction in the Visakhapatnam region." },
    ],
    keyFeatures: [
      { title: "Port Project Tracking", desc: "Vizag Port expansion milestones and real-time progress dashboards" },
      { title: "Cyclone Risk Management", desc: "Bay of Bengal storm alerts and automatic site suspension protocols" },
      { title: "APIIC Compliance", desc: "Industrial zone regulatory reporting and permit tracking" },
      { title: "Refinery Infrastructure", desc: "Specialized modules for petroleum and heavy industry construction" },
    ],
    geoRegion: "IN-AP",
    geoPosition: "17.6868;83.2185",
    ratingValue: "4.9",
    ratingCount: "29",
  },
  pune: {
    city: "Pune",
    state: "Maharashtra",
    marketSize: "₹38,000Cr",
    projects: "65+",
    activeClients: "18",
    highlights: [
      "Pune Metro real-time project tracking",
      "PMRDA and PMC compliance integration",
      "IT corridor infrastructure monitoring",
      "Hilly terrain construction risk management",
    ],
    description: "Pune's rapid growth as an IT and manufacturing hub is driving massive construction demand. Infrakaart helps Pune's top contractors manage metro projects, IT corridor infrastructure, and residential developments with precision.",
    faqs: [
      { q: "What is the best construction software in Pune?", a: "Infrakaart is Pune's top-rated construction management platform, used on Pune Metro projects, major IT corridor infrastructure, and large residential developments across PCMC and PMC limits." },
      { q: "Does Infrakaart support PMRDA and PMC compliance?", a: "Yes. Infrakaart integrates with PMRDA and PMC portals for automated permit tracking, occupancy certificate reminders, and real-time compliance dashboards." },
      { q: "How does Infrakaart handle hilly terrain construction in Pune?", a: "Infrakaart includes terrain-specific risk modules for Pune's hilly geography with slope stability alerts, monsoon landslide risk assessments, and geo-fencing for sensitive terrain zones." },
    ],
    keyFeatures: [
      { title: "Pune Metro Tracking", desc: "Real-time Pune Metro phase milestone and progress monitoring" },
      { title: "PMRDA Compliance", desc: "Automated permit and compliance alerts for Pune Metro Region" },
      { title: "Terrain Risk Module", desc: "Hilly terrain slope stability alerts and monsoon risk management" },
      { title: "IT Park Coordination", desc: "Multi-contractor coordination for Hinjewadi and Kharadi projects" },
    ],
    geoRegion: "IN-MH",
    geoPosition: "18.5204;73.8567",
    ratingValue: "4.8",
    ratingCount: "43",
  },
  chennai: {
    city: "Chennai",
    state: "Tamil Nadu",
    marketSize: "₹45,000Cr",
    projects: "72+",
    activeClients: "19",
    highlights: [
      "Chennai Metro Phase 2 project monitoring",
      "Port and industrial project tracking",
      "CMDA and DTCP compliance integration",
      "Coastal construction zone management",
      "Tamil language support for site teams",
    ],
    description: "Chennai is Tamil Nadu's infrastructure capital with metro expansion, port modernization, and large-scale residential projects. Infrakaart serves Chennai's construction sector with AI-powered project intelligence and compliance tools.",
    faqs: [
      { q: "What is the best construction software in Chennai?", a: "Infrakaart is Chennai's leading AI construction management platform, actively used on Chennai Metro Phase 2, Ennore Port infrastructure, and major residential projects across the city." },
      { q: "Does Infrakaart support CMDA and DTCP compliance in Chennai?", a: "Yes. Infrakaart integrates with CMDA and DTCP portals for automated building permit tracking, completion certificate reminders, and Tamil Nadu RERA compliance alerts." },
      { q: "How does Infrakaart handle coastal construction in Chennai?", a: "Infrakaart has built-in CRZ compliance monitoring, Bay of Bengal cyclone alerts, and coastal construction zone management for Chennai's shoreline and port adjacent projects." },
    ],
    keyFeatures: [
      { title: "Metro Phase Monitoring", desc: "Chennai Metro Phase 2 real-time progress and milestone dashboards" },
      { title: "CMDA/DTCP Compliance", desc: "Automated permit tracking and Tamil Nadu RERA compliance alerts" },
      { title: "Coastal Zone Management", desc: "CRZ monitoring and Bay of Bengal cyclone risk alerts" },
      { title: "Tamil Language UI", desc: "Full Tamil language support for field teams and site supervisors" },
    ],
    geoRegion: "IN-TN",
    geoPosition: "13.0827;80.2707",
    ratingValue: "4.9",
    ratingCount: "52",
  },
};

const slugToKey: Record<string, string> = {
  "construction-software-india": "india",
  "construction-software-hyderabad": "hyderabad",
  "construction-software-nellore": "nellore",
  "construction-software-bangalore": "bangalore",
  "construction-software-bengaluru": "bengaluru",
  "construction-software-mumbai": "mumbai",
  "construction-software-delhi": "delhi",
  "construction-software-andhra-pradesh": "andhra-pradesh",
  "construction-software-vijayawada": "vijayawada",
  "construction-software-visakhapatnam": "visakhapatnam",
  "construction-software-pune": "pune",
  "construction-software-chennai": "chennai",
};

export default function LocationPage() {
  const [rawPath] = useLocation();
  const slug = rawPath.replace(/^\//, "");
  const key = slugToKey[slug] || slug;
  const data = locationData[key];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-black text-[#EAB308] mb-4">404</div>
          <div className="text-[#A1A1AA] mb-4">Location not found</div>
          <Link href="/" className="text-[#EAB308] hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const locationLabel = data.state && data.state !== data.city ? `${data.city}, ${data.state}` : data.city;
  const urlKey = slug;

  const softwareAppSchema = {
    "@type": "SoftwareApplication",
    "name": `Infrakaart — #1 Construction Management Software ${locationLabel}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": data.description,
    "url": `https://infrakaart.com/${urlKey}`,
    "offers": {
      "@type": "Offer",
      "price": "200000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2027-12-31",
      "description": "Annual subscription per site. Free demo available."
    },
    "areaServed": {
      "@type": "Place",
      "name": locationLabel,
      "address": { "@type": "PostalAddress", "addressCountry": "IN", "addressRegion": data.state || "India" }
    },
    ...(data.ratingValue ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": data.ratingValue,
        "ratingCount": data.ratingCount,
        "bestRating": "5",
        "worstRating": "1"
      }
    } : {})
  };

  const localBusinessSchema = {
    "@type": "SoftwareApplication",
    "@id": `https://infrakaart.com/${urlKey}#software`,
    "name": `Infrakaart Construction Software — ${locationLabel}`,
    "description": `AI-powered construction management platform serving ${locationLabel}. Real-time workforce tracking, project delay prediction, and cost optimization.`,
    "url": `https://infrakaart.com/${urlKey}`,
    "sameAs": ["https://infrakaart.com", "https://twitter.com/infrakaart"],
    "brand": {
      "@type": "Brand",
      "name": "Infrakaart",
      "url": "https://infrakaart.com"
    },
    "provider": {
      "@type": "Organization",
      "name": "Infrakaart Technologies Pvt. Ltd.",
      "url": "https://infrakaart.com",
      "logo": { "@type": "ImageObject", "url": "https://infrakaart.com/logo.png" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@infrakaart.com",
        "availableLanguage": ["English", "Hindi", "Telugu", "Tamil", "Kannada"]
      }
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://infrakaart.com" },
      { "@type": "ListItem", "position": 2, "name": "Construction Management Software", "item": "https://infrakaart.com/construction-management-software" },
      { "@type": "ListItem", "position": 3, "name": `Construction Software ${data.city}`, "item": `https://infrakaart.com/${urlKey}` }
    ]
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `https://infrakaart.com/${urlKey}#webpage`,
    "url": `https://infrakaart.com/${urlKey}`,
    "name": `#1 Construction Management Software ${locationLabel} | Infrakaart`,
    "description": `Best AI-powered construction software in ${data.city}. Real-time project tracking, workforce management & cost optimization. Trusted by ${data.activeClients} companies. Book a free demo.`,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://infrakaart.com/#website" },
    "about": { "@id": `https://infrakaart.com/${urlKey}#software` },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split("T")[0]
  };

  const otherLocations = Object.entries(locationData).filter(([k]) => k !== key);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <SEOHead
        title={`#1 Construction Management Software ${locationLabel} | Infrakaart`}
        description={`Best AI-powered construction software in ${data.city}. Real-time project tracking, workforce management & cost optimization. Trusted by ${data.activeClients} companies. Book a free demo.`}
        canonical={`/${urlKey}`}
        keywords={`construction software ${data.city}, construction management ${data.city}, best construction app ${data.city}, AI construction platform ${data.city}, project management ${data.city}, infrastructure software ${data.state || "India"}, construction ERP ${data.city}`}
        schemas={[softwareAppSchema, localBusinessSchema, faqSchema, breadcrumbSchema, webPageSchema]}
        geoRegion={data.geoRegion}
        geoPlacename={locationLabel}
        geoPosition={data.geoPosition}
        articleModified={new Date().toISOString().split("T")[0]}
      />

      <Navbar />

      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative py-20 border-b border-white/10 overflow-hidden grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EAB308]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-8 font-mono">
              <Link href="/" className="hover:text-[#EAB308] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/construction-management-software" className="hover:text-[#EAB308] transition-colors">Construction Software</Link>
              <ChevronRight size={12} />
              <span className="text-[#EAB308]">{locationLabel}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="flex items-center gap-2 bg-[#EAB308]/10 border border-[#EAB308]/30 px-3 py-1.5 text-xs font-mono text-[#EAB308] uppercase tracking-widest">
                <MapPin size={10} />
                {locationLabel}
              </div>
              <div className="bg-green-500/10 border border-green-500/30 px-3 py-1.5 text-xs font-mono text-green-400 uppercase tracking-widest">
                Active Region
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              #1 Construction Management Software{" "}
              <span className="text-[#EAB308]">{data.city}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-[#A1A1AA] max-w-2xl mb-10 leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/login"
                className="px-6 py-3 bg-[#EAB308] text-black font-bold uppercase text-sm tracking-wider hover:bg-[#FACC15] transition-colors flex items-center gap-2 yellow-glow"
              >
                Book Free Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/construction-management-software"
                className="px-6 py-3 border border-white/20 text-white font-medium uppercase text-sm tracking-wider hover:border-[#EAB308]/50 transition-colors"
              >
                View Platform
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {[
                { value: data.marketSize, label: "Market Size" },
                { value: data.projects, label: "Projects Tracked" },
                { value: data.activeClients, label: "Active Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="border border-white/10 bg-[#18181B] p-4"
                >
                  <div className="text-2xl font-black text-[#EAB308]">{stat.value}</div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features for this Location */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-3">Platform Capabilities</div>
            <h2 className="text-2xl font-black mb-10">
              Construction Software Features for {data.city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.keyFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] p-5 card-hover"
                >
                  <div className="w-8 h-8 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center mb-3">
                    <TrendingUp size={14} className="text-[#EAB308]" />
                  </div>
                  <div className="font-bold text-white text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-[#A1A1AA] leading-relaxed">{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights + Trust Signals */}
        <section className="py-16 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-3">Why {data.city}</div>
                <h2 className="text-2xl font-black mb-6">
                  Built for {data.city}'s Construction Market
                </h2>
                <ul className="space-y-3">
                  {data.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={16} className="text-[#EAB308] mt-0.5 shrink-0" />
                      <span className="text-[#A1A1AA] text-sm">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Clock, title: "14-Day Delay Prediction", desc: "AI models predict construction delays 2 weeks in advance, giving teams time to correct course before impact." },
                  { icon: Shield, title: "Compliance Automation", desc: "Never miss a regulatory deadline. Automated alerts for permits, inspections, and statutory filing dates." },
                  { icon: Users, title: "Workforce Intelligence", desc: "Track attendance, skills, and compliance for every worker on site in real time." },
                  { icon: Star, title: "Trusted by Top Contractors", desc: `${data.activeClients} companies in ${data.city} already manage their projects on Infrakaart.` },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white/10 bg-[#18181B] p-4 flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-[#EAB308]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white mb-1">{item.title}</div>
                      <div className="text-xs text-[#A1A1AA]">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Snippet Content */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black mb-6">
              What is Construction Management Software?
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              Construction management software is a digital platform that helps contractors, project managers, and developers plan, monitor, and control construction projects from start to finish. It centralizes project schedules, budgets, workforce data, and regulatory compliance into a single real-time dashboard — replacing spreadsheets and manual tracking.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed mb-10">
              AI-powered platforms like Infrakaart go further by predicting delays, flagging cost overruns before they happen, and automating compliance reporting — giving {data.city} contractors a significant competitive advantage on complex infrastructure and commercial projects.
            </p>

            <h2 className="text-2xl font-black mb-6">
              How does AI help construction in {data.city}?
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              Infrakaart's AI engine analyzes historical project data, weather patterns, supplier lead times, and real-time site conditions to surface actionable insights that human project managers cannot generate at scale. In {data.city}'s dynamic construction environment, this means fewer surprises, faster decisions, and measurably better project outcomes.
            </p>
          </div>
        </section>

        {/* FAQ Section — interactive accordion, targets featured snippets */}
        <section className="py-16 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-3">FAQ</div>
            <h2 className="text-2xl font-black mb-8">
              Frequently Asked Questions — Construction Software {data.city}
            </h2>
            <div className="space-y-2">
              {data.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-bold text-white text-sm pr-4 group-hover:text-[#EAB308] transition-colors">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={16} className="text-[#EAB308]" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-white/10">
                          <p className="text-sm text-[#A1A1AA] leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Additional SEO FAQ for featured snippets */}
            <div className="mt-6 space-y-2">
              {[
                { q: `How much does construction management software cost in ${data.city}?`, a: `Infrakaart plans for ${data.city} start at ₹2L per site per year. Enterprise plans for 10+ sites come with custom pricing. Most clients see 3.2x ROI within 12 months of deployment.` },
                { q: `Can Infrakaart work offline at ${data.city} construction sites?`, a: `Yes. Infrakaart's mobile app includes full offline mode — critical for ${data.city}'s remote and peri-urban construction sites. All data syncs automatically when connectivity is restored.` },
              ].map((faq, i) => {
                const idx = data.faqs.length + i;
                return (
                  <div key={idx} className="border border-white/10 bg-[#18181B] overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left group"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      aria-expanded={openFaq === idx}
                    >
                      <span className="font-bold text-white text-sm pr-4 group-hover:text-[#EAB308] transition-colors">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown size={16} className="text-[#EAB308]" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === idx && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-white/10">
                            <p className="text-sm text-[#A1A1AA] leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Get Started</div>
            <h2 className="text-3xl font-black mb-4">
              Bring AI to your {data.city} construction projects
            </h2>
            <p className="text-[#A1A1AA] mb-8 max-w-xl mx-auto">
              Join {data.activeClients} companies in {data.city} already using Infrakaart to deliver projects on time, on budget, and in compliance.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/login"
                className="px-8 py-3 bg-[#EAB308] text-black font-bold uppercase text-sm tracking-wider hover:bg-[#FACC15] transition-colors flex items-center gap-2 yellow-glow"
              >
                Book Free Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/investors"
                className="px-8 py-3 border border-white/20 text-white font-medium uppercase text-sm tracking-wider hover:border-[#EAB308]/50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Other Locations — internal linking */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-black mb-6">Infrakaart across India</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherLocations.slice(0, 8).map(([k, loc]) => {
                const locSlug = Object.entries(slugToKey).find(([, v]) => v === k)?.[0] || `construction-software-${k.replace("andhra-pradesh", "andhra-pradesh")}`;
                return (
                  <Link key={k} href={`/${locSlug}`} className="block group">
                    <div className="border border-white/10 bg-[#18181B] p-4 group-hover:border-[#EAB308]/30 transition-colors card-hover">
                      <div className="flex items-center gap-2 mb-1">
                        <Building size={12} className="text-[#EAB308]" />
                        <span className="font-bold text-white text-sm">{loc.city}</span>
                      </div>
                      <div className="text-xs text-[#A1A1AA]">{loc.projects} projects · {loc.activeClients} clients</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Explore Platform</div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/construction-management-software", label: "Construction Management Software" },
                { href: "/workforce-tracking-construction", label: "Workforce Tracking" },
                { href: "/blog", label: "Construction Tech Blog" },
                { href: "/investors", label: "Investor Overview" },
                { href: "/construction-software-india", label: "India Overview" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-[#A1A1AA] hover:text-[#EAB308] border border-white/10 px-3 py-1.5 hover:border-[#EAB308]/30 transition-colors">
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
