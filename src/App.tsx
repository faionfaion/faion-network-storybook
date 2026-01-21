import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import DocumentationPage from './components/DocumentationPage';
import ArticlePage from './components/ArticlePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
      {currentPage === 'documentation' && <DocumentationPage onNavigate={handleNavigate} />}
      {currentPage === 'article' && <ArticlePage onNavigate={handleNavigate} />}
    </>
  );
}