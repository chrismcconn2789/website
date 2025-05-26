export default function PageHeader({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="w-auto m-auto flex h-auto flex-col items-center p-4">
      <h2 className="text-2xl text-white font-semibold my-4">{title}</h2>
      {children}
    </main>
  );
}
