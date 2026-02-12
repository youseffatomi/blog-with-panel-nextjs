import { Card } from "flowbite-react";

import "@/css/index.css";
import Logo from "@/assets/images/SVG/logo.svg";

import Image from "next/image";
import { redirect } from "next/navigation";
import { GetServerToken } from "@/API/Auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await GetServerToken();

  if (session) redirect("/panel");

  return (
    <main className="container mx-auto px-3 pt-2 lg:pt-5">
      <section className="grid min-h-screen place-items-center">
        <Card className="relative w-full md:w-md">
          <Image
            src={Logo}
            alt=""
            className="absolute -top-15 left-1/2 w-40 -translate-x-1/2"
          />
          <div className="pt-15">{children}</div>
        </Card>
      </section>
    </main>
  );
}
