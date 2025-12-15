import { motion } from "framer-motion";

// SVG Tech Icons
export const ReactIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="3" fill="currentColor" className="text-[#61DAFB]" />
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" className="text-[#61DAFB]" />
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" className="text-[#61DAFB]" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" className="text-[#61DAFB]" transform="rotate(120 16 16)" />
  </svg>
);

export const NodeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#339933" />
    <path d="M16 6L24 10.5V19.5L16 24L8 19.5V10.5L16 6Z" fill="#fff" />
    <text x="16" y="18" textAnchor="middle" fill="#339933" fontSize="8" fontWeight="bold">N</text>
  </svg>
);

export const MongoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M16 2C16 2 12 8 12 16C12 24 16 30 16 30C16 30 20 24 20 16C20 8 16 2 16 2Z" fill="#4DB33D" />
    <path d="M16 6C14.5 9 14 12 14 16C14 20 14.5 23 16 26C17.5 23 18 20 18 16C18 12 17.5 9 16 6Z" fill="#3FA037" />
    <circle cx="16" cy="16" r="2" fill="#fff" />
  </svg>
);

export const ExpressIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="16" rx="2" fill="currentColor" className="text-foreground" />
    <text x="16" y="19" textAnchor="middle" fill="currentColor" className="text-background" fontSize="8" fontWeight="bold">Ex</text>
  </svg>
);

export const NextIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="currentColor" className="text-foreground" />
    <path d="M12 11V21L22 11" stroke="currentColor" strokeWidth="2" className="text-background" />
  </svg>
);

export const TypeScriptIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="2" fill="#3178C6" />
    <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">TS</text>
  </svg>
);

export const TailwindIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M8 12C9.5 8 12.5 6 16 6C21.5 6 22.5 10 25.5 11C27.5 11.5 29 11 30 9C28.5 13 25.5 15 22 15C16.5 15 15.5 11 12.5 10C10.5 9.5 9 10 8 12Z" fill="#38BDF8" />
    <path d="M2 22C3.5 18 6.5 16 10 16C15.5 16 16.5 20 19.5 21C21.5 21.5 23 21 24 19C22.5 23 19.5 25 16 25C10.5 25 9.5 21 6.5 20C4.5 19.5 3 20 2 22Z" fill="#38BDF8" />
  </svg>
);

export const ThreeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M4 24L16 4L28 24H4Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
    <path d="M10 18L16 8L22 18H10Z" fill="currentColor" className="text-primary" />
  </svg>
);

interface TechStackItemProps {
  icon: React.ReactNode;
  name: string;
  index: number;
}

export const TechStackItem = ({ icon, name, index }: TechStackItemProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, y: -8 }}
    className="animate-float"
    style={{ animationDelay: `${index * 0.3}s` }}
  >
    <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="font-medium text-foreground">{name}</span>
    </div>
  </motion.div>
);
