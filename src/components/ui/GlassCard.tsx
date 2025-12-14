import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,144,226,0.15)] hover:border-primary/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
