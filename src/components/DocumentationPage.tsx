import { useState, useEffect } from 'react';
import { Check, Circle, Hammer, TrendingUp, Cpu } from 'lucide-react';
import Header from './Header';

interface DocumentationPageProps {
  onNavigate: (page: string) => void;
}

// Documentation Page - "Digital Journal" Aesthetic
// Clean, structured academic paper / brand guideline book
export default function DocumentationPage({ onNavigate }: DocumentationPageProps) {
  const [activeSection, setActiveSection] = useState('philosophy');

  const sections = [
    { id: 'philosophy', label: 'Design Philosophy' },
    { id: 'colors', label: 'Color Palette' },
    { id: 'typography', label: 'Typography System' },
    { id: 'iconography', label: 'Iconography & Graphics' },
    { id: 'components', label: 'UI Components' },
    { id: 'layout', label: 'Layout & Spacing' },
    { id: 'accessibility', label: 'Accessibility (WCAG 2.2 AA)' },
  ];

  const colors = {
    backgrounds: [
      { name: 'Warm Alabaster', hex: '#FAF9F6', desc: 'Main Canvas' },
      { name: 'Pure Cream', hex: '#FFFFFF', desc: 'Cards/Surface' },
    ],
    ink: [
      { name: 'Soft Charcoal', hex: '#1C1C1E', desc: 'Primary Text' },
      { name: 'Graphite', hex: '#4A4A4A', desc: 'Body Text' },
      { name: 'Taupe Grey', hex: '#E5E5E0', desc: 'Borders' },
    ],
    accent: [
      { name: 'Deep Burgundy', hex: '#5D1F2D', desc: 'Brand Accent' },
    ],
  };

  const typographyTable = [
    { element: 'H1, H2, H3', typeface: 'Serif', why: 'Establishes authority and editorial tone.' },
    { element: 'Big Numbers', typeface: 'Serif', why: 'Makes data feel monumental.' },
    { element: 'Quotes', typeface: 'Serif', why: 'Highlights the "human" voice.' },
    { element: 'Body Text', typeface: 'Sans-Serif', why: 'Maximum readability.' },
    { element: 'UI Elements', typeface: 'Sans-Serif', why: 'Functional clarity.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Header - Minimal */}
      <Header onNavigate={onNavigate} />

      <div className="max-w-[1600px] mx-auto flex">
        {/* Left Sidebar - Table of Contents (Fixed) */}
        <aside className="sticky top-0 h-screen w-[25%] border-r border-[#E5E5E0] bg-[#FAF9F6] p-12 overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-6" 
                style={{ fontFamily: 'Inter, sans-serif' }}>
              Contents
            </h3>
            <nav className="space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left text-[15px] py-2 transition-colors ${
                    activeSection === section.id
                      ? 'text-[#5D1F2D] font-medium'
                      : 'text-[#4A4A4A] hover:text-[#5D1F2D]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E5E5E0]">
            <p className="text-[13px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Version 2.0
            </p>
            <p className="text-[13px] text-[#4A4A4A] leading-[1.6] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Last updated: January 2026
            </p>
          </div>
        </aside>

        {/* Right Content Area (Scrollable) */}
        <main className="w-[75%] px-16 py-16">
          {/* Header Section */}
          <div className="mb-32">
            <h1 className="text-[72px] leading-[1.05] tracking-[-0.03em] font-normal text-[#1C1C1E] mb-6 max-w-[800px]" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Faion Network – Design System Documentation
            </h1>
            <div className="text-[20px] text-[#4A4A4A] leading-[1.5] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-medium text-[#1C1C1E]">Theme:</span> "The Digital Journal" / "Intellectual Serenity"
            </div>
            <div className="text-[16px] text-[#4A4A4A] leading-[1.6] max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-medium text-[#1C1C1E]">Visual Metaphor:</span> Premium printed media, academic journals, and architectural blueprints.
            </div>
            <div className="mt-6 text-[13px] uppercase tracking-[0.15em] font-semibold text-[#5D1F2D]" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
              Version 2.0
            </div>
          </div>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 1: Design Philosophy */}
          <section id="philosophy" className="mb-32 max-w-[700px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Design Philosophy
            </h2>
            <p className="text-[18px] text-[#4A4A4A] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              The design rejects "tech startup" trends (gradients, neon, dark mode) in favor of clarity, permanence, and authority. It should feel like a high-end physical object (paper & ink) digitized.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Content First
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Typography is the interface.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Warmth
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Avoid clinical white; embrace organic paper tones.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Precision
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Everything is aligned to a strict grid; chaos is eliminated.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 2: Color Palette */}
          <section id="colors" className="mb-32">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Color Palette
            </h2>

            {/* Backgrounds */}
            <div className="mb-12">
              <h3 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-6" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                Backgrounds
              </h3>
              <div className="grid grid-cols-2 gap-8 max-w-[700px]">
                {colors.backgrounds.map((color, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg border border-[#E5E5E0] flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="text-[15px] font-medium text-[#1C1C1E] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.name}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, monospace' }}>
                        {color.hex}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Ink */}
            <div className="mb-12">
              <h3 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-6" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                The Ink
              </h3>
              <div className="grid grid-cols-2 gap-8 max-w-[700px]">
                {colors.ink.map((color, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg border border-[#E5E5E0] flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="text-[15px] font-medium text-[#1C1C1E] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.name}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, monospace' }}>
                        {color.hex}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Accent */}
            <div className="mb-12">
              <h3 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-6" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                The Accent
              </h3>
              <div className="grid grid-cols-2 gap-8 max-w-[700px]">
                {colors.accent.map((color, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg border border-[#E5E5E0] flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="text-[15px] font-medium text-[#1C1C1E] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.name}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, monospace' }}>
                        {color.hex}
                      </div>
                      <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {color.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 3: Typography System */}
          <section id="typography" className="mb-32 max-w-[900px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Typography System
            </h2>
            <p className="text-[18px] text-[#4A4A4A] leading-[1.7] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              We use a <span className="font-semibold text-[#1C1C1E]">Dual-Font System</span>: A Serif for the "Voice" (Brand) and a Sans-Serif for "Utility" (Interface).
            </p>

            {/* Usage Rules Table */}
            <div className="mb-16 border border-[#E5E5E0] rounded-lg overflow-hidden bg-[#FFFFFF]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E5E5E0] bg-[#FAF9F6]">
                    <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                      Element
                    </th>
                    <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                      Typeface Style
                    </th>
                    <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                      Why?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {typographyTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#E5E5E0] last:border-0">
                      <td className="px-6 py-4 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {row.element}
                      </td>
                      <td className="px-6 py-4 text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {row.typeface}
                      </td>
                      <td className="px-6 py-4 text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hierarchy Specs */}
            <div>
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-8" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Hierarchy Specifications
              </h3>

              <div className="space-y-8">
                <div className="pb-6 border-b border-[#E5E5E0]">
                  <div className="text-[64px] leading-[1.1] tracking-[-0.025em] font-normal text-[#1C1C1E] mb-3" 
                       style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                    Display
                  </div>
                  <p className="text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Modern Serif • 64px - 80px • Tight tracking
                  </p>
                </div>

                <div className="pb-6 border-b border-[#E5E5E0]">
                  <div className="text-[36px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-3" 
                       style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                    Section Headlines
                  </div>
                  <p className="text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Modern Serif • 32px - 40px
                  </p>
                </div>

                <div className="pb-6 border-b border-[#E5E5E0]">
                  <div className="text-[18px] leading-[1.7] text-[#4A4A4A] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                    Body copy is set in a geometric sans-serif at 16-18px with a line height of 150% for optimal readability across all devices and screen sizes.
                  </div>
                  <p className="text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Geometric Sans • 16px - 18px • Line Height: 150%
                  </p>
                </div>

                <div className="pb-6">
                  <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                    UI Labels
                  </div>
                  <p className="text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Geometric Sans • Uppercase • 11px • Wide tracking
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Typography - Rich Text Elements */}
            <div className="mt-20 pt-20 border-t border-[#E5E5E0]">
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-8" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Editorial Typography
              </h3>
              
              <p className="text-[16px] text-[#4A4A4A] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Specific styles for long-form reading contexts (Articles). These elements maintain the "Digital Journal" aesthetic while enhancing readability and engagement.
              </p>

              {/* Inline Links */}
              <div className="mb-12">
                <h4 className="text-[18px] font-semibold text-[#1C1C1E] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Inline Links
                </h4>
                <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg mb-4">
                  <p className="text-[18px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    The design system rejects "tech startup" trends. Learn more about{' '}
                    <a href="#" className="text-[#5D1F2D] underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity">
                      the SDD framework
                    </a>{' '}
                    in our documentation.
                  </p>
                </div>
                <div className="space-y-2 text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Color:</span> Deep Burgundy (#5D1F2D)</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Style:</span> Underlined (1px solid)</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Hover:</span> Opacity 80%</p>
                </div>
              </div>

              {/* Blockquotes */}
              <div className="mb-12">
                <h4 className="text-[18px] font-semibold text-[#1C1C1E] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Blockquotes
                </h4>
                <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg mb-4">
                  <blockquote className="border-l-4 border-[#5D1F2D] pl-6">
                    <p className="text-[20px] leading-[1.6] text-[#1C1C1E] italic" 
                       style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                      "Typography is the interface. Content is the experience."
                    </p>
                  </blockquote>
                </div>
                <div className="space-y-2 text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Border:</span> Left 4px solid Deep Burgundy</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Padding:</span> Left 24px</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Typography:</span> Serif, Italic, 20px</p>
                </div>
              </div>

              {/* Lists */}
              <div>
                <h4 className="text-[18px] font-semibold text-[#1C1C1E] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Lists (UL/OL)
                </h4>
                <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg mb-4">
                  <ul className="space-y-3 text-[16px] text-[#4A4A4A] leading-[1.7] pl-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <li className="relative before:content-['•'] before:absolute before:-left-6 before:text-[#5D1F2D] before:font-bold">
                      Content-first design philosophy
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:-left-6 before:text-[#5D1F2D] before:font-bold">
                      Warm alabaster backgrounds for reduced eye strain
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:-left-6 before:text-[#5D1F2D] before:font-bold">
                      Strict 8-point grid system for mathematical harmony
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Bullets:</span> Deep Burgundy circles or numbers</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Padding:</span> Left 24px</p>
                  <p>• <span className="font-semibold text-[#1C1C1E]">Spacing:</span> 12px between items</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 4: Iconography & Graphics */}
          <section id="iconography" className="mb-32 max-w-[700px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Iconography & Graphics
            </h2>
            <p className="text-[18px] text-[#4A4A4A] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Imagery should feel like technical illustrations found in a scientific textbook.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Style
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "Scientific Line Art" (Thin 1.5px stroke, No fill).
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Diagrams
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Minimalist node-link diagrams. Dotted lines in Taupe Grey.
                </p>
              </div>
            </div>

            {/* Example Diagram */}
            <div className="mt-10 p-12 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
              <div className="flex items-center justify-between max-w-[500px] mx-auto">
                {/* Node 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5D1F2D] flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-[#5D1F2D]" strokeWidth={1.5} />
                  </div>
                  <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Input
                  </div>
                </div>

                {/* Dotted Line */}
                <div className="flex-1 h-px border-t border-dashed border-[#E5E5E0] mx-6"></div>

                {/* Node 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5D1F2D] flex items-center justify-center mb-3">
                    <div className="w-3 h-3 bg-[#5D1F2D] rounded-full"></div>
                  </div>
                  <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Process
                  </div>
                </div>

                {/* Dotted Line */}
                <div className="flex-1 h-px border-t border-dashed border-[#E5E5E0] mx-6"></div>

                {/* Node 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5D1F2D] flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-[#5D1F2D]" strokeWidth={1.5} />
                  </div>
                  <div className="text-[13px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Output
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 5: UI Components */}
          <section id="components" className="mb-32 max-w-[700px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              UI Components
            </h2>

            {/* Buttons */}
            <div className="mb-16">
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-8" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Buttons
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-4" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                    Primary
                  </div>
                  <button className="px-8 py-3.5 text-[15px] font-medium bg-[#5D1F2D] text-[#FFFFFF] rounded-lg hover:bg-[#701C2A] transition-all" 
                          style={{ fontFamily: 'Inter, sans-serif' }}>
                    Primary Button
                  </button>
                  <p className="text-[14px] text-[#4A4A4A] mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Solid Deep Burgundy fill • White Text • Rounded Rectangle (8px)
                  </p>
                </div>

                <div>
                  <div className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-4" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                    Secondary
                  </div>
                  <button className="px-8 py-3.5 text-[15px] font-medium bg-transparent text-[#1C1C1E] border border-[#1C1C1E] rounded-lg hover:bg-[#1C1C1E] hover:text-[#FFFFFF] transition-all" 
                          style={{ fontFamily: 'Inter, sans-serif' }}>
                    Secondary Button
                  </button>
                  <p className="text-[14px] text-[#4A4A4A] mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Transparent fill • 1px Charcoal border
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-8" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Cards
              </h3>

              <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
                <h4 className="text-[20px] font-normal text-[#1C1C1E] mb-3" 
                    style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  Sample Card Component
                </h4>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7] mb-6" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                  This card demonstrates the standard styling: a cream background with a subtle taupe border, generous padding, and no shadow effects. The design emphasizes flatness and precision.
                </p>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-[#5D1F2D]" strokeWidth={2.5} />
                  <span className="text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Feature item with burgundy accent
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-[#4A4A4A] mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cream box (#FFFFFF) • 1px Taupe Grey border • No shadow • Generous padding (32px)
              </p>
            </div>

            {/* Level Badges */}
            <div className="mt-20">
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-6" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Level Badges (Complexity Indicators)
              </h3>

              <p className="text-[16px] text-[#4A4A4A] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Level Badges provide a quick visual cue of an article's complexity. They are designed as "Technical Specification Labels" — clean, outlined, and precise, avoiding the playful filled style of typical tech products. They use semantic colors only for the stroke and text, maintaining a sophisticated, archival feel.
              </p>

              {/* Badge Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Starter Badge */}
                <div className="p-6 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] uppercase tracking-[0.04em] font-semibold h-6" 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        borderColor: '#5D1F2D',
                        color: '#5D1F2D'
                      }}
                    >
                      <Circle className="w-3.5 h-3.5" strokeWidth={1.5} />
                      STARTER
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Best for beginners getting started.
                  </p>
                </div>

                {/* Builder Badge */}
                <div className="p-6 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] uppercase tracking-[0.04em] font-semibold h-6" 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        borderColor: '#B45309',
                        color: '#B45309'
                      }}
                    >
                      <Hammer className="w-3.5 h-3.5" strokeWidth={1.5} />
                      BUILDER
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    For those actively building their product.
                  </p>
                </div>

                {/* Scaler Badge */}
                <div className="p-6 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] uppercase tracking-[0.04em] font-semibold h-6" 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        borderColor: '#991B1B',
                        color: '#991B1B'
                      }}
                    >
                      <TrendingUp className="w-3.5 h-3.5" strokeWidth={1.5} />
                      SCALER
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Focused on growth and scaling operations.
                  </p>
                </div>

                {/* Geek Badge */}
                <div className="p-6 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] uppercase tracking-[0.04em] font-semibold h-6" 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        borderColor: '#4C1D95',
                        color: '#4C1D95'
                      }}
                    >
                      <Cpu className="w-3.5 h-3.5" strokeWidth={1.5} />
                      GEEK
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Deep technical deep-dives and advanced concepts.
                  </p>
                </div>
              </div>

              {/* Specification Details */}
              <div className="mt-8 p-6 bg-[#FAF9F6] border border-[#E5E5E0] rounded-lg">
                <h4 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-4" 
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                  Technical Specifications
                </h4>
                <ul className="space-y-2 text-[14px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>• Container: Transparent fill • 1px solid border • 6px radius</li>
                  <li>• Typography: Uppercase Sans-serif (Inter) • 11px • Wide tracking (0.04em)</li>
                  <li>• Icons: 14px size • 1.5px stroke • Outline only (no fills)</li>
                  <li>• Padding: 4px vertical • 8px horizontal • Height: 24px</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 6: Layout & Spacing */}
          <section id="layout" className="mb-32 max-w-[700px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Layout & Spacing
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Margins
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Very large vertical gaps (120px+) between major sections to create breathing room and hierarchy.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  The "Book" Column
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Limit text width to approximately 600-700px (60-75 characters per line) for optimal readability.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Dividers
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Full-width 1px lines in Taupe Grey (#E5E5E0) acting as chapter breaks between sections.
                </p>
              </div>
            </div>

            {/* Spacing Example */}
            <div className="mt-10 p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg">
              <div className="space-y-6">
                <div className="h-2 bg-[#5D1F2D] w-24 rounded"></div>
                <div className="h-2 bg-[#E5E5E0] w-full rounded"></div>
                <div className="h-2 bg-[#E5E5E0] w-3/4 rounded"></div>
                <div className="h-2 bg-[#E5E5E0] w-5/6 rounded"></div>
                <div className="h-px bg-[#E5E5E0] my-8"></div>
                <div className="h-2 bg-[#E5E5E0] w-full rounded"></div>
                <div className="h-2 bg-[#E5E5E0] w-2/3 rounded"></div>
              </div>
              <p className="text-[13px] text-[#4A4A4A] mt-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                Visual representation of spacing hierarchy
              </p>
            </div>

            {/* 8-Point Grid System */}
            <div className="mt-16 pt-16 border-t border-[#E5E5E0]">
              <h3 className="text-[24px] font-normal text-[#1C1C1E] mb-8" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                The 8-Point Grid System
              </h3>
              
              <p className="text-[16px] text-[#4A4A4A] leading-[1.7] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                To maintain visual rhythm and structural integrity, Faion Network utilizes a strict 8-point grid system. Every margin, padding, and dimension in the interface must be a multiple of 8.
              </p>
              
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E5E0] rounded-lg mb-10">
                <p className="text-[15px] text-[#1C1C1E] font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Why 8pt?
                </p>
                <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  It provides mathematical harmony and scales perfectly across all screen sizes.
                </p>
              </div>

              {/* Spacing Scale */}
              <h4 className="text-[20px] font-normal text-[#1C1C1E] mb-6" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Spacing Scale (The "Rhythm")
              </h4>
              
              <p className="text-[16px] text-[#4A4A4A] leading-[1.7] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                We use a specific set of spatial values to ensure consistency.
              </p>

              {/* Micro Spacing */}
              <div className="mb-10">
                <div className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-4" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  Micro Spacing (Internal Component Layout)
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      4px (0.5x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Minimal visual separation (e.g., Label to Input).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      8px (1x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Related elements (e.g., Icon to Text).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      16px (2x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Grouping elements within a card (e.g., Headline to Body).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      24px (3x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Standard padding for small components.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      32px (4x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Separation between unrelated groups within a card.
                    </p>
                  </div>
                </div>
              </div>

              {/* Macro Spacing */}
              <div className="mb-10">
                <div className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-4" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  Macro Spacing (Page Layout)
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      48px (6x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Major component separation.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      64px (8x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Standard Section gap (Mobile).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      80px (10x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Standard Section gap (Desktop).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      120px (15x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "Luxury Air" – used to separate major narrative blocks.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, monospace' }}>
                      160px (20x)
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Footer separation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Component Specifics */}
              <div>
                <h4 className="text-[20px] font-normal text-[#1C1C1E] mb-6" 
                    style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  Component Specifics
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Buttons
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Fixed height of 48px (Standard) or 56px (Large/Hero).
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Inputs
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Fixed height of 48px.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Cards
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Standard internal padding is 32px or 40px.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0 text-[15px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Columns
                    </div>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Gutter width is 24px or 32px.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-32"></div>

          {/* Section 7: Accessibility (WCAG 2.2 AA) */}
          <section id="accessibility" className="mb-32 max-w-[700px]">
            <h2 className="text-[40px] leading-[1.15] tracking-[-0.02em] font-normal text-[#1C1C1E] mb-8" 
                style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
              Accessibility (WCAG 2.2 AA)
            </h2>
            <p className="text-[18px] text-[#4A4A4A] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ensuring that our design system is accessible to all users is a core principle. We adhere to the Web Content Accessibility Guidelines (WCAG) 2.2 AA standards to make our products usable for people with a wide range of abilities.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Color Contrast
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  All text and interactive elements have sufficient color contrast to ensure readability for users with visual impairments.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Keyboard Navigation
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  All interactive elements are accessible via keyboard, allowing users to navigate and interact with the interface without a mouse.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Screen Reader Compatibility
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  The design system is compatible with screen readers, ensuring that users with visual impairments can understand and interact with the content.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Text Size and Font
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Text is presented in a readable font size and style, with options for users to adjust the size for better visibility.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Alternative Text for Images
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  All images include alternative text descriptions to convey their meaning to users who cannot see them.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#E5E5E0] mb-16"></div>

          {/* Footer Note */}
          <div className="text-center py-16">
            <p className="text-[15px] text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
              This documentation serves as the single source of truth for the Faion Network design system.
            </p>
            <p className="text-[13px] text-[#4A4A4A] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              For questions or contributions, contact the design team.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}