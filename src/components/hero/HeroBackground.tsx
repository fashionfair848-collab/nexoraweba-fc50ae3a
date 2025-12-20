import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/3"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-[100px]"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/2 -translate-x-1/3"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-full h-full rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-[80px]"
        />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large hexagon outline */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-[10%] w-64 h-64"
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
          </motion.svg>
        </motion.div>

        {/* Medium hexagon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-32 left-[15%] w-40 h-40"
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <polygon
              points="50,10 85,30 85,70 50,90 15,70 15,30"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="0.8"
            />
          </motion.svg>
        </motion.div>

        {/* Small decorative circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, delay: 1 + i * 0.2 }}
            className="absolute rounded-full border border-primary/30"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              top: `${20 + i * 15}%`,
              right: `${5 + i * 8}%`,
            }}
          />
        ))}

        {/* Animated dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Gradient line accents */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/3 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent origin-right"
      />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroBackground;
