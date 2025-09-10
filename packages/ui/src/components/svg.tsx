import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

function SVG({ className, size = 16, ...props }: SVGProps) {
  return (
    <svg
      className={cn("inline-block", className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
}

export { SVG, type SVGProps };
