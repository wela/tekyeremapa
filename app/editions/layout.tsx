export default function EditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-theme="editions"
      className="min-h-screen bg-background text-on-background font-body-md text-body-md"
    >
      {children}
    </div>
  );
}
