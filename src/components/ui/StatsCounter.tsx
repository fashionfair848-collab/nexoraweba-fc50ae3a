import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
}

interface StatsCounterProps {
  stats: Stat[];
  className?: string;
}

const Counter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * easeOut));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = ({ stats, className = "" }: StatsCounterProps) => {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300"
          >
            {Icon && (
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-primary" />
              </div>
            )}
            <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-2">
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
            <div className="text-muted-foreground text-sm">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCounter;