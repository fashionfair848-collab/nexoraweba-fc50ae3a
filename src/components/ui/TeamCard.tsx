import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import GlassCard from "./GlassCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  isFounder?: boolean;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={member.isFounder ? "lg:col-span-2" : ""}
    >
      <GlassCard className={`h-full text-center group overflow-hidden ${member.isFounder ? "py-12" : ""}`}>
        {/* Image Container */}
        <div className="relative mx-auto mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-full mx-auto ${
              member.isFounder ? "w-48 h-48" : "w-32 h-32"
            }`}
          >
            {/* Gradient Ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className={`font-display font-bold text-primary ${member.isFounder ? "text-5xl" : "text-3xl"}`}>
                    {member.initials}
                  </span>
                )}
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </motion.div>
          
          {/* Founder Badge */}
          {member.isFounder && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full"
            >
              <span className="text-xs font-semibold text-primary-foreground">Founder</span>
            </motion.div>
          )}
        </div>

        {/* Info */}
        <h3 className={`font-display font-bold text-foreground mb-1 ${member.isFounder ? "text-2xl" : "text-xl"}`}>
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className={`text-muted-foreground leading-relaxed ${member.isFounder ? "max-w-lg mx-auto" : "text-sm"}`}>
          {member.bio}
        </p>

        {/* Social Links */}
        {member.socials && (
          <div className="flex justify-center gap-4 mt-6">
            {member.socials.linkedin && (
              <motion.a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            )}
            {member.socials.github && (
              <motion.a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={18} />
              </motion.a>
            )}
            {member.socials.twitter && (
              <motion.a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
            )}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
};

export default TeamCard;
