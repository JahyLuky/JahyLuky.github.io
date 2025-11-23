import { TerminalLayoutProps } from '../../types';
import { Footer } from '../layout/Footer';

export const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen p-4 md:p-6 lg:p-8 flex flex-col ${className}`}>
      <div className="w-full max-w-80ch mx-auto flex-1 flex flex-col">
        {children}
        <Footer />
      </div>
    </div>
  );
};
