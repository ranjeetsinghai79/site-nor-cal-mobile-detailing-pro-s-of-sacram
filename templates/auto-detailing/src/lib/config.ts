import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Nor-Cal Mobile Detailing Pros",
    tagline: "Your Car Deserves The Best.",
    phone: "(916) 370-2451",
    phoneHref: "tel:+19163702451",
    email: "info@norcalmobiledetailingpros.com",
    address: "123 Main St",
    city: "Sacramento",
    serviceAreas: ["Northern Cali", "Sacramento"],
    license: "CA Detailing License #12345",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Interior Detailing", desc: "Deep cleaning and restoration for a fresh, new car feel inside.", urgent: false },
    { icon: "truck", title: "Exterior Detailing", desc: "Thorough wash, wax, and polish for a brilliant, showroom-ready finish.", urgent: false },
    { icon: "wrench", title: "Scratch Removal", desc: "Expert techniques to safely eliminate unsightly scratches and swirl marks.", urgent: false },
    { icon: "shield-check", title: "Ceramic Coating", desc: "Long-lasting paint protection, incredible gloss, and easy maintenance.", urgent: false },
    { icon: "droplets", title: "Water Spot Removal", desc: "Specialized treatment to remove stubborn water spots from all surfaces.", urgent: false },
    { icon: "star", title: "Headlight Restoration", desc: "Restore clarity and brightness to foggy headlights for improved visibility.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Sacramento", stars: 5, text: "Nor-Cal Mobile Detailing Pros did an amazing job on my SUV last week! It had been neglected for months, and they made it look brand new again. The interior detailing was meticulous, and the ceramic coating gave it an incredible shine. Worth every penny!" },
    { name: "Mark T.", location: "Roseville", stars: 5, text: "I called Nor-Cal for a quick exterior detail and scratch removal. They arrived on time, were very professional, and the results were fantastic. My car looks like it just rolled off the lot. I highly recommend their mobile service – so convenient!" },
    { name: "Jessica R.", location: "El Dorado Hills", stars: 5, text: "My boat was in desperate need of a good cleaning after a long season. Nor-Cal Mobile Detailing Pros tackled it with ease. The oxidation removal made a huge difference, and the deck looks pristine. I'm so impressed with their attention to detail and friendly service." }
  ],

  trustBadges: [
    "Licensed & Insured", "Mobile Service", "5-Star Rated", "Free Test Spot", "NATE Certified", "GAF Master Elite"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Vehicles Detailed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "truck", title: "Mobile Service", desc: "We come to you, wherever you are, for ultimate convenience." },
    { icon: "dollar-sign", title: "Fair & Transparent Pricing", desc: "Upfront quotes with no hidden fees, ensuring you get the best value." },
    { icon: "award", title: "Certified Professionals", desc: "Our detailers are highly trained and certified in the latest techniques." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We stand behind our work with a promise of complete customer satisfaction." },
    { icon: "clock", title: "Efficient & Timely", desc: "We work diligently to complete services promptly without compromising quality." },
    { icon: "sparkles", title: "Premium Products", desc: "Only the highest quality, safest products are used for superior results." }
  ],

  formServiceOptions: ["Interior Detailing", "Exterior Detailing", "Scratch Removal", "Ceramic Coating", "Water Spot Removal", "Headlight Restoration"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!