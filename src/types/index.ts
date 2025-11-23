export interface TerminalPromptProps {
  username?: string;
  hostname?: string;
  directory?: string;
  className?: string;
}

export interface TerminalCommandProps {
  command: string;
  animate?: boolean;
  delay?: number;
  onComplete?: () => void;
}

export interface TerminalOutputProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export interface TerminalLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  url: string;
  type: 'email' | 'linkedin' | 'github';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
