import './globals.css';

export const metadata = {
  title: 'Example App',
  description: 'Generated for hellicht',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
