import { motion } from 'framer-motion';
import { TerminalOutputProps } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`mt-1 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
};
