import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <LucideArrowRight />
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
