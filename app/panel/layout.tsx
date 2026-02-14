import PriveteLayout from "@/components/Privet_layout";
import PriveteProvider from "@/providers/PriveteProvider";

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
