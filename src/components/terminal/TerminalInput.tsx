import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TerminalPrompt } from './TerminalPrompt';

export const TerminalInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const navigate = useNavigate();

  const commands: Record<string, { action: () => void; description: string }> = {
    help: {
      action: () => addToHistory('help', 'Available commands:\n  about - View about page\n  skills - View skills page\n  projects - View projects page\n  contact - View contact page\n  clear - Clear command history\n  help - Show this help message'),
      description: 'Show available commands'
    },
    about: {
      action: () => navigate('/'),
      description: 'Navigate to about page'
    },
    skills: {
      action: () => navigate('/skills'),
      description: 'Navigate to skills page'
    },
    projects: {
      action: () => navigate('/projects'),
      description: 'Navigate to projects page'
    },
    contact: {
      action: () => navigate('/contact'),
      description: 'Navigate to contact page'
    },
    clear: {
      action: () => setHistory([]),
      description: 'Clear command history'
    },
  };

  const addToHistory = (command: string, output: string) => {
    setHistory([...history, { command, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      if (cmd === '') {
        return;
      }

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (commands[cmd]) {
        commands[cmd].action();
        if (cmd !== 'about' && cmd !== 'skills' && cmd !== 'projects' && cmd !== 'contact') {
          // Only add to history if not navigating (navigation will reload the page)
          setInput('');
        }
      } else {
        addToHistory(cmd, `Command not found: ${cmd}\nType 'help' for available commands.`);
        setInput('');
      }
    }
  };

  return (
    <div className="mt-4">
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          <div>
            <TerminalPrompt />
            <span className="text-terminal-text">{item.command}</span>
          </div>
          <div className="whitespace-pre-wrap text-terminal-text opacity-80 ml-0 mt-1">
            {item.output}
          </div>
        </div>
      ))}
      
      <div className="flex items-center">
        <TerminalPrompt />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-terminal-text font-mono"
          placeholder="Type 'help' for commands..."
          autoFocus
        />
      </div>
    </div>
  );
};
