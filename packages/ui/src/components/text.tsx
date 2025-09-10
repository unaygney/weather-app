import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      "preset-1": "text-[96px] leading-[100%] tracking-[-2px] font-dm-sans font-semibold italic",
      "preset-2": "text-[52px] leading-[120%] tracking-[0] font-bricolage-grotesque font-bold",
      "preset-3": "text-[32px] leading-[100%] tracking-[0] font-dm-sans font-light",
      "preset-4": "text-[28px] leading-[120%] tracking-[0] font-dm-sans font-bold",
      "preset-5": "text-[20px] leading-[120%] tracking-[0] font-dm-sans font-semibold",
      "preset-5-medium": "text-[20px] leading-[120%] tracking-[0] font-dm-sans font-medium",
      "preset-6": "text-[18px] leading-[120%] tracking-[0] font-dm-sans font-medium",
      "preset-7": "text-[16px] leading-[120%] tracking-[0] font-dm-sans font-medium",
      "preset-8": "text-[14px] leading-[120%] tracking-[0] font-dm-sans font-medium",
    },
  },
  defaultVariants: {
    variant: "preset-7",
  },
});

type TextElement = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

export interface TextProps<T extends TextElement = TextElement>
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: T;
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLElement, TextProps>(({ className, variant, as = "p", asChild = false, ...props }, ref) => {
  const Comp = as as React.ElementType;

  return <Comp className={cn(textVariants({ variant, className }))} ref={ref} {...props} />;
});

Text.displayName = "Text";

export { Text, textVariants };
