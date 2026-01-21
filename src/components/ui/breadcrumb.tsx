import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import './Breadcrumb.css';

function Breadcrumb({ className = '', ...props }: React.ComponentProps<"nav"> & { className?: string }) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" className={`fn-breadcrumb ${className}`} {...props} />;
}

function BreadcrumbList({ className = '', ...props }: React.ComponentProps<"ol"> & { className?: string }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`fn-breadcrumb-list ${className}`}
      {...props}
    />
  );
}

function BreadcrumbItem({ className = '', ...props }: React.ComponentProps<"li"> & { className?: string }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`fn-breadcrumb-item ${className}`}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className = '',
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  className?: string;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={`fn-breadcrumb-link ${className}`}
      {...props}
    />
  );
}

function BreadcrumbPage({ className = '', ...props }: React.ComponentProps<"span"> & { className?: string }) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`fn-breadcrumb-page ${className}`}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className = '',
  ...props
}: React.ComponentProps<"li"> & { className?: string }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={`fn-breadcrumb-separator ${className}`}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className = '',
  ...props
}: React.ComponentProps<"span"> & { className?: string }) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`fn-breadcrumb-ellipsis ${className}`}
      {...props}
    >
      <MoreHorizontal />
      <span className="fn-sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
