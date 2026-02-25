import { motion } from "framer-motion";
import { GraduationCap, ArrowRightLeft, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Abroad Education Loans",
    features: ["Collateral & Non-Collateral Loans", "Government & Private Banks", "Faster sanction & lower interest"],
  },
  {
    icon: ArrowRightLeft,
    title: "Forex Services",
    features: ["Best exchange rates", "Zero hidden charges", "Student-friendly remittance support"],
  },
  {
    icon: BookOpen,
    title: "Abroad Admissions",
    features: ["University shortlisting", "Application assistance", "Offer letter & SOP guidance"],
  },
];

const ServicesSection = () => (
  <section id="education-loans" className="py-16 lg:py-24 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">Three Core Pillars of Success</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-shadow group"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
              <s.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">{s.title}</h3>
            <ul className="space-y-2 mb-6">
              {s.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="font-semibold group-hover:border-secondary group-hover:text-secondary transition-colors">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
