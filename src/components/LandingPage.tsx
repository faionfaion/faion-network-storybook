import { ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-iw7i8muket';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { DisplayH1, HeadingH2, HeadingH3, BodyText, Label, StatNumber } from './ui/Typography';
import { Badge } from './ui/Badge';
import Header from './Header';
import Footer from './Footer';
import { Check } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Navigation Header */}
      <Header onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="px-8 pt-24 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-32 items-center">
            {/* Left Column */}
            <div>
              <Badge variant="neutral" className="mb-8">• AI Infrastructure Platform v2.0</Badge>
              <DisplayH1 className="mb-6">
                Єдиний гайд для соло-підприємців
              </DisplayH1>
              <BodyText className="text-[18px] mb-10">
                Виходь на $20K+/місяць за 18-24 місяці з реальним AI фреймворком. 456 методологій, 1 AI агент, досавка через MCP сервер.
              </BodyText>
              <div className="flex gap-4">
                <Button variant="primary">Отримати доступ</Button>
                <Button variant="secondary">Дізнатися більше</Button>
              </div>
            </div>

            {/* Right Column - Node Diagram */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-[#5D1F2D] bg-[#FFFFFF] flex items-center justify-center z-10">
                  <span className="text-[14px] font-medium text-[#5D1F2D]" style={{ fontFamily: 'Inter, sans-serif' }}>Faion</span>
                </div>

                {/* Top Node - 456 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full border-2 border-[#5D1F2D] bg-[#FFFFFF] flex flex-col items-center justify-center">
                    <span className="text-[20px] font-normal text-[#5D1F2D]" style={{ fontFamily: 'Georgia, serif' }}>456</span>
                  </div>
                  <div className="text-[12px] text-[#4A4A4A] text-center mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>методологій</div>
                  {/* Dotted line to center */}
                  <svg className="absolute top-20 left-1/2 -translate-x-1/2" width="2" height="80">
                    <line x1="1" y1="0" x2="1" y2="80" stroke="#E5E5E0" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Right Node - 1 */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border-2 border-[#5D1F2D] bg-[#FFFFFF] flex flex-col items-center justify-center">
                    <span className="text-[20px] font-normal text-[#5D1F2D]" style={{ fontFamily: 'Georgia, serif' }}>1</span>
                  </div>
                  <div className="text-[12px] text-[#4A4A4A] text-center mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>AI агент</div>
                  {/* Dotted line to center */}
                  <svg className="absolute top-1/2 right-20 -translate-y-1/2" width="80" height="2">
                    <line x1="0" y1="1" x2="80" y2="1" stroke="#E5E5E0" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Bottom Node - 14 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="text-[12px] text-[#4A4A4A] text-center mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>SDD навичок</div>
                  <div className="w-20 h-20 rounded-full border-2 border-[#5D1F2D] bg-[#FFFFFF] flex flex-col items-center justify-center">
                    <span className="text-[20px] font-normal text-[#5D1F2D]" style={{ fontFamily: 'Georgia, serif' }}>14</span>
                  </div>
                  {/* Dotted line to center */}
                  <svg className="absolute bottom-20 left-1/2 -translate-x-1/2" width="2" height="80">
                    <line x1="1" y1="0" x2="1" y2="80" stroke="#E5E5E0" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Left Node - 8 */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border-2 border-[#5D1F2D] bg-[#FFFFFF] flex flex-col items-center justify-center">
                    <span className="text-[20px] font-normal text-[#5D1F2D]" style={{ fontFamily: 'Georgia, serif' }}>8</span>
                  </div>
                  <div className="text-[12px] text-[#4A4A4A] text-center mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>мов</div>
                  {/* Dotted line to center */}
                  <svg className="absolute top-1/2 left-20 -translate-y-1/2" width="80" height="2">
                    <line x1="0" y1="1" x2="80" y2="1" stroke="#E5E5E0" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-t border-[#E5E5E0] py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.pff627f0} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                </svg>
              </div>
              <StatNumber className="mb-2">456</StatNumber>
              <BodyText className="text-[15px]">Методологій</BodyText>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.pbb2100} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                  <path d={svgPaths.p3876e100} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                </svg>
              </div>
              <StatNumber className="mb-2">1</StatNumber>
              <BodyText className="text-[15px]">AI Agent</BodyText>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p331b4f00} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                  <path d={svgPaths.p12782a80} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                  <path d={svgPaths.p1cc46d80} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                </svg>
              </div>
              <StatNumber className="mb-2">14</StatNumber>
              <BodyText className="text-[15px]">SDD Skills</BodyText>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p1fa66600} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                  <path d={svgPaths.p1d189680} stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                  <path d="M2.33333 14H25.6667" stroke="#5D1F2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                </svg>
              </div>
              <StatNumber className="mb-2">8</StatNumber>
              <BodyText className="text-[15px]">Languages</BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="border-t border-[#E5E5E0] py-20">
        <div className="max-w-[800px] mx-auto px-8">
          <HeadingH2 className="mb-4">Що всередині</HeadingH2>
          <BodyText className="text-[17px] mb-12">
            Комплексна система знань, побудована для реальних результатів.
          </BodyText>

          <div className="space-y-6">
            <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg transition-all hover:border-[#5D1F2D] hover:shadow-[0px_12px_24px_rgba(93,31,45,0.1)] hover:-translate-y-1 cursor-pointer">
              <HeadingH3 className="mb-3">Перевірений шлях</HeadingH3>
              <BodyText>
                Not random advice. A structured plan for 18-24 months with proven frameworks and real case studies from successful solopreneurs.
              </BodyText>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg transition-all hover:border-[#5D1F2D] hover:shadow-[0px_12px_24px_rgba(93,31,45,0.1)] hover:-translate-y-1 cursor-pointer">
              <HeadingH3 className="mb-3">Реальний AI</HeadingH3>
              <BodyText>
                Autonomous agent combined with SDD framework for context-aware assistance. It integrates directly into your workflow via MCP protocol.
              </BodyText>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg transition-all hover:border-[#5D1F2D] hover:shadow-[0px_12px_24px_rgba(93,31,45,0.1)] hover:-translate-y-1 cursor-pointer">
              <HeadingH3 className="mb-3">Повне покриття</HeadingH3>
              <BodyText>
                Product development, engineering, design systems, and marketing—all integrated in one comprehensive knowledge base.
              </BodyText>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg transition-all hover:border-[#5D1F2D] hover:shadow-[0px_12px_24px_rgba(93,31,45,0.1)] hover:-translate-y-1 cursor-pointer">
              <HeadingH3 className="mb-3">Глобальний масштаб</HeadingH3>
              <BodyText>
                Multilingual support with 8 languages and frameworks designed for global market access from day one.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="border-t border-[#E5E5E0] py-20">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="text-center mb-16">
            <HeadingH2 className="text-[48px] mb-4">
              Це не курс.<br />Це інфраструктура знань.
            </HeadingH2>
            <BodyText className="text-[17px] max-w-[640px] mx-auto">
              Courses go outdated in 12-18 months. Our infrastructure stays current. Like Github (2008), Figma (2016), Anthropic (2021) — tools that become indispensable in your workflow.
            </BodyText>
          </div>

          {/* Process Diagram - Centered with Equal Spacing */}
          <div className="flex items-center justify-center gap-16 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-[1.5px] border-[#1C1C1E] bg-[#FFFFFF] flex items-center justify-center">
                <span className="text-[14px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'Inter, sans-serif' }}>USER</span>
              </div>
            </div>

            <div className="w-32 h-[1.5px] border-t border-dashed border-[#1C1C1E]" />

            <div className="text-center">
              <div className="w-20 h-20 rounded-lg border-[1.5px] border-[#1C1C1E] bg-[#FFFFFF] flex items-center justify-center">
                <span className="text-[11px] font-medium text-[#1C1C1E] text-center leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>MCP</span>
              </div>
            </div>

            <div className="w-32 h-[1.5px] border-t border-dashed border-[#1C1C1E]" />

            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-[1.5px] border-[#5D1F2D] bg-[#5D1F2D] flex items-center justify-center">
                <span className="text-[14px] font-medium text-[#FFFFFF]" style={{ fontFamily: 'Inter, sans-serif' }}>FAION</span>
              </div>
            </div>
          </div>

          {/* Email Signup - Fixed Width & Height */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-4 w-[720px]">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 h-12 px-6 text-[15px] bg-[#FFFFFF] border border-[#9CA3AF] rounded-lg focus:outline-none focus:border-[#5D1F2D] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <Button variant="primary">
                Приєднатися
              </Button>
            </div>
          </div>

          {/* Info Grid - Aligned to Form Width */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 w-[720px]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-2" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  FOR WHO?
                </div>
                <BodyText className="text-[16px] text-[#1C1C1E]">Senior інженери</BodyText>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-2" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  WHO STAYS?
                </div>
                <BodyText className="text-[16px] text-[#1C1C1E]">Realists, not dreamers</BodyText>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#4A4A4A] mb-2" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  TIMELINE?
                </div>
                <BodyText className="text-[16px] text-[#1C1C1E]">18-24 months</BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Database */}
      <section className="border-t border-[#E5E5E0] py-20">
        <div className="max-w-[800px] mx-auto px-8">
          <HeadingH2 className="mb-4">База методологій</HeadingH2>
          <BodyText className="text-[17px] mb-12">
            Структурована база знань охоплює всі етапи від ідеї до масштабування.
          </BodyText>

          <div className="space-y-4">
            {[
              { number: '29', label: 'Research', desc: 'User interviews, competitive analysis, problem validation' },
              { number: '82', label: 'Development', desc: 'Engineering practices, architecture patterns, code quality' },
              { number: '81', label: 'Marketing', desc: 'Go-to-market strategies, growth tactics, positioning' },
              { number: '30', label: 'AI/ML', desc: 'Model deployment, prompt engineering, AI integration' },
              { number: '17', label: 'SDD', desc: 'Solopreneur Decision-making Design framework' }
            ].map((item, idx) => (
              <Card key={idx} className="flex items-center gap-8">
                <StatNumber className="text-[48px] min-w-[80px]">{item.number}</StatNumber>
                <div className="flex-1">
                  <HeadingH3 className="text-[20px] mb-1">{item.label}</HeadingH3>
                  <BodyText className="text-[15px]">{item.desc}</BodyText>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-t border-[#E5E5E0] py-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <HeadingH2 className="text-center mb-4">Оберіть свій план</HeadingH2>
          <BodyText className="text-center text-[17px] mb-12">
            Transparent pricing. No hidden fees. Cancel anytime.
          </BodyText>

          <div className="grid grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="relative p-10 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl">
              {/* Plan Name */}
              <div className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#4A4A4A] mb-3" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                FREE
              </div>
              
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-[56px] leading-[1] font-normal text-[#1C1C1E]" 
                      style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  $0
                </span>
                <span className="text-[18px] text-[#4A4A4A] ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  /mo
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-8 min-h-[48px]" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                For non-commercial evaluation.
              </p>
              
              {/* Button */}
              <button 
                className="w-full py-3.5 text-[15px] font-medium rounded-lg transition-all mb-8 bg-transparent text-[#1C1C1E] border border-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-[#FFFFFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Start Evaluation
              </button>
              
              {/* Features */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    30% of content free
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Non-commercial MCP access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Read-only mode
                  </span>
                </li>
              </ul>
            </div>

            {/* Plus Plan - Recommended */}
            <div className="relative p-10 bg-[#FFFFFF] border border-[#5D1F2D] rounded-xl">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-10 px-3 py-1 bg-[#5D1F2D] text-[#FFFFFF] text-[11px] font-semibold uppercase tracking-wider rounded-md" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                Recommended
              </div>
              
              {/* Plan Name */}
              <div className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#4A4A4A] mb-3" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                PLUS
              </div>
              
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-[56px] leading-[1] font-normal text-[#1C1C1E]" 
                      style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  $19
                </span>
                <span className="text-[18px] text-[#4A4A4A] ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  /mo
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-8 min-h-[48px]" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                For solopreneurs building products.
              </p>
              
              {/* Button */}
              <button 
                className="w-full py-3.5 text-[15px] font-medium rounded-lg transition-all mb-8 bg-[#5D1F2D] text-[#FFFFFF] hover:bg-[#701C2A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Plus Access
              </button>
              
              {/* Features */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Everything in Free
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Full 456 Methodologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Commercial Rights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    AI Agent Access
                  </span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative p-10 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl">
              {/* Plan Name */}
              <div className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#4A4A4A] mb-3" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                PRO
              </div>
              
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-[56px] leading-[1] font-normal text-[#1C1C1E]" 
                      style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  $35
                </span>
                <span className="text-[18px] text-[#4A4A4A] ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  /mo
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-8 min-h-[48px]" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                For agencies and freelancers.
              </p>
              
              {/* Button */}
              <button 
                className="w-full py-3.5 text-[15px] font-medium rounded-lg transition-all mb-8 bg-transparent text-[#1C1C1E] border border-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-[#FFFFFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Pro
              </button>
              
              {/* Features */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Everything in Plus
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    SSO / SAML Login
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Client Project Rights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    Priority Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#E5E5E0] py-20">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <HeadingH2 className="text-[48px] mb-4">
            Це не курс.<br />Це інфраструктура знань.
          </HeadingH2>
          <BodyText className="text-[17px] mb-10 max-w-[600px] mx-auto">
            Почніть будувати свій бізнес на перевірених методологіях. Приєднуйтесь до сотень соло-підприємців, які вже досягли результатів.
          </BodyText>
          <Button variant="primary">Почати зараз</Button>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}