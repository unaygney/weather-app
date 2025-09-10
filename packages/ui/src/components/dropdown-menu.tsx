"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

import { CheckIcon as CustomCheckIcon, DropdownIcon } from "./icons";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  children,
  className,
  showIcon = true,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> & {
  showIcon?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        "flex items-center justify-between gap-[var(--dropdown-gap)] rounded-[var(--dropdown-radius)] px-[var(--dropdown-padding-left)] py-[var(--dropdown-padding-top)] text-sm text-[var(--dropdown-text)] bg-[var(--dropdown-bg-default)] border border-[var(--dropdown-border)] outline-none select-none transition-all duration-150",
        // Hover state
        "hover:bg-[var(--dropdown-bg-hover)]",
        // Active state
        "active:bg-[var(--dropdown-bg-active)]",
        // Focus state
        "focus:bg-[var(--dropdown-bg-focus)] focus:border-[var(--dropdown-border)]",
        className
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <DropdownIcon className="text-[var(--dropdown-text)] transition-transform duration-150 data-[state=open]:rotate-180" size={13} />
      )}
    </DropdownMenuPrimitive.Trigger>
  );
}

function DropdownMenuContent({ className, sideOffset = 4, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-[var(--dropdown-bg-default)] text-[var(--dropdown-text)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--dropdown-radius)] border border-[var(--dropdown-border)] p-[var(--dropdown-padding-top)] shadow-[var(--dropdown-shadow)]",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  checked,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
  checked?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "relative flex cursor-default items-center gap-[var(--dropdown-gap)] rounded-[var(--dropdown-radius)] px-[var(--dropdown-padding-left)] py-[var(--dropdown-padding-top)] text-sm text-[var(--dropdown-text)] outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-[var(--dropdown-text)]",
        // Add right padding when checked to make room for the icon
        checked && "pr-8",
        // Default state
        "bg-[var(--dropdown-bg-default)]",
        // Hover state - using data-[highlighted] for proper Radix hover
        "data-[highlighted]:bg-[var(--dropdown-bg-hover)] data-[highlighted]:transition-colors data-[highlighted]:duration-150",
        // Active state
        "active:bg-[var(--dropdown-bg-active)] active:transition-colors active:duration-150",
        // Focus state
        "focus:bg-[var(--dropdown-bg-focus)] focus:outline-none",
        // Destructive variant
        "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive",
        className
      )}
      {...props}
    >
      {checked && (
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
          <CustomCheckIcon className="size-4 text-[var(--dropdown-text)]" />
        </span>
      )}
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default items-center gap-[var(--dropdown-gap)] rounded-[var(--dropdown-radius)] py-[var(--dropdown-padding-top)] pr-[var(--dropdown-padding-right)] pl-8 text-sm text-[var(--dropdown-text)] outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-[var(--dropdown-text)]",
        // Default state
        "bg-[var(--dropdown-bg-default)]",
        // Hover state - using data-[highlighted] for proper Radix hover
        "data-[highlighted]:bg-[var(--dropdown-bg-hover)] data-[highlighted]:transition-colors data-[highlighted]:duration-150",
        // Active state
        "active:bg-[var(--dropdown-bg-active)] active:transition-colors active:duration-150",
        // Focus state
        "focus:bg-[var(--dropdown-bg-focus)] focus:outline-none",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4 text-[var(--dropdown-text)]" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex cursor-default items-center gap-[var(--dropdown-gap)] rounded-[var(--dropdown-radius)] py-[var(--dropdown-padding-top)] pr-[var(--dropdown-padding-right)] pl-8 text-sm text-[var(--dropdown-text)] outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-[var(--dropdown-text)]",
        // Default state
        "bg-[var(--dropdown-bg-default)]",
        // Hover state - using data-[highlighted] for proper Radix hover
        "data-[highlighted]:bg-[var(--dropdown-bg-hover)] data-[highlighted]:transition-colors data-[highlighted]:duration-150",
        // Active state
        "active:bg-[var(--dropdown-bg-active)] active:transition-colors active:duration-150",
        // Focus state
        "focus:bg-[var(--dropdown-bg-focus)] focus:outline-none",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current text-[var(--dropdown-text)]" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-[var(--dropdown-gap)] rounded-[var(--dropdown-radius)] px-[var(--dropdown-padding-left)] py-[var(--dropdown-padding-top)] text-sm text-[var(--dropdown-text)] outline-none select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-[var(--dropdown-text)]",
        // Default state
        "bg-[var(--dropdown-bg-default)]",
        // Hover state - using data-[highlighted] for proper Radix hover
        "data-[highlighted]:bg-[var(--dropdown-bg-hover)] data-[highlighted]:transition-colors data-[highlighted]:duration-150",
        // Active state
        "active:bg-[var(--dropdown-bg-active)] active:transition-colors active:duration-150",
        // Focus state
        "focus:bg-[var(--dropdown-bg-focus)] focus:outline-none focus:ring-0 focus:border-[var(--dropdown-border)] focus:border focus:shadow-[var(--dropdown-shadow)] focus:transition-all focus:duration-150",
        // Open state
        "data-[state=open]:bg-[var(--dropdown-bg-hover)] data-[state=open]:text-[var(--dropdown-text)]",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4 text-[var(--dropdown-text)]" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-[var(--dropdown-bg-default)] text-[var(--dropdown-text)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-[var(--dropdown-radius)] border border-[var(--dropdown-border)] p-[var(--dropdown-padding-top)] shadow-[var(--dropdown-shadow)]",
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
