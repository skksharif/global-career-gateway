import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What services do you offer?", a: "We offer comprehensive abroad education services including education loans, forex assistance, visa processing, university admissions, and documentation support for students planning to study overseas." },
  { q: "How much do education loans cost?", a: "Education loan interest rates start from 8.33% per annum. We partner with 20+ banks to help you find the most competitive rates based on your profile and destination." },
  { q: "What is the consultation process?", a: "Our process starts with a free assessment, followed by personalized guidance on university selection, visa filing, loan processing, and forex documentation — all handled by dedicated counselors." },
  { q: "Do you help with forex & visa together?", a: "Yes! We provide end-to-end support including visa processing, foreign exchange at the best rates, and all related documentation under one roof." },
  { q: "What is your success rate?", a: "We have a 98% visa approval success rate and have helped over 5,000 students secure education loans and admissions at top universities worldwide." },
];

const FAQSection = () => (
  <section className="py-16 lg:py-24 bg-surface">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">Frequently Asked Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border-none shadow-card px-6">
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
