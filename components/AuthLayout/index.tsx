import { Card } from "flowbite-react";
import { Outlet, useNavigate } from "react-router";
import Logo from "./../../assets/images/SVG/logo.svg";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const Token = localStorage.getItem("token");

    if (Token) navigate("/");
  });

  return (
    <main className="container mx-auto px-3 pt-2 lg:pt-5">
      <section className="grid min-h-screen place-items-center">
        <Card className="relative w-full md:w-md">
          <img
            src={Logo}
            alt=""
            className="absolute -top-15 left-1/2 w-40 -translate-x-1/2"
          />
          <div className="pt-15">
            <Outlet />
          </div>
        </Card>
      </section>
    </main>
  );
}
