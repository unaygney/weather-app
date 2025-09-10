import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

import { SearchIcon } from "./icons";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

interface SearchInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string;
}

function SearchInput({ className, placeholder = "Search for a city, e.g., New York", ...props }: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300">
        <SearchIcon size={20} />
      </div>
      <input
        type="search"
        data-slot="search-input"
        className={cn(
          "w-full h-14 pl-16 pr-4 py-4 text-base",
          "bg-neutral-800 text-white placeholder:text-neutral-200",
          "border border-transparent rounded-xl",
          "transition-all duration-200 ease-in-out",
          "outline-none",
          "focus:bg-neutral-800 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent",
          "hover:bg-neutral-700",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "aria-invalid:ring-2 aria-invalid:ring-orange-500/50 aria-invalid:border-transparent"
        )}
        placeholder={placeholder}
        style={{
          width: "526px",
          height: "56px",
          paddingTop: "var(--spacing-200)",
          paddingRight: "var(--spacing-300)",
          paddingBottom: "var(--spacing-200)",
          paddingLeft: "var(--spacing-500)",
          borderRadius: "var(--radius-12)",
          gap: "var(--spacing-200)",
          color: "#ffffff",
        }}
        {...props}
      />
    </div>
  );
}

export { Input, SearchInput };
