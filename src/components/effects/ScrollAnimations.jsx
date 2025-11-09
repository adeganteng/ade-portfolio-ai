// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export const ScrollSection = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollItem = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
