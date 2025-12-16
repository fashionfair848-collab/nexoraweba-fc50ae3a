import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Floating Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
      />
      
      {/* Animated Hexagon Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Hexagon */}
          <svg
            viewBox="0 0 200 200"
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
          >
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            
            {/* Outer Hexagon */}
            <motion.polygon
              points="100,10 180,55 180,145 100,190 20,145 20,55"
              fill="url(#hexGradient)"
              stroke="url(#strokeGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Inner Hexagon */}
            <motion.polygon
              points="100,40 150,70 150,130 100,160 50,130 50,70"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* N Letter */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Left stroke */}
              <rect x="70" y="70" width="8" height="60" fill="hsl(var(--primary))" rx="2" />
              {/* Middle stroke */}
              <rect x="96" y="80" width="8" height="40" fill="hsl(var(--primary))" rx="2" />
              {/* Right stroke */}
              <rect x="122" y="70" width="8" height="50" fill="hsl(var(--primary))" rx="2" />
              {/* Diagonal connectors */}
              <rect x="78" y="70" width="6" height="20" fill="hsl(var(--primary))" rx="2" transform="rotate(30, 78, 75)" />
              <rect x="116" y="105" width="6" height="20" fill="hsl(var(--primary))" rx="2" transform="rotate(-30, 116, 115)" />
            </motion.g>
          </svg>
          
          {/* Floating Small Hexagons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <HexagonDot className="absolute -top-10 -right-10 w-8 h-8" delay={0} />
            <HexagonDot className="absolute -bottom-5 -left-16 w-6 h-6" delay={0.2} />
            <HexagonDot className="absolute top-1/2 -right-20 w-4 h-4" delay={0.4} />
            <HexagonDot className="absolute -top-5 left-10 w-5 h-5" delay={0.3} />
            <HexagonDot className="absolute bottom-10 right-10 w-3 h-3" delay={0.5} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

const HexagonDot = ({ className, delay }: { className: string; delay: number }) => (
  <motion.svg
    viewBox="0 0 20 20"
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.4, scale: 1 }}
    transition={{ duration: 0.5, delay: 1 + delay }}
  >
    <polygon
      points="10,1 18,5.5 18,14.5 10,19 2,14.5 2,5.5"
      fill="hsl(var(--primary))"
      fillOpacity="0.3"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      strokeOpacity="0.5"
    />
  </motion.svg>
);

export default HeroBackground;
