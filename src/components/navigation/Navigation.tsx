import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'about' },
    { path: '/skills', label: 'skills' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <nav className="mb-8 pb-4 border-b border-terminal-text border-opacity-20" aria-label="Main navigation">
      <div className="flex flex-wrap gap-4 md:gap-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-terminal-text hover:text-terminal-link transition-colors
                ${isActive ? 'text-terminal-link font-bold' : ''}
              `}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Navigate to ${link.label}`}
            >
              {isActive && '> '}
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
