import {
  ShieldCheck, FlaskConical, Truck, Award, HeartPulse, Microscope,
  ArrowRight, CheckCircle2, Pill, Star, Users, Building2, Mail, Phone,
  Target, Eye, Heart, Compass, Megaphone, Handshake, Factory, PackageCheck,
  ClipboardCheck, BadgeCheck, GraduationCap, Sparkles, FileText, Download,
  MapPin, Send, AlertCircle,
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
  "target": Target,
  "eye": Eye,
  "heart": Heart,
  "compass": Compass,
  "megaphone": Megaphone,
  "handshake": Handshake,
  "factory": Factory,
  "package-check": PackageCheck,
  "clipboard-check": ClipboardCheck,
  "badge-check": BadgeCheck,
  "graduation-cap": GraduationCap,
  "sparkles": Sparkles,
  "file-text": FileText,
  "download": Download,
  "map-pin": MapPin,
  "send": Send,
  "alert-circle": AlertCircle,
};

export function resolveIcon(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return iconMap[name];
}
