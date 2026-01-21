import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

// Pricing Page - "Digital Journal" Aesthetic
// Intellectual Luxury - Anthropic/Notion/Editorial Magazine style
export default function PricingPage({ onNavigate }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: 'FREE',
      description: 'Для некомерційної оцінки.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        '30% контенту безкоштовно',
        'Некомерційний MCP доступ',
        'Режим тільки для читання',
      ],
      buttonLabel: 'Почати оцінку',
      buttonStyle: 'secondary' as const,
      recommended: false,
    },
    {
      name: 'PLUS',
      description: 'Для соло-підприємців, що створюють продукти.',
      priceMonthly: 19,
      priceYearly: 182, // 20% discount
      features: [
        'Все з Free',
        'Всі 456 методологій',
        'Комерційні права',
        'Доступ до AI агента',
      ],
      buttonLabel: 'Отримати Plus',
      buttonStyle: 'primary' as const,
      recommended: true,
    },
    {
      name: 'PRO',
      description: 'Для агенцій та фрілансерів.',
      priceMonthly: 35,
      priceYearly: 336, // 20% discount
      features: [
        'Все з Plus',
        'SSO / SAML авторизація',
        'Права на клієнтські проєкти',
        'Пріоритетна підтримка',
      ],
      buttonLabel: 'Отримати Pro',
      buttonStyle: 'secondary' as const,
      recommended: false,
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Section A: The Headline */}
      <section className="px-8 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[64px] leading-[1.1] tracking-[-0.025em] mb-8 font-normal text-[#1C1C1E]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Інвестуй у свою автономність.
          </h1>
          
          <p className="text-[20px] text-[#4A4A4A] leading-[1.5] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            Обери інфраструктуру, що відповідає твоєму масштабу. Скасуй у будь-який момент.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 text-[15px] font-medium rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FAF9F6] text-[#5D1F2D]'
                  : 'text-[#4A4A4A]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Щомісячно
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 text-[15px] font-medium rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#FAF9F6] text-[#5D1F2D]'
                  : 'text-[#4A4A4A]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Щорічно
              <span className="ml-2 text-[13px] text-[#5D1F2D]">(Знижка 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section B: The Pricing Grid */}
      <section className="px-8 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {plans.map((plan, idx) => {
              const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
              const displayPrice = billingCycle === 'yearly' ? Math.round(price / 12) : price;
              
              return (
                <div 
                  key={idx} 
                  className={`relative p-10 bg-[#FFFFFF] border rounded-xl ${
                    plan.recommended ? 'border-[#5D1F2D]' : 'border-[#E5E5E0]'
                  }`}
                >
                  {/* Recommended Badge */}
                  {plan.recommended && (
                    <div className="absolute -top-3 left-10 px-3 py-1 bg-[#5D1F2D] text-[#FFFFFF] text-[11px] font-semibold uppercase tracking-wider rounded-md" 
                         style={{ fontFamily: 'Inter, sans-serif' }}>
                      Recommended
                    </div>
                  )}
                  
                  {/* Plan Name */}
                  <div className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#4A4A4A] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.name}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-4">
                    <span className="text-[56px] leading-[1] font-normal text-[#1C1C1E]" 
                          style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                      ${displayPrice}
                    </span>
                    <span className="text-[18px] text-[#4A4A4A] ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      /mo
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-8 min-h-[48px]" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.description}
                  </p>
                  
                  {/* Button */}
                  <button 
                    className={`w-full py-3.5 text-[15px] font-medium rounded-lg transition-all mb-8 ${
                      plan.buttonStyle === 'primary'
                        ? 'bg-[#5D1F2D] text-[#FFFFFF] hover:bg-[#701C2A]'
                        : 'bg-transparent text-[#1C1C1E] border border-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-[#FFFFFF]'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {plan.buttonLabel}
                  </button>
                  
                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#5D1F2D]" strokeWidth={2.5} />
                        </div>
                        <span className="text-[15px] text-[#4A4A4A] leading-[1.5]" 
                              style={{ fontFamily: 'Inter, sans-serif' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section C: The Enterprise Banner */}
      <section className="px-8 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative p-12 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#4A4A4A] mb-3" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  ULTIMATE
                </div>
                <h3 className="text-[32px] leading-[1.2] font-normal text-[#1C1C1E] mb-2" 
                    style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  Потрібно 20+ місць для команди?
                </h3>
                <p className="text-[17px] text-[#4A4A4A] leading-[1.6]" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                  Індивідуальне ціноутворення, виділена підтримка та розширені функції безпеки.
                </p>
              </div>
              
              <div className="flex-shrink-0 ml-12">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-medium bg-transparent text-[#1C1C1E] border border-[#1C1C1E] rounded-lg hover:bg-[#1C1C1E] hover:text-[#FFFFFF] transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-8 py-24 border-t border-[#E5E5E0]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[42px] leading-[1.15] tracking-[-0.02em] mb-4 font-normal text-[#1C1C1E] text-center" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Що включено
          </h2>
          <p className="text-[17px] text-[#4A4A4A] leading-[1.6] mb-16 text-center" 
             style={{ fontFamily: 'Inter, sans-serif' }}>
            Усі плани включають базовий доступ до інфраструктури Faion.
          </p>
          
          <div className="space-y-6">
            {[
              { feature: 'Model Context Protocol (MCP) Access', free: true, plus: true, pro: true },
              { feature: 'Multilingual Support (8 languages)', free: true, plus: true, pro: true },
              { feature: 'Full Methodology Library (456 methods)', free: false, plus: true, pro: true },
              { feature: 'AI Agent Integration', free: false, plus: true, pro: true },
              { feature: 'Commercial Usage Rights', free: false, plus: true, pro: true },
              { feature: 'SSO / SAML Authentication', free: false, plus: false, pro: true },
              { feature: 'Client Project Rights', free: false, plus: false, pro: true },
              { feature: 'Priority Support', free: false, plus: false, pro: true },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-8 items-center py-4 border-b border-[#E5E5E0]">
                <div className="col-span-1 text-[15px] font-medium text-[#1C1C1E]" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.feature}
                </div>
                <div className="text-center">
                  {item.free ? (
                    <Check className="w-5 h-5 text-[#5D1F2D] mx-auto" strokeWidth={2.5} />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
                <div className="text-center">
                  {item.plus ? (
                    <Check className="w-5 h-5 text-[#5D1F2D] mx-auto" strokeWidth={2.5} />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
                <div className="text-center">
                  {item.pro ? (
                    <Check className="w-5 h-5 text-[#5D1F2D] mx-auto" strokeWidth={2.5} />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 border-t border-[#E5E5E0]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[42px] leading-[1.15] tracking-[-0.02em] mb-12 font-normal text-[#1C1C1E]" 
              style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
            Часті запитання
          </h2>
          
          <div className="space-y-8">
            {[
              {
                q: 'Чи можу я змінити план пізніше?',
                a: 'Так. Ви можете перейти на вищий або нижчий план у будь-який момент. Зміни набувають чинності негайно, і ми пропорційно розрахуємо різницю.',
              },
              {
                q: 'Які способи оплати ви приймаєте?',
                a: 'Ми приймаємо всі основні кредитні картки та пропонуємо виставлення рахунків для річних корпоративних планів.',
              },
              {
                q: 'Чи є безкоштовний пробний період?',
                a: 'Plan FREE надає постійний доступ до 30% контенту для оцінки. Кредитна картка не потрібна.',
              },
              {
                q: 'Що станеться, якщо я скасую підписку?',
                a: 'Ви зберігаєте доступ до кінця вашого платіжного періоду. Ваші дані зберігаються протягом 90 днів, якщо ви вирішите повернутися.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="pb-8 border-b border-[#E5E5E0]">
                <h3 className="text-[20px] font-normal text-[#1C1C1E] mb-3" 
                    style={{ fontFamily: 'Georgia, Merriweather, serif' }}>
                  {faq.q}
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-[1.6]" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}