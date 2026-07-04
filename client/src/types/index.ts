export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  score: string
  text: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}