import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-3 lg:hidden shadow-form">
    <Button
      variant="secondary"
      className="w-full font-bold text-base py-5"
      onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
    >
      Check Your Loan Eligibility <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </div>
);

export default MobileStickyBar;
