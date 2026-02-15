import PriveteLayout from "@/app/panel/layout/index";
import PriveteProvider from "@/app/panel/PriveteProvider";

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
