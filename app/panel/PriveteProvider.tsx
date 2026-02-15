import { GetServerToken } from "@/app/_lib/api/Auth";
import { redirect } from "next/navigation";

export default async function PriveteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await GetServerToken();

  if (!session) redirect("/auth/signin");

  return children;
}
