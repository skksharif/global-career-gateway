import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const countries = ["UK", "USA", "Canada", "Australia", "Europe"];
const admissionStatuses = ["Not Applied", "Admit Received", "Offer Accepted"];
const intakes = ["Sep 2026", "Jan 2027"];
const loanAmounts = ["Up to ₹20L", "₹20L – ₹50L", "Above ₹50L"];

const bullets = [
  "Apply to 20+ banks in 2 minutes",
  "Loan sanctioned within 48 hours",
  "Savings up to ₹15,00,000",
  "Forex & Visa assistance included",
];

const HeroSection = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "",
    admissionStatus: "",
    intake: "",
    loanAmount: "",
  });

  const handleSubmit = () => {
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0ACountry: ${form.country}%0AAdmission Status: ${form.admissionStatus}%0AIntake: ${form.intake}%0ALoan Amount: ${form.loanAmount}`;
    const subject = encodeURIComponent("Education Loan & Abroad Admission Enquiry");
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  const handleWhatsApp = () => {
    const text = `Hi, I'd like to enquire about education loans.%0AName: ${form.name}%0APhone: ${form.phone}%0ACountry: ${form.country}%0AAdmission: ${form.admissionStatus}%0AIntake: ${form.intake}%0ALoan: ${form.loanAmount}`;
    window.open(`https://wa.me/919985925152?text=${text}`, "_blank");
  };

  const canProceed = step === 1 ? form.name && form.phone && form.country && form.admissionStatus : form.intake && form.loanAmount;

  return (
    <section id="home" className="relative bg-primary overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-15">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.85)]" />

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-4 lg:pt-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-green-brand text-sm font-semibold mb-6 border border-secondary/30">
              🎓 Trusted by 5,000+ Students
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-5">
              Abroad Education Loans starting at{" "}
              <span className="text-green-brand">8.33%*</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
              Get up to ₹1.5 Cr collateral-free education loans for global studies
            </p>

            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-brand flex-shrink-0" />
                  <span className="text-primary-foreground/90 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="text-base font-bold px-8 lg:hidden"
              onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Check Your Loan Eligibility <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right form */}
          <motion.div
            id="hero-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-xl shadow-form p-6 sm:p-8 lg:sticky lg:top-24"
          >
            <h2 className="text-xl font-bold text-card-foreground mb-1">Check Your Loan Eligibility</h2>
            <p className="text-muted-foreground text-sm mb-6">Takes less than a minute</p>

            {/* Progress */}
            <div className="flex gap-2 mb-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-secondary" : "bg-muted"}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-secondary" : "bg-muted"}`} />
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Destination Country</label>
                  <select
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Current Admission Status</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {admissionStatuses.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, admissionStatus: s })}
                        className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          form.admissionStatus === s
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-input bg-background text-muted-foreground hover:border-secondary/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="w-full font-bold text-base py-6"
                  disabled={!canProceed}
                  onClick={() => setStep(2)}
                >
                  Next Step <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Intake</label>
                  <div className="grid grid-cols-2 gap-2">
                    {intakes.map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setForm({ ...form, intake: i })}
                        className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          form.intake === i
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-input bg-background text-muted-foreground hover:border-secondary/50"
                        }`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Loan Amount</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {loanAmounts.map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setForm({ ...form, loanAmount: l })}
                        className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          form.loanAmount === l
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-input bg-background text-muted-foreground hover:border-secondary/50"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="w-full font-bold text-base py-6"
                  disabled={!canProceed}
                  onClick={handleSubmit}
                >
                  🔓 Unlock Your Loan Matches
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-semibold"
                  onClick={handleWhatsApp}
                >
                  Send via WhatsApp
                </Button>
                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-center"
                >
                  ← Back to Step 1
                </button>
              </div>
            )}

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">🔒 100% Secure</span>
              <span className="text-xs text-muted-foreground">⚡ Instant Results</span>
              <span className="text-xs text-muted-foreground">✅ No Spam</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
