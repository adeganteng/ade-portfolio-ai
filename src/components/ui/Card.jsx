import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Card = ({ children, className, animate = true, ...props }) => {
  const Component = animate ? motion.div : "div";

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Component
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden",
        className
      )}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
};
