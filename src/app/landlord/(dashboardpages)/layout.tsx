import ChatWidget from "@/components/ChatWidget";
import LandlordNav from "./LandlordNav";
import LandLordSidebar from "./LandLordSidebar";

export default function LandlordDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      <LandlordNav />
      <div className="flex-1 flex overflow-hidden">
        <div className="hidden md:block">
          <LandLordSidebar />
        </div>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
      <ChatWidget />
    </section>
  );
}
