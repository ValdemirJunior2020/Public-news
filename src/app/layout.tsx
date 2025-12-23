import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata = {
  title: "Public News",
  description: "Minimal public news platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-white text-zinc-900">
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
