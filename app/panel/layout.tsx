import PriveteLayout from "@/components/Privet_layout";
import PriveteProvider from "@/providers/PriveteProvider";
import "@/css/index.css";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PriveteProvider>
      <PriveteLayout>{children}</PriveteLayout>
    </PriveteProvider>
  );
}
