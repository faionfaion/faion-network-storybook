"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import './Tabs.css';

function Tabs({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & { className?: string }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={`fn-tabs ${className}`}
      {...props}
    />
  );
}

function TabsList({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & { className?: string }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={`fn-tabs-list ${className}`}
      {...props}
    />
  );
}

function TabsTrigger({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & { className?: string }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={`fn-tabs-trigger ${className}`}
      {...props}
    />
  );
}

function TabsContent({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> & { className?: string }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={`fn-tabs-content ${className}`}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
