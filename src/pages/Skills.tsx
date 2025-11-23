import { motion } from 'framer-motion';
import { TerminalPrompt } from '../components/terminal/TerminalPrompt';
import { TerminalCommand } from '../components/terminal/TerminalCommand';
import { TerminalOutput } from '../components/terminal/TerminalOutput';
import { TerminalInput } from '../components/terminal/TerminalInput';
import { PageLayout } from '../components/layout/PageLayout';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // "ls -la skills/" = 14 chars × 50ms = 700ms typing time
  // Output appears 500ms after typing completes = 1200ms

  return (
    <PageLayout title="Skills">
      <div className="space-y-4">
        <div>
          <TerminalPrompt />
          <TerminalCommand command="ls -la skills/" animate delay={0} />
        </div>

        <TerminalOutput delay={1200}>
          <div className="space-y-4">
            <div>
              <p className="text-terminal-link font-bold">Key Skills</p>
              <p className="ml-4 text-sm">Reliability • Independence • Teamwork • Good organizational skills • Ability to learn quickly</p>
            </div>
            
            <div>
              <p className="text-terminal-link font-bold">Programming Languages</p>
              <p className="ml-4 text-sm">C# • Python • SQL • PHP • Node.js</p>
            </div>
            
            <div>
              <p className="text-terminal-link font-bold">Development Software</p>
              <p className="ml-4 text-sm">VS Code • MS Visual Studio • SQL Server Management Studio • pgAdmin</p>
            </div>
            
            <div>
              <p className="text-terminal-link font-bold">System & Network Tools</p>
              <p className="ml-4 text-sm">VMware • VirtualBox • Linux terminal • Windows command line</p>
              <p className="ml-4 text-sm">Git • Putty • WireShark • WinSCP • Total Commander</p>
            </div>
            
            <div>
              <p className="text-terminal-link font-bold">Business Applications</p>
              <p className="ml-4 text-sm">MS Office • Confluence • Notion • ServiceNow</p>
            </div>
            
            <div>
              <p className="text-terminal-link font-bold">Operating Systems</p>
              <p className="ml-4 text-sm">Windows (10, 11) • Linux (Ubuntu, CentOS, Debian) • MacOS (Sequoia, Tahoe)</p>
            </div>
          </div>
        </TerminalOutput>

      <motion.div
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.2, 
          delay: prefersReducedMotion ? 0 : 1.7
        }}
      >
        <TerminalInput />
      </motion.div>
      </div>
    </PageLayout>
  );
};
