import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import '../components/ui/Accordion.css';

const meta: Meta<typeof Accordion> = {
  title: 'FAION/Core UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Accordion component following the Faion "Digital Journal" aesthetic.

## Features
- Typography hierarchy for triggers
- Taupe Grey borders between items
- Smooth expand/collapse animation
- Card variant for FAQ sections
- Burgundy hover state

## Sub-components
- **Accordion**: Root wrapper (type="single" or "multiple")
- **AccordionItem**: Individual panel
- **AccordionTrigger**: Clickable header
- **AccordionContent**: Expandable content
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div className="fn-accordion-demo">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Що таке дизайн-система?</AccordionTrigger>
          <AccordionContent>
            Дизайн-система — це набір стандартів, компонентів та інструкцій, які забезпечують
            узгодженість і послідовність у дизайні та розробці продуктів.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Яка філософія Faion Network?</AccordionTrigger>
          <AccordionContent>
            "The Digital Journal" — естетика академічних журналів та преміальної друкованої
            продукції. Відмова від tech startup трендів на користь чіткості та авторитетності.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Які шрифти використовуються?</AccordionTrigger>
          <AccordionContent>
            Dual-Font System: Serif (Georgia/Merriweather) для заголовків і цитат,
            Sans-Serif (Inter) для основного тексту та UI елементів.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const MultipleOpen: Story = {
  name: 'Multiple Items Open',
  render: () => (
    <div className="fn-accordion-demo">
      <Accordion type="multiple">
        <AccordionItem value="colors">
          <AccordionTrigger>Кольори</AccordionTrigger>
          <AccordionContent>
            <ul className="fn-accordion-list">
              <li>Warm Alabaster (#FAF9F6) — основний фон</li>
              <li>Pure Cream (#FFFFFF) — картки</li>
              <li>Deep Burgundy (#5D1F2D) — акцент</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="typography">
          <AccordionTrigger>Типографіка</AccordionTrigger>
          <AccordionContent>
            <ul className="fn-accordion-list">
              <li>H1: 48px Serif</li>
              <li>H2: 36px Serif</li>
              <li>Body: 16px Sans-Serif</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spacing">
          <AccordionTrigger>Відступи</AccordionTrigger>
          <AccordionContent>
            <p>8-точкова система: всі відступи кратні 8px.</p>
            <p style={{ marginTop: '8px' }}>Micro: 4, 8, 16, 24, 32px</p>
            <p>Macro: 48, 64, 80, 120, 160px</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const FAQ: Story = {
  name: 'FAQ Style',
  render: () => (
    <div className="fn-faq-demo">
      <h2 className="fn-faq-demo__title">Часті питання</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="q1" className="fn-accordion-item--card">
          <AccordionTrigger>Як розпочати роботу з дизайн-системою?</AccordionTrigger>
          <AccordionContent>
            Почніть з вивчення документації та принципів дизайну. Потім імпортуйте
            необхідні компоненти та застосуйте кольорову палітру та типографіку.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="fn-accordion-item--card">
          <AccordionTrigger>Чи підтримується темний режим?</AccordionTrigger>
          <AccordionContent>
            Ні. Дизайн-система свідомо відмовляється від темного режиму на користь
            теплої, паперової естетики "Digital Journal".
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="fn-accordion-item--card">
          <AccordionTrigger>Які стандарти доступності підтримуються?</AccordionTrigger>
          <AccordionContent>
            Дизайн-система відповідає WCAG 2.2 AA: контрастність кольорів,
            клавіатурна навігація, сумісність зі скрін-рідерами.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-faq-demo {
            background-color: #FAF9F6;
            padding: 32px;
            max-width: 700px;
          }
          .fn-faq-demo__title {
            font-family: Georgia, serif;
            font-size: 32px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};
