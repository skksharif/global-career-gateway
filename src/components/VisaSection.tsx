import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Plane, Building2, Users, Globe } from "lucide-react";

const visaTypes = [
  { icon: GraduationCap, title: "Student Visa", desc: "Study at top universities worldwide" },
  { icon: Briefcase, title: "Work Visa", desc: "Employment opportunities abroad" },
  { icon: Plane, title: "Tourist Visa", desc: "Explore destinations globally" },
  { icon: Building2, title: "Business Visa", desc: "International business travel" },
  { icon: Users, title: "PR Visa", desc: "Permanent residency pathways" },
  { icon: Globe, title: "Visit Visa", desc: "Visit family and friends abroad" },
];

const VisaSection = () => (
  <section id="visa" className="py-16 lg:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Visa Services</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">Visa Types & Eligibility</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {visaTypes.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-card rounded-xl p-5 lg:p-6 shadow-card text-center group cursor-pointer hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/15 transition-colors">
              <v.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="font-bold text-card-foreground mb-1">{v.title}</h3>
            <p className="text-xs text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisaSection;
