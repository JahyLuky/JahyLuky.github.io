import { motion } from 'framer-motion';
import { TerminalPrompt } from '../components/terminal/TerminalPrompt';
import { TerminalCommand } from '../components/terminal/TerminalCommand';
import { TerminalOutput } from '../components/terminal/TerminalOutput';
import { TerminalInput } from '../components/terminal/TerminalInput';
import { PageLayout } from '../components/layout/PageLayout';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Projects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // "cat projects.json" = 17 chars × 50ms = 850ms typing time
  // Output appears 500ms after typing completes = 1350ms

  return (
    <PageLayout title="Projects">
      <div className="space-y-4">
        <div>
          <TerminalPrompt />
          <TerminalCommand command="cat projects.json" animate delay={0} />
        </div>

        <TerminalOutput delay={1350}>
          <div className="space-y-4">
            <div>
              <a
                href="https://github.com/JahyLuky/OcelotGateway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-link hover:text-terminal-link-github font-bold transition-colors"
              >
                Ocelot API Gateway
              </a>
              <p className="ml-4 text-sm opacity-80 mt-1">
                API Gateway for microservices architecture with authentication, routing, and unified Swagger documentation
              </p>
              <p className="ml-4 text-xs opacity-60 mt-1">C# • ASP.NET Core • Ocelot • JWT • Microservices</p>
            </div>

            <div>
              <a
                href="https://github.com/JahyLuky/WorkforceManagementApi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-link hover:text-terminal-link-github font-bold transition-colors"
              >
                Workforce Management API
              </a>
              <p className="ml-4 text-sm opacity-80 mt-1">
                RESTful API and SignalR hub for real-time monitoring of Genesys agent and queue statistics
              </p>
              <p className="ml-4 text-xs opacity-60 mt-1">C# • ASP.NET Core • SignalR • Genesys Stat Server</p>
            </div>

            <div>
              <a
                href="https://github.com/JahyLuky/Genesys-connector-to-3CX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-link hover:text-terminal-link-github font-bold transition-colors"
              >
                REST Connector for 3CX Chat
              </a>
              <p className="ml-4 text-sm opacity-80 mt-1">
                REST API connector integrating 3CX Chat with Genesys v2 chat API for client-side chat functionalities
              </p>
              <p className="ml-4 text-xs opacity-60 mt-1">C# • ASP.NET Core • 3CX API • Genesys API • Swagger</p>
            </div>

            <div>
              <a
                href="https://github.com/JahyLuky/Chess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-link hover:text-terminal-link-github font-bold transition-colors"
              >
                Chess Game
              </a>
              <p className="ml-4 text-sm opacity-80 mt-1">
                Interactive chess game with tutorial, player vs player, and AI modes featuring minimax algorithm
              </p>
              <p className="ml-4 text-xs opacity-60 mt-1">C++ • Game Development • AI • Minimax Algorithm</p>
            </div>

            <div>
              <a
                href="https://github.com/JahyLuky/JahyLuky.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-link hover:text-terminal-link-github font-bold transition-colors"
              >
                Terminal Portfolio
              </a>
              <p className="ml-4 text-sm opacity-80 mt-1">
                Modern portfolio website with interactive terminal aesthetic and command-line navigation
              </p>
              <p className="ml-4 text-xs opacity-60 mt-1">React • TypeScript • Tailwind • Framer Motion</p>
            </div>
          </div>
        </TerminalOutput>

      <motion.div
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.2, 
          delay: prefersReducedMotion ? 0 : 1.85
        }}
      >
        <TerminalInput />
      </motion.div>
      </div>
    </PageLayout>
  );
};
