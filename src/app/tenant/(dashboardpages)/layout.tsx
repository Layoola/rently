import TenantNav from "./TenantNav";

export default function TenantDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      <TenantNav />
      <main className="flex-1 overflow-auto">{children}</main>
      {/* <ChatWidget /> */}
    </section>
  );
}
