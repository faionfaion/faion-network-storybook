import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { PaginationProps } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Content/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Page navigation component with support for prev/next, first/last, and numbered page buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'simple'],
      description: 'Pagination variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last buttons',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show prev/next buttons',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Interactive wrapper
const PaginationInteractive = (args: Partial<PaginationProps>) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      totalPages={args.totalPages || 10}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePage: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2,
  },
};

export const FewPages: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

export const Compact: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'compact',
  },
};

export const Simple: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'simple',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallSize: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    size: 'lg',
  },
};

export const NoFirstLast: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
  },
};

export const OnlyArrows: Story = {
  render: (args) => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    variant: 'compact',
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
    onPageChange: () => {},
  },
};

export const InArticleList: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8;

    // Mock articles
    const articles = Array.from({ length: 6 }, (_, i) => ({
      title: `Article ${(currentPage - 1) * 6 + i + 1}`,
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }));

    return (
      <div style={{ width: '800px' }}>
        {/* Article grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }}>
          {articles.map((article, i) => (
            <div
              key={i}
              style={{
                padding: '16px',
                background: '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', margin: '0 0 8px', color: '#1C1C1E' }}>
                {article.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A4A4A', margin: 0 }}>
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Small</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="sm" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Medium</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="md" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Large</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="lg" />
        </div>
      </div>
    );
  },
};
