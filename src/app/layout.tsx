import { NavigationGuardProvider } from "next-navigation-guard";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationGuardProvider>{children}</NavigationGuardProvider>
      </body>
    </html>
  );
}
