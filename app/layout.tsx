import "./globals.css";

interface propsType {
  children: React.ReactNode;
}

export default function RootLayout({ children }: propsType) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
