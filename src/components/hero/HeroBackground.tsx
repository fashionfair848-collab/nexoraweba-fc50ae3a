import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Subtle gradient orb - right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#4A90E2]/10 blur-[120px]"
      />
      
      {/* Secondary orb - left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#1a2332]/20 blur-[100px]"
      />
      
      {/* Subtle grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#4A90E2 1px, transparent 1px), linear-gradient(90deg, #4A90E2 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroBackground;
