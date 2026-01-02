import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4 | 6;
  className?: string;
}

const FeatureGrid = ({ features, columns = 4, className = "" }: FeatureGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    6: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="h-full text-center group">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
              {feature.details && (
                <ul className="text-xs text-muted-foreground space-y-1 mt-4 pt-4 border-t border-border">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;