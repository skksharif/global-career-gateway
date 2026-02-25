import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Visa axsis made my visa and education loan process stress-free. Highly professional and transparent.",
    name: "Marinda Dilendira",
    location: "UK",
  },
  {
    text: "Got my education loan sanctioned within 48 hours! The team was incredibly supportive throughout the process.",
    name: "Rahul Sharma",
    location: "Canada",
  },
  {
    text: "Best forex rates and seamless documentation. I highly recommend their services to every student going abroad.",
    name: "Priya Venkatesh",
    location: "Australia",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">What Our Students Say</h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-card text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-lg text-card-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
          <p className="font-bold text-card-foreground">— {t.name}, <span className="text-secondary">{t.location}</span></p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-muted"}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
