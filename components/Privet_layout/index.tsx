import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "./header";
import Aside from "./aside";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const Token = localStorage.getItem("token");

    if (!Token) navigate("/auth");
  });

  return (
    <div>
      <div className="container">
        <Header />

        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-18">
          <div className="lg:col-span-3">
            <Aside />
          </div>
          <main className="lg:col-span-15 lg:h-[calc(100vh-150px)]">
            <Outlet />
          </main>
        </section>
      </div>
    </div>
  );
}
