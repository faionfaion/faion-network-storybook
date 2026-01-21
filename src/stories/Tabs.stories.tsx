import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import '../components/ui/Tabs.css';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tab navigation component styled with Faion design system colors. Clean, minimal appearance with burgundy active state. Pure CSS implementation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div className="fn-tabs-demo">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Огляд</TabsTrigger>
          <TabsTrigger value="specs">Специфікації</TabsTrigger>
          <TabsTrigger value="examples">Приклади</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Огляд компонента</h3>
            <p className="fn-tabs-panel__text">
              Загальна інформація про компонент та його призначення в дизайн-системі.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="specs" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Технічні специфікації</h3>
            <p className="fn-tabs-panel__text">
              Детальні параметри: розміри, відступи, кольори, типографіка.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Приклади використання</h3>
            <p className="fn-tabs-panel__text">
              Код та демонстрації різних варіантів застосування.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-tabs-demo {
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

export const UnderlineStyle: Story = {
  name: 'Underline Style',
  render: () => (
    <div className="fn-tabs-demo">
      <Tabs defaultValue="colors">
        <TabsList className="fn-tabs-list--underline">
          <TabsTrigger value="colors" className="fn-tabs-trigger--underline">Кольори</TabsTrigger>
          <TabsTrigger value="typography" className="fn-tabs-trigger--underline">Типографіка</TabsTrigger>
          <TabsTrigger value="spacing" className="fn-tabs-trigger--underline">Відступи</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">Палітра кольорів дизайн-системи Faion Network.</p>
        </TabsContent>
        <TabsContent value="typography" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">Система типографіки з подвійним шрифтом.</p>
        </TabsContent>
        <TabsContent value="spacing" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">8-точкова система відступів.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            font-size: 15px;
            color: #4A4A4A;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const FullWidth: Story = {
  name: 'Full Width',
  render: () => (
    <div className="fn-tabs-demo">
      <Tabs defaultValue="tab1">
        <TabsList className="fn-tabs-list--full-width">
          <TabsTrigger value="tab1" className="fn-tabs-trigger--flex">Перший</TabsTrigger>
          <TabsTrigger value="tab2" className="fn-tabs-trigger--flex">Другий</TabsTrigger>
          <TabsTrigger value="tab3" className="fn-tabs-trigger--flex">Третій</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст першого табу</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст другого табу</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст третього табу</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            color: #4A4A4A;
          }
          .fn-tabs-panel--center {
            text-align: center;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};
