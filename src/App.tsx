import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RouterProvider, useRouter } from '@/components/Router';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { LanguagesPage } from '@/pages/LanguagesPage';
import { ContactPage } from '@/pages/ContactPage';

function Pages() {
  const { route } = useRouter();
  const path = route.path.split('#')[0];

  useEffect(() => {
    document.title =
      {
        '/': 'Three Brothers Linguistics | Global Translation, Localization & AI Data Services',
        '/about': 'About Us | Three Brothers Linguistics',
        '/services': 'Services | Three Brothers Linguistics',
        '/languages': 'Languages | Three Brothers Linguistics',
        '/contact': 'Contact & Free Quote | Three Brothers Linguistics',
      }[path] ?? 'Three Brothers Linguistics | Global Language Solutions';
  }, [path]);

  switch (path) {
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/languages':
      return <LanguagesPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Pages />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
