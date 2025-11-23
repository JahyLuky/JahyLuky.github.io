import { motion } from 'framer-motion';
import { TerminalPrompt } from '../components/terminal/TerminalPrompt';
import { TerminalCommand } from '../components/terminal/TerminalCommand';
import { TerminalOutput } from '../components/terminal/TerminalOutput';
import { TerminalInput } from '../components/terminal/TerminalInput';
import { PageLayout } from '../components/layout/PageLayout';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // "ls -la contacts/" = 16 chars × 50ms = 800ms typing time
  // Output appears 500ms after typing completes = 1300ms

  return (
    <PageLayout title="Contact">
      <div className="space-y-4">
        <div>
          <TerminalPrompt />
          <TerminalCommand command="ls -la contacts/" animate delay={0} />
        </div>

        <TerminalOutput delay={1300}>
        <div className="space-y-2">
          <p>
            📧{' '}
            <a
              href="mailto:jahyluky@gmail.com"
              className="text-terminal-link hover:text-terminal-link-email transition-colors"
            >
              jahyluky@gmail.com
            </a>
          </p>
          <p>
            💼{' '}
            <a
              href="https://www.linkedin.com/in/jahyluky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-link hover:text-terminal-link-linkedin transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p>
            👨‍💻{' '}
            <a
              href="https://github.com/JahyLuky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-link hover:text-terminal-link-github transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </TerminalOutput>

      <motion.div
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.2, 
          delay: prefersReducedMotion ? 0 : 1.8
        }}
      >
        <TerminalInput />
      </motion.div>
      </div>
    </PageLayout>
  );
};
