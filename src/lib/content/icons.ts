import {
  ShieldCheck, FlaskConical, Truck, Award, HeartPulse, Microscope,
  ArrowRight, CheckCircle2, Pill, Star, Users, Building2, Mail, Phone,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "flask-conical": FlaskConical,
  "truck": Truck,
  "award": Award,
  "heart-pulse": HeartPulse,
  "microscope": Microscope,
  "arrow-right": ArrowRight,
  "check-circle": CheckCircle2,
  "pill": Pill,
  "star": Star,
  "users": Users,
  "building": Building2,
  "mail": Mail,
  "phone": Phone,
};

export function resolveIcon(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return iconMap[name];
}
