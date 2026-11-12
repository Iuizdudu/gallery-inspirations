import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './locales/translations';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';
import { CommandPalette } from './components/Search/CommandPalette';
import { HomePage } from './pages/Home/HomePage';
import { CategoryPage } from './pages/Category/CategoryPage';
import { DocsPage } from './pages/Docs/DocsPage';
import { GuidePage } from './pages/Guide/GuidePage';
import { ChangelogPage } from './pages/Changelog/ChangelogPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#090909] text-[#F5F5F5] flex flex-row relative antialiased selection:bg-[#365dff]/35 selection:text-white">
          {/* Left Fixed / Responsive Sidebar */}
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
            onOpenSearch={() => setIsSearchOpen(true)}
          />

          {/* Main App Workspace Canvas */}
          <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
            {/* Top Navbar */}
            <Navbar
              onToggleSidebarMobile={() => setIsMobileSidebarOpen(true)}
            />

            {/* Viewport Content */}
            <main className="flex-1">
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage onOpenSearch={() => setIsSearchOpen(true)} />
                  }
                />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/guide" element={<GuidePage />} />
                <Route path="/changelog" element={<ChangelogPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>

          {/* Global Spotlight Command Palette (Ctrl + K) */}
          <CommandPalette
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
