import { motion } from "framer-motion";

const HeroHexagon = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
      {/* Outer glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 blur-[60px] bg-gradient-to-br from-[#4A90E2]/30 via-[#2563eb]/20 to-[#1a2332]/30 rounded-full" />
      </motion.div>

      {/* Main hexagonal SVG */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10"
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          {/* Main gradient */}
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1a2332" />
          </linearGradient>
          
          {/* Inner glow gradient */}
          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1a2332" stopOpacity="0" />
          </radialGradient>
          
          {/* Circuit pattern gradient */}
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
          </linearGradient>
          
          {/* Outer frame gradient */}
          <linearGradient id="frameGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a2332" />
            <stop offset="50%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Metallic sheen */}
          <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="50%" stopColor="white" stopOpacity="0.05" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer hexagon frame - Layer 3 */}
        <motion.polygon
          points="200,30 340,95 340,225 200,290 60,225 60,95"
          fill="none"
          stroke="url(#frameGradient)"
          strokeWidth="2"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Middle hexagon frame - Layer 2 */}
        <motion.polygon
          points="200,55 315,110 315,210 200,265 85,210 85,110"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="2.5"
          strokeOpacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
        />

        {/* Main hexagon - Layer 1 */}
        <motion.polygon
          points="200,80 285,125 285,215 200,260 115,215 115,125"
          fill="url(#hexGradient)"
          fillOpacity="0.15"
          stroke="url(#hexGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Inner glow core */}
        <motion.circle
          cx="200"
          cy="170"
          r="60"
          fill="url(#innerGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* Metallic overlay on main hex */}
        <motion.polygon
          points="200,80 285,125 285,215 200,260 115,215 115,125"
          fill="url(#metallic)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Circuit-like patterns inside */}
        <g stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" filter="url(#glow)">
          {/* Horizontal lines */}
          <motion.line
            x1="140" y1="145" x2="180" y2="145"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.line
            x1="220" y1="145" x2="260" y2="145"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          />
          <motion.line
            x1="140" y1="195" x2="180" y2="195"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.line
            x1="220" y1="195" x2="260" y2="195"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
          
          {/* Vertical lines */}
          <motion.line
            x1="160" y1="125" x2="160" y2="155"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          />
          <motion.line
            x1="240" y1="125" x2="240" y2="155"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          />
          <motion.line
            x1="160" y1="185" x2="160" y2="215"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          />
          <motion.line
            x1="240" y1="185" x2="240" y2="215"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />
          
          {/* Connection nodes */}
          <motion.circle
            cx="160" cy="145" r="3"
            fill="#4A90E2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
          />
          <motion.circle
            cx="240" cy="145" r="3"
            fill="#4A90E2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          />
          <motion.circle
            cx="160" cy="195" r="3"
            fill="#4A90E2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
          />
          <motion.circle
            cx="240" cy="195" r="3"
            fill="#4A90E2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
          />
        </g>

        {/* Center N letter */}
        <motion.text
          x="200"
          y="185"
          textAnchor="middle"
          fontSize="60"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          fill="url(#hexGradient)"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          N
        </motion.text>

        {/* Decorative corners */}
        <g stroke="#4A90E2" strokeWidth="2" strokeOpacity="0.5">
          <motion.path
            d="M135,100 L115,125 L115,145"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          />
          <motion.path
            d="M265,100 L285,125 L285,145"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          />
          <motion.path
            d="M135,240 L115,215 L115,195"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          />
          <motion.path
            d="M265,240 L285,215 L285,195"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          />
        </g>
      </motion.svg>

      {/* Animated pulsing ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute w-[80%] h-[80%] rounded-full border border-[#4A90E2]/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[90%] h-[90%] rounded-full border border-[#4A90E2]/20"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#4A90E2]"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default HeroHexagon;
