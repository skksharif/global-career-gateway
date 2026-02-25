import { motion } from "framer-motion";
import { ClipboardCheck, Map, Landmark, FileText } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Assessment & Eligibility Check", desc: "We evaluate your profile and guide you on the best options" },
  { icon: Map, title: "Visa & Admission Guidance", desc: "Expert counseling for university selection and visa filing" },
  { icon: Landmark, title: "Education Loan Processing", desc: "Seamless loan applications across 20+ partnered banks" },
  { icon: FileText, title: "Forex & Documentation Support", desc: "Currency exchange and document preparation assistance" },
];

const ProcessSection = () => (
  <section className="py-16 lg:py-24 bg-primary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-green-brand uppercase tracking-wider">Our Process</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mt-2">How We Help You</h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
              <s.icon className="w-7 h-7 text-green-brand" />
            </div>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-secondary text-secondary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {i + 1}
            </span>
            <h3 className="font-bold text-primary-foreground mb-2 text-sm lg:text-base">{s.title}</h3>
            <p className="text-primary-foreground/60 text-xs lg:text-sm">{s.desc}</p>
            {i < 3 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-secondary/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
