import { TerminalCommandProps } from '../../types';
import { TypedText } from './TypedText';

export const TerminalCommand: React.FC<TerminalCommandProps> = ({
  command,
  animate = true,
  delay = 0,
  onComplete,
}) => {
  if (!animate) {
    return <span className="text-terminal-text">{command}</span>;
  }

  return (
    <TypedText
      text={command}
      speed={50}
      delay={delay}
      onComplete={onComplete}
      className="text-terminal-text"
    />
  );
};
