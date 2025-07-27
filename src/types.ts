import { HeartPulse, Moon, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export interface Feature  {
  title: string;
  description: string;
  icon: LucideIcon ;
};

export interface Testimonial  {
  name: string;
  feedback: string;
};
export interface Plan{
  plan: string,
  price: string,
  features: string[]
}
export const featureData: Feature[] = [
  {
    title: "Heart Rate Monitor",
    description: "Track your heart rate 24/7 with advanced sensors.",
    icon: HeartPulse,
  },
  {
    title: "Sleep Tracking",
    description: "Understand your sleep patterns and improve rest.",
    icon: Moon,
  },
  {
    title: "GPS & Activity Log",
    description: "Accurately track workouts, runs, and routes.",
    icon: MapPin,
  },
];

export const plans:Plan[] = [
  { plan: "Basic", price: "$99", features: ["Heart Rate Monitor", "Step Tracking"] },
  { plan: "Pro", price: "$149", features: ["All Basic Features", "Sleep Tracking", "GPS"] },
  { plan: "Elite", price: "$199", features: ["All Pro Features", "ECG Monitor", "Waterproof"] },
];

export const testimonials:Testimonial[] = [
  { name: "Sarah K.", feedback: "FitPulse completely transformed my workouts. Love the insights!" },
  { name: "James R.", feedback: "Amazing battery life and beautiful design. Highly recommend!" },
  { name: "Ayesha B.", feedback: "Tracks everything I need, and looks great on my wrist." },
];