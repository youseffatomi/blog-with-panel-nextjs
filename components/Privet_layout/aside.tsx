"use client";

import {
  Button,
  Card,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Image from "next/image";

import { FiHome, FiChevronRight } from "react-icons/fi";

interface Items {
  name: string;
  icon: React.FC;
  link: string;
}

export default function Aside({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const items: Items[] = [
    {
      name: "داشبورد",
      icon: FiHome,
      link: "#",
    },
    {
      name: "بلاگ",
      icon: FiHome,
      link: "#",
    },
    {
      name: "کاربران",
      icon: FiHome,
      link: "#",
    },
    {
      name: "تنظیمات",
      icon: FiHome,
      link: "#",
    },
  ];

  const whenOpen = " right-0";
  const whenClose = "-right-full";

  return (
    <>
      <Card
        className={`${openMenu ? whenOpen : whenClose} bg-light after:bg-secondary absolute top-[5vh] z-10 h-[90vh] w-[85vw] max-w-65 rounded-b-2xl shadow transition-all after:absolute after:top-1/2 after:-left-3 after:h-[90%] after:w-3 after:-translate-y-1/2 after:rounded-l-2xl lg:sticky lg:w-full lg:max-w-none lg:shadow-none`}
        theme={{ root: { children: "p-0" } }}
      >
        <div>
          <Image
            src={"/assets/images/SVG/logo.svg"}
            className="mx-auto block h-20"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <Sidebar className="lg:w-56 xl:w-full">
          <SidebarItems>
            <SidebarItemGroup>
              {items.map((val, i) => (
                <SidebarItem key={i} href={val.link} icon={val.icon}>
                  {val.name}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>

        <Button
          onClick={() => setOpenMenu((pre) => !pre)}
          color="secondary"
          className="absolute top-1/2 -left-7 z-15 h-15 w-15 -translate-y-1/2 rounded-full text-2xl shadow lg:hidden"
        >
          <FiChevronRight />
        </Button>
      </Card>

      {openMenu && (
        <div
          className="absolute top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.3)] backdrop-blur-sm"
          onClick={() => setOpenMenu((pre) => !pre)}
        />
      )}
    </>
  );
}
