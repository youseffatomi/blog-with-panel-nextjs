"use client";
import Header from "./header";
import Aside from "./aside";
import { useState } from "react";

export default function PriveteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="container">
        <Header {...{ openMenu, setOpenMenu }} />

        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-16 xl:grid-cols-16">
          <div className="lg:col-span-4 xl:col-span-3">
            <Aside {...{ openMenu, setOpenMenu }} />
          </div>
          <main className="h-[calc(100vh-150px)] lg:col-span-12 xl:col-span-13">
            {children}
          </main>
        </section>
      </div>
    </div>
  );
}
