import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

export default function LandersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <ChatWidget />
      <Footer />
    </section>
  );
}
