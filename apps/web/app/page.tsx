import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@workspace/ui/components/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu";
import { SettingsIcon } from "@workspace/ui/components/icons";
import { SearchInput } from "@workspace/ui/components/input";
import { Text } from "@workspace/ui/components/text";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Weather App</h1>

        {/* Search Input Component Demo */}
        <div className="space-y-4">
          <SearchInput placeholder="Search for a city, e.g., New York" />
          <SearchInput placeholder="Search for a city, e.g., London" />
          <SearchInput placeholder="Search for a city, e.g., Tokyo" />
        </div>

        <Button size="sm">Button</Button>
        <LucideArrowRight />
        <Link href="/">Home</Link>

        <div className="space-y-4 p-8">
          <Text variant="preset-1" as="h1">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-2" as="h2">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-3" as="h3">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-4" as="h4">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-5" as="h5">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-5-medium" as="h5">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-6" as="p">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-7" as="p">
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text variant="preset-8" as="span">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2">
              <SettingsIcon size={16} />
              Units
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem checked>Switch to Imperial</DropdownMenuItem>
            <DropdownMenuItem>Switch to Imperial</DropdownMenuItem>
            <DropdownMenuItem>Switch to Imperial</DropdownMenuItem>
            <DropdownMenuItem>Switch to Imperial</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Background Image Test */}
        <div className="space-y-4 w-full max-w-md">
          <h3 className="text-lg font-semibold">Background Image Test</h3>
          <div className="bg-today-large bg-cover bg-center bg-no-repeat h-32 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Large Background</span>
          </div>
          <div className="bg-today-small bg-cover bg-center bg-no-repeat h-32 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Small Background</span>
          </div>
        </div>
      </div>
    </div>
  );
}
