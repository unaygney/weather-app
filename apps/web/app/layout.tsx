import { bricolage, dmSans } from "@/lib/font";

import "@workspace/ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${bricolage.variable} font-sans antialiased `}>{children}</body>
    </html>
  );
}
