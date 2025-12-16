import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Subtle animated gradient orb - positioned to side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"
      />
      
      {/* Secondary orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
      />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              y: Math.random() * 100,
              x: Math.random() * 100 + "%"
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [Math.random() * 100, -100],
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ left: `${Math.random() * 100}%`, top: `${60 + Math.random() * 40}%` }}
          />
        ))}
      </div>
      
      {/* Subtle grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroBackground;
