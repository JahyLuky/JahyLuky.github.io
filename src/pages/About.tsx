import { motion } from 'framer-motion';
import { TerminalPrompt } from '../components/terminal/TerminalPrompt';
import { TerminalCommand } from '../components/terminal/TerminalCommand';
import { TerminalOutput } from '../components/terminal/TerminalOutput';
import { TerminalInput } from '../components/terminal/TerminalInput';
import { PageLayout } from '../components/layout/PageLayout';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Timing breakdown for sequential terminal feel:
  // 0ms: First prompt appears
  // 0-300ms: "whoami" types (6 chars × 50ms = 300ms)
  // 600ms: Output fades in (300ms after typing completes)
  // 1600ms: Second prompt appears (1000ms after output for reading time)
  // 1600-2350ms: "more interests.txt" types (15 chars × 50ms = 750ms)
  // 2850ms: Second output fades in (500ms after typing completes)

  return (
    <PageLayout title="About">
      <div className="space-y-4">
        <div>
          <TerminalPrompt />
          <TerminalCommand command="whoami" animate delay={0} />
        </div>

        <TerminalOutput delay={600}>
          <p>Hi, I'm Lukas, a 24-year-old software developer based in Jihlava.</p>
          <p className="mt-2">
            I began my career as a network engineer in the telecommunications industry and have since transitioned into software development. 
          </p>
          <p className="mt-2">
            I specialize in C# and the .NET ecosystem, focusing on designing, building, and enhancing software systems. My work includes developing custom solutions and RESTful APIs tailored to client needs, with a strong emphasis on backend development and database management. I leverage solid SQL expertise to ensure efficient, reliable, and optimized data handling across applications.
          </p>
        </TerminalOutput>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 0.2, 
            delay: prefersReducedMotion ? 0 : 1.6
          }}
        >
          <TerminalPrompt />
          <TerminalCommand command="more interests.txt" animate delay={1600} />
        </motion.div>

        <TerminalOutput delay={2850}>
          <p>👨‍💻 Backend development in C# with .NET</p>
          <p>🤖 Passionate about the latest AI trends and applications</p>
          <p>🎮 Video games like chess, league of legends or watching twitch streams</p>
          <p>🌎 Traveling exploring new places, cuisine and cultures</p>
        </TerminalOutput>

        <motion.div
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 0.2, 
            delay: prefersReducedMotion ? 0 : 3.35
          }}
        >
          <TerminalInput />
        </motion.div>
      </div>
    </PageLayout>
  );
};
