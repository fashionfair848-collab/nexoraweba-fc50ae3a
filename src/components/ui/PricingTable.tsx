import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface PricingFeature {
  name: string;
  included: boolean | string;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
  className?: string;
}

const PricingTable = ({ plans, className = "" }: PricingTableProps) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className={className}>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-14 h-7 rounded-full transition-colors ${
            isYearly ? "bg-primary" : "bg-muted"
          }`}
        >
          <motion.div
            className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
            animate={{ left: isYearly ? "calc(100% - 24px)" : "4px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
          Yearly
          <span className="ml-2 text-xs text-primary font-semibold">Save 20%</span>
        </span>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative glass-card rounded-2xl p-6 lg:p-8 ${
              plan.popular ? "ring-2 ring-primary shadow-xl" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="text-center mb-6">
              <motion.div
                key={isYearly ? "yearly" : "monthly"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-baseline"
              >
                <span className="text-4xl font-display font-bold text-foreground">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground ml-2">/month</span>
              </motion.div>
              {isYearly && (
                <p className="text-xs text-primary mt-1">
                  Billed ${plan.yearlyPrice * 12} annually
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  {feature.included === true ? (
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  ) : feature.included === false ? (
                    <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included === false ? "text-muted-foreground/50" : "text-foreground"
                    }`}
                  >
                    {typeof feature.included === "string" ? feature.included : feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "glow" : "outline"}
              className="w-full"
              asChild
            >
              <Link to="/contact">{plan.ctaText || "Get Started"}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;