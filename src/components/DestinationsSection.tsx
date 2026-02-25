import { motion } from "framer-motion";

const destinations = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Singapore", flag: "🇸🇬" },
];

const DestinationsSection = () => (
  <section className="py-16 lg:py-24 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Destinations</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">Study Abroad Destinations</h2>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="bg-card rounded-xl p-4 text-center shadow-card cursor-pointer hover:shadow-card-hover transition-shadow"
          >
            <span className="text-4xl block mb-2">{d.flag}</span>
            <span className="text-sm font-semibold text-card-foreground">{d.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsSection;
