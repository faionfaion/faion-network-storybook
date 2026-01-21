import { ArrowRight, Book, Server, Layers, Globe } from 'lucide-react';

// Version 5: "Burgundy & Cream Academic" - Historical Knowledge
// Inspired by Anthropic (Claude.ai), Notion, academic journals
// Deep Burgundy accent, warm paper, serif-driven, intellectual
export default function Version5() {
  return (
    <div className="bg-[#FAF9F6] text-[#2D2D2D] relative overflow-hidden min-h-screen">
      {/* Header - Minimal */}
      <header className="relative z-40 border-b border-[#E5E5E0]">
        <nav className="max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[16px] font-medium text-[#2D2D2D] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Faion Network
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[15px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors">Методології</a>
            <a href="#" className="text-[15px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors">AI Agent</a>
            <a href="#" className="text-[15px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors">Pricing</a>
            <button className="px-6 py-2.5 text-[15px] font-medium bg-[#5D1F2D] text-[#FAF9F6] rounded-lg hover:bg-[#701C2A] transition-all">
              Почати
            </button>
          </div>
        </nav>
      </header>

      {/* Hero - Editorial Layout */}
      <section className="relative px-8 pt-20 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-16 items-center">
            {/* Left - Text */}
            <div className="col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[#F2F0E9] rounded-md border border-[#E5E5E0]">
                <div className="w-1.5 h-1.5 bg-[#5D1F2D] rounded-full"></div>
                <span className="text-[13px] text-[#6B7280] font-medium">
                  AI Infrastructure Platform v2.0
                </span>
              </div>
              
              <h1 className="text-[72px] leading-[1.05] tracking-[-0.02em] mb-8 font-normal text-[#2D2D2D]" 
                  style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                Єдиний гайд для <span className="text-[#5D1F2D]">соло-підприємців</span>
              </h1>
              
              <p className="text-[19px] text-[#6B7280] leading-[1.6] mb-10 max-w-[560px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Виходь на $20K+/місяць за 18-24 місяці з реальним AI фреймворком. 456 методологій, 1 AI агент, доставка через MCP сервер.
              </p>
              
              <div className="flex items-center gap-4">
                <button className="group inline-flex items-center gap-2 px-7 py-3.5 text-[16px] font-medium bg-[#5D1F2D] text-[#FAF9F6] rounded-lg hover:bg-[#701C2A] transition-all">
                  Отримати доступ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                </button>
                <button className="inline-flex items-center gap-2 px-7 py-3.5 text-[16px] font-medium bg-transparent text-[#5D1F2D] border border-[#5D1F2D] rounded-lg hover:bg-[#5D1F2D]/5 transition-all">
                  Дізнатися більше
                </button>
              </div>
            </div>
            
            {/* Right - Burgundy Line Diagram */}
            <div className="col-span-5">
              <div className="relative h-[480px] flex items-center justify-center">
                {/* Scientific line art in burgundy */}
                <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central node */}
                  <circle cx="200" cy="240" r="60" stroke="#5D1F2D" strokeWidth="1.5" fill="#FFFFFF" />
                  <text x="200" y="245" textAnchor="middle" fill="#2D2D2D" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="500">
                    Faion
                  </text>
                  
                  {/* Outer nodes */}
                  {/* Methodology node - top left */}
                  <circle cx="80" cy="120" r="35" stroke="#5D1F2D" strokeWidth="1.5" fill="#F2F0E9" />
                  <text x="80" y="115" textAnchor="middle" fill="#5D1F2D" fontSize="20" fontFamily="Georgia, serif" fontWeight="600">
                    456
                  </text>
                  <text x="80" y="130" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter, sans-serif">
                    методологій
                  </text>
                  <line x1="115" y1="150" x2="165" y2="205" stroke="#5D1F2D" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* AI Agent node - top right */}
                  <circle cx="320" cy="120" r="35" stroke="#5D1F2D" strokeWidth="1.5" fill="#F2F0E9" />
                  <text x="320" y="115" textAnchor="middle" fill="#5D1F2D" fontSize="20" fontFamily="Georgia, serif" fontWeight="600">
                    1
                  </text>
                  <text x="320" y="130" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter, sans-serif">
                    AI агент
                  </text>
                  <line x1="285" y1="150" x2="235" y2="205" stroke="#5D1F2D" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* SDD node - bottom left */}
                  <circle cx="80" cy="360" r="35" stroke="#5D1F2D" strokeWidth="1.5" fill="#F2F0E9" />
                  <text x="80" y="355" textAnchor="middle" fill="#5D1F2D" fontSize="20" fontFamily="Georgia, serif" fontWeight="600">
                    14
                  </text>
                  <text x="80" y="370" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter, sans-serif">
                    SDD навичок
                  </text>
                  <line x1="115" y1="330" x2="165" y2="275" stroke="#5D1F2D" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Languages node - bottom right */}
                  <circle cx="320" cy="360" r="35" stroke="#5D1F2D" strokeWidth="1.5" fill="#F2F0E9" />
                  <text x="320" y="355" textAnchor="middle" fill="#5D1F2D" fontSize="20" fontFamily="Georgia, serif" fontWeight="600">
                    8
                  </text>
                  <text x="320" y="370" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="Inter, sans-serif">
                    мов
                  </text>
                  <line x1="285" y1="330" x2="235" y2="275" stroke="#5D1F2D" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Annotations - notebook style */}
                  <text x="10" y="30" fill="#6B7280" fontSize="9" fontFamily="Inter, sans-serif" fontStyle="italic">
                    Infrastructure architecture
                  </text>
                  <line x1="10" y1="35" x2="120" y2="35" stroke="#E5E5E0" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Burgundy Numbers */}
      <section className="px-8 py-20 border-t border-[#E5E5E0]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-12">
            {[
              { num: '456', label: 'Методологій', icon: Book },
              { num: '1', label: 'AI Agent', icon: Server },
              { num: '14', label: 'SDD Skills', icon: Layers },
              { num: '8', label: 'Languages', icon: Globe },
            ].map((stat, idx) => (
              <div key={idx} className="relative">
                <stat.icon className="w-7 h-7 text-[#5D1F2D] mb-4" strokeWidth={1.5} />
                <div className="text-[56px] leading-[1] mb-2 font-normal text-[#5D1F2D]" 
                     style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  {stat.num}
                </div>
                <div className="text-[15px] text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Cardstock with Burgundy Accents */}
      <section className="px-8 py-20 border-t border-[#E5E5E0]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[42px] leading-[1.15] tracking-[-0.015em] mb-3 font-normal text-[#2D2D2D]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Що всередині
          </h2>
          <p className="text-[17px] text-[#6B7280] leading-[1.6] mb-12 max-w-[600px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Комплексна система знань, побудована для реальних результатів.
          </p>
          
          <div className="space-y-6">
            {[
              { 
                title: 'Перевірений шлях', 
                desc: 'Not random advice. A structured plan for 18-24 months with proven frameworks and real case studies from successful solopreneurs.',
                active: true
              },
              { 
                title: 'Реальний AI', 
                desc: 'Autonomous agent combined with SDD framework for context-aware assistance. It integrates directly into your workflow via MCP protocol.',
                active: false
              },
              { 
                title: 'Повне покриття', 
                desc: 'Product development, engineering, design systems, and marketing—all integrated in one comprehensive knowledge base.',
                active: false
              },
              { 
                title: 'Глобальний масштаб', 
                desc: 'Multilingual support with 8 languages and frameworks designed for global market access from day one.',
                active: false
              },
            ].map((feature, idx) => (
              <div key={idx} className={`relative p-8 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl transition-all hover:border-[#5D1F2D] ${feature.active ? 'border-[#5D1F2D]' : ''}`}>
                {/* Thin burgundy accent line at top for active card */}
                {feature.active && (
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#5D1F2D]"></div>
                )}
                <h3 className="text-[24px] mb-3 font-normal text-[#2D2D2D]" 
                    style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#6B7280] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCP Section - Academic Style */}
      <section className="px-8 py-24 border-t border-[#E5E5E0] bg-[#F2F0E9]">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-4 text-[13px] tracking-wide uppercase text-[#6B7280] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            Infrastructure
          </div>
          
          <h2 className="text-[48px] leading-[1.15] tracking-[-0.015em] mb-6 font-normal text-[#2D2D2D]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Це не курс.<br/>Це <span className="text-[#5D1F2D]">інфраструктура знань</span>.
          </h2>
          
          <p className="text-[18px] text-[#6B7280] leading-[1.6] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            Content is delivered directly into your workflow via Model Context Protocol (MCP), ensuring no piracy and instant updates. Think of it as a living knowledge base that evolves with you.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Security', value: 'End-to-end encrypted' },
              { label: 'Updates', value: 'Real-time sync' },
              { label: 'Protocol', value: 'MCP Standard' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#E5E5E0] rounded-lg">
                <div className="text-[13px] text-[#6B7280] mb-2 uppercase tracking-wide font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.label}
                </div>
                <div className="text-[16px] font-medium text-[#2D2D2D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Technical diagram - burgundy line art */}
          <div className="mt-12 p-8 bg-[#FAF9F6] border border-[#E5E5E0] rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-20 h-20 border-2 border-[#5D1F2D] rounded-lg mb-2 flex items-center justify-center mx-auto">
                  <span className="text-[13px] font-medium text-[#2D2D2D]" style={{ fontFamily: 'Inter, sans-serif' }}>USER</span>
                </div>
                <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>Your environment</div>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="h-[2px] bg-[#5D1F2D] relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[11px] text-[#6B7280] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                    MCP Protocol
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5D1F2D] rounded-full"></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#5D1F2D] rounded-lg mb-2 flex items-center justify-center mx-auto">
                  <span className="text-[13px] font-medium text-[#FAF9F6]" style={{ fontFamily: 'Inter, sans-serif' }}>FAION</span>
                </div>
                <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>Knowledge base</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Content */}
      <section className="px-8 py-20 border-t border-[#E5E5E0]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[42px] leading-[1.15] tracking-[-0.015em] mb-3 font-normal text-[#2D2D2D]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            База методологій
          </h2>
          <p className="text-[17px] text-[#6B7280] leading-[1.6] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            239 методологій організовані в 5 основних категорій для повного циклу розробки продукту.
          </p>
          
          <div className="space-y-4">
            {[
              { num: '29', label: 'Research', desc: 'Market analysis, user research, competitive intelligence' },
              { num: '82', label: 'Development', desc: 'Architecture, implementation, deployment strategies' },
              { num: '81', label: 'Marketing', desc: 'Growth loops, positioning, channel optimization' },
              { num: '30', label: 'AI/ML', desc: 'Model integration, prompt engineering, RAG systems' },
              { num: '17', label: 'SDD', desc: 'Solution-Driven Development framework integration' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-[#FFFFFF] border border-[#E5E5E0] rounded-lg hover:border-[#5D1F2D] transition-all">
                <div className="text-[40px] leading-[1] font-normal text-[#5D1F2D] flex-shrink-0" 
                     style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  {item.num}
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-[18px] font-medium text-[#2D2D2D] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </div>
                  <div className="text-[15px] text-[#6B7280] leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simple & Clear */}
      <section className="px-8 py-24 border-t border-[#E5E5E0]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[42px] leading-[1.15] tracking-[-0.015em] mb-3 font-normal text-[#2D2D2D] text-center" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Оберіть свій план
          </h2>
          <p className="text-[17px] text-[#6B7280] leading-[1.6] mb-16 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Всі плани включають доступ до повної бази методологій та AI агента.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { tier: 'Free', price: '$0', features: ['30% вмісту', 'Тільки читання', '8 мов'], },
              { tier: 'Plus', price: '$19', features: ['100% вмісту', 'Комерційне використання', 'MCP + AI агент'], featured: true },
              { tier: 'Pro', price: '$35', features: ['Все з Plus', 'SSO інтеграція', 'Клієнтські проєкти'] },
            ].map((plan, idx) => (
              <div key={idx} className={`relative p-8 bg-[#FFFFFF] border rounded-xl ${plan.featured ? 'border-[#5D1F2D] shadow-sm' : 'border-[#E5E5E0]'}`}>
                {plan.featured && (
                  <>
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#5D1F2D]"></div>
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-[#5D1F2D] text-[#FAF9F6] text-[12px] font-medium rounded-md">
                      Рекомендуємо
                    </div>
                  </>
                )}
                
                <div className="text-[15px] text-[#6B7280] mb-3 uppercase tracking-wide font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {plan.tier}
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-[48px] font-normal text-[#2D2D2D]" style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                    {plan.price}
                  </span>
                  <span className="text-[17px] text-[#6B7280] ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>/міс</span>
                </div>
                <ul className="space-y-3 text-[15px] text-[#6B7280] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#5D1F2D] rounded-full mt-2 flex-shrink-0"></div>
                      <div>{f}</div>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-[15px] font-medium rounded-lg transition-all ${
                  plan.featured
                    ? 'bg-[#5D1F2D] text-[#FAF9F6] hover:bg-[#701C2A]'
                    : 'bg-transparent text-[#5D1F2D] border border-[#5D1F2D] hover:bg-[#5D1F2D]/5'
                }`}>
                  Обрати {plan.tier}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="border-t border-[#E5E5E0] py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Faion Network
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy</a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Terms</a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#5D1F2D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
