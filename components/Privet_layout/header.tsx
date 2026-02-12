import { useState } from "react";
import avatar from "./../../assets/images/avatar.jpg";
import Logo from "./../../assets/images/SVG/logo.svg";
import { Avatar } from "flowbite-react";
import { Link } from "react-router";

type list = {
  name: string;
  icon: string;
  link: string;
};

const Menu = () => {
  const [MenuList] = useState<list[]>([
    {
      name: "صفحه اصلی",
      icon: "",
      link: "",
    },
    {
      name: "تماس با ما",
      icon: "",
      link: "",
    },
    {
      name: "درباره ما",
      icon: "",
      link: "",
    },
  ]);
  return (
    <ul className="text-light flex items-center justify-center gap-4 text-xs md:text-sm lg:justify-start lg:text-black">
      {MenuList.map((i, index) => (
        <li key={index}>
          <Link to={i.link}>{i.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default function Header() {
  return (
    <header className="bg-light relative z-0 rounded-b-2xl px-5 py-2 shadow">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3">
          {/* only show on desktop */}
          <nav className="hidden lg:block">
            <Menu />
          </nav>
          {/* menu icon show on mobile */}
          <div className="lg:hidden">
            <button>
              <i className="ti-menu" />
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <img src={Logo} alt="logo" className="mx-auto block h-12" />
        </div>
        <div className="col-span-3">
          <Avatar
            img={avatar}
            rounded
            status="online"
            statusPosition="bottom-right"
            className="mr-auto w-12"
          />
        </div>
      </div>

      {/* mobile Menu */}
      <div className="bg-secondary absolute top-full right-1/2 z-10 w-[90%] translate-x-1/2 rounded-b-xl px-2 py-2">
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}
