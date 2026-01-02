import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbsProps {
  className?: string;
  customLabels?: Record<string, string>;
}

const Breadcrumbs = ({ className = "", customLabels = {} }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatLabel = (segment: string) => {
    if (customLabels[segment]) return customLabels[segment];
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only md:not-sr-only">Home</span>
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={name} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            {isLast ? (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {formatLabel(name)}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="text-muted-foreground hover:text-primary transition-colors truncate max-w-[150px]"
              >
                {formatLabel(name)}
              </Link>
            )}
          </div>
        );
      })}
    </motion.nav>
  );
};

export default Breadcrumbs;