import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Route = { path: string; params: Record<string, string> };

type RouterCtx = { route: Route; navigate: (path: string) => void };

const Ctx = createContext<RouterCtx | null>(null);

export function useRouter() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return { path: hash, params: {} };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { path: '/', params: {} },
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.location.hash = '/';
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>;
}

export function Link({
  to,
  children,
  className = '',
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
