import { TerminalPromptProps } from '../../types';

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  username = 'jahelka',
  hostname = 'lukas',
  directory = '~/src/',
  className = '',
}) => {
  return (
    <span className={`inline-block ${className}`}>
      <span className="text-terminal-username">{username}</span>
      <span className="text-terminal-text">@</span>
      <span className="text-terminal-username">{hostname}</span>
      <span className="text-terminal-text">:</span>
      <span className="text-terminal-directory">{directory}</span>
      <span className="text-terminal-text">$ </span>
    </span>
  );
};
