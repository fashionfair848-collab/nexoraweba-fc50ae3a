import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

const ProcessTimeline = ({ steps, className = "" }: ProcessTimelineProps) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isExpanded = expandedStep === index;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step Number & Icon - Center */}
              <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isExpanded
                      ? "bg-gradient-to-br from-primary to-accent text-white"
                      : "bg-card border-2 border-primary text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 md:w-[calc(50%-40px)] ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    isExpanded ? "ring-2 ring-primary/50" : ""
                  }`}
                  onClick={() => setExpandedStep(isExpanded ? null : index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground mt-1">
                        {step.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground mt-2">{step.description}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 pt-4 border-t border-border space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1 md:w-[calc(50%-40px)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;