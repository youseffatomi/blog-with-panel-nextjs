import PriveteProvider from "@/providers/PriveteProvider";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PriveteProvider>{children}</PriveteProvider>;
}
