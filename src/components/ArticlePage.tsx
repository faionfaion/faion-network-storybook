import { useState } from 'react';
import { Lock, Check, ArrowRight, ChevronRight, Circle, Folder, Clock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ArticlePageProps {
  onNavigate: (page: string) => void;
}

export default function ArticlePage({ onNavigate }: ArticlePageProps) {
  const [activeSection, setActiveSection] = useState('why-important');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <Header onNavigate={onNavigate} currentPage="article" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex gap-16 px-8 py-16">
        {/* Left Sidebar - Table of Contents (25%) */}
        <aside className="w-[25%] sticky top-16 h-fit">
          <div className="pr-8">
            <h4 
              className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-6" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Зміст
            </h4>
            <nav className="space-y-3 mb-8">
              <button
                onClick={() => scrollToSection('why-important')}
                className="block w-full text-left text-[15px] py-2 text-[#4A4A4A] hover:text-[#5D1F2D] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Чому важливо
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className="block w-full text-left text-[15px] py-2 text-[#4A4A4A] hover:text-[#5D1F2D] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Проблема
              </button>
              <button
                onClick={() => scrollToSection('what-you-get')}
                className="block w-full text-left text-[15px] py-2 text-[#4A4A4A] hover:text-[#5D1F2D] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Що отримуєш
              </button>
            </nav>
            
            <div className="h-px bg-[#E5E5E0] my-6"></div>
            
            <nav className="space-y-3">
              <div className="flex items-center gap-2 text-[15px] py-2 text-[#A0A0A0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Lock className="w-3.5 h-3.5" />
                <span>Що таке MVP</span>
              </div>
              <div className="flex items-center gap-2 text-[15px] py-2 text-[#A0A0A0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Lock className="w-3.5 h-3.5" />
                <span>5 принципів</span>
              </div>
              <div className="flex items-center gap-2 text-[15px] py-2 text-[#A0A0A0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Lock className="w-3.5 h-3.5" />
                <span>Приклади</span>
              </div>
            </nav>
          </div>
        </aside>

        {/* Right Content Column (75%) */}
        <main className="w-[75%]">
          {/* Badges */}
          <div className="flex items-center gap-3 mb-8">
            {/* Starter Badge */}
            <span 
              className="inline-flex items-center gap-1.5 px-[10px] py-1 rounded-md border border-[#E5E5E0] text-[11px] uppercase tracking-[0.04em] font-semibold text-[#5D1F2D] h-6" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Circle className="w-3.5 h-3.5" strokeWidth={1.5} />
              ПОЧАТКІВЕЦЬ
            </span>
            
            {/* Product Badge */}
            <span 
              className="inline-flex items-center gap-1.5 px-[10px] py-1 rounded-md border border-[#E5E5E0] text-[11px] uppercase tracking-[0.04em] font-semibold text-[#4A4A4A] h-6" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Folder className="w-3.5 h-3.5" strokeWidth={1.5} />
              ПРОДУКТ
            </span>
            
            {/* Time Badge */}
            <span 
              className="inline-flex items-center gap-1.5 px-[10px] py-1 rounded-md border border-[#E5E5E0] text-[11px] uppercase tracking-[0.04em] font-semibold text-[#4A4A4A] h-6" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              8 ХВ
            </span>
          </div>

          {/* Article Header */}
          <h1 
            className="text-[56px] leading-[1.1] tracking-[-0.03em] font-normal text-[#1C1C1E] mb-6 max-w-[680px]" 
            style={{ fontFamily: 'Georgia, Merriweather, serif' }}
          >
            Що таке MVP і чому 90% стартапів провалюються без нього
          </h1>

          <p 
            className="text-[20px] leading-[1.6] text-[#4A4A4A] mb-12 max-w-[680px]" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Дізнайся, що таке MVP, чому це критично важливо для твого продукту, і як уникнути найпоширенішої помилки новачків.
          </p>

          <div className="h-px bg-[#E5E5E0] mb-16"></div>

          {/* Section 1: Why Important */}
          <section id="why-important" className="mb-20">
            <h2 
              className="text-[36px] leading-[1.2] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-6 max-w-[680px]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}
            >
              Why Important
            </h2>
            
            <p 
              className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-8 max-w-[680px]" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Imagine: you work 6 months on a product. You give up your weekends. You spend your savings on a designer and developer. You launch. And nothing. Nobody cares.
            </p>

            <p 
              className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-12 max-w-[680px]" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              This is not a made-up story. This is reality for most startups. They build what they never tested with real users.
            </p>

            {/* Stat Highlight Box */}
            <div className="bg-[#FFFFFF] border-l-4 border-[#5D1F2D] p-8 mb-12 max-w-[680px]">
              <div 
                className="text-[64px] leading-[1] font-normal text-[#5D1F2D] mb-3" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}
              >
                42%
              </div>
              <p 
                className="text-[18px] text-[#1C1C1E] mb-2 font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                startups fail due to lack of market demand
              </p>
              <p 
                className="text-[14px] text-[#4A4A4A]" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                — CB Insights, 2024
              </p>
            </div>
          </section>

          {/* Section 2: Problem */}
          <section id="problem" className="mb-20">
            <h2 
              className="text-[36px] leading-[1.2] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-6 max-w-[680px]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}
            >
              Problem: Building without Validation
            </h2>

            <p 
              className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-8 max-w-[680px]" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Most founders think:
            </p>

            {/* Quote Block */}
            <blockquote className="bg-[#FFFFFF] border-l-4 border-[#E5E5E0] p-8 mb-12 max-w-[680px]">
              <p 
                className="text-[24px] leading-[1.5] text-[#1C1C1E] italic" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}
              >
                "I will make the product perfect and then show people. They will definitely appreciate it!"
              </p>
            </blockquote>

            <p 
              className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-8 max-w-[680px]" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The problem is that a "perfect product" is your imagination. It's not guaranteed that people want exactly that. MVP helps to test the hypothesis quickly and cheaply.
            </p>
          </section>

          {/* Section 3: What You Get */}
          <section id="what-you-get" className="mb-20">
            <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg p-8 max-w-[680px]">
              <h3 
                className="text-[24px] leading-[1.3] font-normal text-[#1C1C1E] mb-6" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}
              >
                What You Get
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5D1F2D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF]" strokeWidth={3} />
                  </div>
                  <p className="text-[16px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    What is MVP and why it is not an "unfinished product"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5D1F2D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF]" strokeWidth={3} />
                  </div>
                  <p className="text-[16px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    5 principles of building a right MVP
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5D1F2D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF]" strokeWidth={3} />
                  </div>
                  <p className="text-[16px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Case studies: Dropbox, Airbnb, Zappos
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Paywall Block */}
          <div className="relative mb-20">
            {/* Blurred Preview Content */}
            <div className="relative">
              <div className="blur-sm opacity-40 select-none pointer-events-none">
                <h2 
                  className="text-[36px] leading-[1.2] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-6" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}
                >
                  Inside
                </h2>
                <p className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-4">
                  MVP (Minimum Viable Product) — the simplest version of the product that allows you to test the main hypothesis with minimal time and money expenses...
                </p>
                <p className="text-[18px] leading-[1.7] text-[#4A4A4A]">
                  This is not an "unfinished product". This is a product with one core feature, made perfectly...
                </p>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]"></div>
            </div>

            {/* Paywall Card */}
            <div className="relative -mt-32 max-w-[600px] mx-auto">
              <div className="bg-[#FFFFFF] border-2 border-[#5D1F2D] rounded-xl p-10 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#5D1F2D]/10 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-[#5D1F2D]" />
                  </div>
                </div>

                <h3 
                  className="text-[32px] leading-[1.2] font-normal text-[#1C1C1E] text-center mb-4" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}
                >
                  Premium Content
                </h3>

                <p 
                  className="text-[17px] text-[#4A4A4A] text-center mb-8" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get full access to 600+ articles and methodologies.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5D1F2D]" strokeWidth={2.5} />
                    <span className="text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Full article text + templates
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5D1F2D]" strokeWidth={2.5} />
                    <span className="text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      456 methodologies from all areas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5D1F2D]" strokeWidth={2.5} />
                    <span className="text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      AI Agent through MCP protocol
                    </span>
                  </div>
                </div>

                <button 
                  className="w-full px-8 py-4 text-[16px] font-medium bg-[#5D1F2D] text-[#FFFFFF] rounded-lg hover:bg-[#701C2A] transition-all mb-4" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get access — $19/mo
                </button>

                <button 
                  className="w-full text-[14px] text-[#5D1F2D] hover:underline transition-all" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Already have a subscription? Log in
                </button>
              </div>
            </div>
          </div>

          {/* Premium Content Preview (Designed as unlocked) */}
          <div className="opacity-30 pointer-events-none select-none">
            <section className="mb-20">
              <h2 
                className="text-[36px] leading-[1.2] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-6 max-w-[680px]" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}
              >
                What is MVP
              </h2>

              {/* Definition Block */}
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg p-8 mb-12 max-w-[680px]">
                <p 
                  className="text-[18px] leading-[1.7] text-[#1C1C1E] font-medium mb-4" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  MVP (Minimum Viable Product) — the simplest version of the product that allows you to test the main hypothesis with minimal time and money expenses.
                </p>
                <p 
                  className="text-[16px] leading-[1.7] text-[#4A4A4A]" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  This is not an "unfinished product". This is a product with one core feature, made perfectly. The rest — later, if users confirm demand.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="grid grid-cols-2 gap-6 mb-12 max-w-[680px]">
                <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg p-6">
                  <h4 className="text-[18px] font-medium text-[#1C1C1E] mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="text-[#D32F2F]">❌</span> MVP — this is NOT
                  </h4>
                  <ul className="space-y-2 text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <li>• Complex product</li>
                    <li>• Half-finished project</li>
                    <li>• Test version with bugs</li>
                  </ul>
                </div>

                <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg p-6">
                  <h4 className="text-[18px] font-medium text-[#1C1C1E] mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="text-[#2E7D32]">✅</span> MVP — this is
                  </h4>
                  <ul className="space-y-2 text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <li>• One feature, but perfect</li>
                    <li>• Quick hypothesis testing</li>
                    <li>• Real feedback from users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section className="mb-20">
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg p-8 max-w-[680px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0061FF] rounded flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <h3 className="text-[24px] font-normal text-[#1C1C1E]" style={{ fontFamily: 'Georgia, serif' }}>
                    Dropbox: Video instead of product
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.7] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Instead of building a complex product, Drew Houston made a 3-minute video showing the concept. Result: 75,000 sign-ups in one night.
                </p>
              </div>
            </section>
          </div>

          {/* Next Step Block */}
          <div className="bg-[#5D1F2D] rounded-lg p-10 mb-16">
            <div className="flex items-center justify-between">
              {/* Left: Label */}
              <div 
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#FFFFFF]/70" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Next Chapter
              </div>

              {/* Center: Title */}
              <div className="flex-1 px-12">
                <h3 
                  className="text-[28px] font-normal text-[#FFFFFF]" 
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  MVP in weekends: Step-by-step plan
                </h3>
              </div>

              {/* Right: Arrow Icon */}
              <button className="w-14 h-14 rounded-full border border-[#FFFFFF] flex items-center justify-center hover:bg-[#FFFFFF]/10 transition-all group">
                <ArrowRight className="w-6 h-6 text-[#FFFFFF] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <section>
            <h3 
              className="text-[32px] font-normal text-[#1C1C1E] mb-10" 
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Knowledge Base
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1: Validation */}
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg overflow-hidden hover:border-[#5D1F2D] transition-all cursor-pointer">
                {/* Diagrammatic Thumbnail - Magnifier */}
                <div className="aspect-[16/9] bg-[#F5F5F0] flex items-center justify-center p-12">
                  <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                    <circle cx="32" cy="32" r="20" stroke="#5D1F2D" strokeWidth="1.5" />
                    <line x1="46" y1="46" x2="65" y2="65" stroke="#5D1F2D" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="p-6">
                  <span 
                    className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold border border-[#E5E5E0] text-[#4A4A4A] mb-4" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Research
                  </span>
                  <h4 
                    className="text-[17px] font-normal text-[#1C1C1E] leading-[1.4] mb-3" 
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    How to validate an idea in a week
                  </h4>
                  <p 
                    className="text-[13px] text-[#6B7280]" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    8 min read
                  </p>
                </div>
              </div>

              {/* Card 2: MVP vs MLP - Venn Diagram */}
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg overflow-hidden hover:border-[#5D1F2D] transition-all cursor-pointer">
                {/* Diagrammatic Thumbnail - Venn Diagram */}
                <div className="aspect-[16/9] bg-[#F5F5F0] flex items-center justify-center p-12">
                  <svg className="w-24 h-20" viewBox="0 0 96 80" fill="none">
                    <circle cx="32" cy="40" r="24" stroke="#5D1F2D" strokeWidth="1.5" />
                    <circle cx="64" cy="40" r="24" stroke="#5D1F2D" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="p-6">
                  <span 
                    className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold border border-[#E5E5E0] text-[#4A4A4A] mb-4" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Product
                  </span>
                  <h4 
                    className="text-[17px] font-normal text-[#1C1C1E] leading-[1.4] mb-3" 
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    MVP vs MLP: What is the difference
                  </h4>
                  <p 
                    className="text-[13px] text-[#6B7280]" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    6 min read
                  </p>
                </div>
              </div>

              {/* Card 3: First Customers - Target */}
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg overflow-hidden hover:border-[#5D1F2D] transition-all cursor-pointer">
                {/* Diagrammatic Thumbnail - Target Crosshair */}
                <div className="aspect-[16/9] bg-[#F5F5F0] flex items-center justify-center p-12">
                  <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="28" stroke="#5D1F2D" strokeWidth="1.5" />
                    <circle cx="40" cy="40" r="18" stroke="#5D1F2D" strokeWidth="1.5" />
                    <circle cx="40" cy="40" r="8" stroke="#5D1F2D" strokeWidth="1.5" />
                    <line x1="40" y1="10" x2="40" y2="30" stroke="#5D1F2D" strokeWidth="1.5" />
                    <line x1="40" y1="50" x2="40" y2="70" stroke="#5D1F2D" strokeWidth="1.5" />
                    <line x1="10" y1="40" x2="30" y2="40" stroke="#5D1F2D" strokeWidth="1.5" />
                    <line x1="50" y1="40" x2="70" y2="40" stroke="#5D1F2D" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="p-6">
                  <span 
                    className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold border border-[#E5E5E0] text-[#4A4A4A] mb-4" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Marketing
                  </span>
                  <h4 
                    className="text-[17px] font-normal text-[#1C1C1E] leading-[1.4] mb-3" 
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Find the first 10 customers
                  </h4>
                  <p 
                    className="text-[13px] text-[#6B7280]" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    9 min read
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}