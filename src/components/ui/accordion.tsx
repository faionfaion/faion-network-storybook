"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import './Accordion.css';

function Accordion({
  className = '',
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & { className?: string }) {
  return <AccordionPrimitive.Root data-slot="accordion" className={`fn-accordion ${className}`} {...props} />;
}

function AccordionItem({
  className = '',
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & { className?: string }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={`fn-accordion-item ${className}`}
      {...props}
    />
  );
}

function AccordionTrigger({
  className = '',
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & { className?: string }) {
  return (
    <AccordionPrimitive.Header className="fn-accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={`fn-accordion-trigger ${className}`}
        {...props}
      >
        {children}
        <ChevronDownIcon className="fn-accordion-chevron" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className = '',
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & { className?: string }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="fn-accordion-content"
      {...props}
    >
      <div className={`fn-accordion-content__inner ${className}`}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
