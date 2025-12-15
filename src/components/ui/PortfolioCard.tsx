import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import GlassCard from "./GlassCard";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  testimonial: string;
  client: string;
  gradient: string;
  image?: string;
}

interface PortfolioCardProps {
  project: Project;
  categoryLabel: string;
  index: number;
}

const PortfolioCard = ({ project, categoryLabel, index }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <GlassCard className="h-full flex flex-col overflow-hidden p-0" hover={false}>
        {/* Project Image/Preview */}
        <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-white/90">{project.title}</span>
            </div>
          )}
          
          {/* Hover Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
            >
              <Button variant="glow" size="sm" className="gap-2">
                <span>View Project</span>
                <ArrowUpRight size={16} />
              </Button>
            </motion.div>
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Category Badge - Top Right */}
          <div className="absolute top-4 right-4">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-primary border border-primary/20">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="pt-4 border-t border-border">
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic line-clamp-2">"{project.testimonial}"</p>
            <p className="text-xs text-primary mt-1 font-medium">{project.client}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default PortfolioCard;
