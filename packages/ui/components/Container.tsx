export function Container({ children }: { children: any }) {
  return (
    <main className="bg-stone-200 select-none flex divide-x divide-stone-300 font-sans min-h-screen">
      {children}
    </main>
  );
}
