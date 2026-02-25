import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(`New newsletter subscription from: ${email}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-8 lg:p-12 text-center"
        >
          <Mail className="w-10 h-10 text-green-brand mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-primary-foreground mb-2">Stay Updated</h2>
          <p className="text-primary-foreground/70 mb-6">Subscribe to get visa & abroad education updates</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-sm bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button type="submit" variant="secondary" className="font-bold px-6">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
