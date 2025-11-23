import { motion } from 'framer-motion';
import { PageLayoutProps } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeInOut',
      }}
      aria-label={title || 'Page content'}
    >
      {children}
    </motion.main>
  );
};
