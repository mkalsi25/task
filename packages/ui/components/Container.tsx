export function Container({ children }: { children: any }) {
  return (
    <main className="bg-stone-50 select-none flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x font-sans min-h-screen">
      {children}
    </main>
  );
}
