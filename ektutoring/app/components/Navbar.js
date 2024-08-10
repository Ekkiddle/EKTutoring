'use client'

import Link from "next/link";
import NavItem from "./NavItem";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  { text: "Subjects", href: "/subjects"},
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const pathName = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                document.getElementById("header").classList.add("bg-transparent");
                document.getElementById("header").classList.remove("bg-indigo-transparent");
            } else {
                document.getElementById("header").classList.add("bg-indigo-transparent");
                document.getElementById("header").classList.remove("bg-transparent");
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header id="header" className="w-screen transition-colors duration-300 flex items-center bg-transparent w-full h-12 top-0 mb-[-48px] sticky z-50">
      <nav className="flex flex-row items-center justify-between stretch w-screen h-full">
        <Link href={"/"}>
            <h1 className="mx-10">EKTutoring</h1>
        </Link>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="flex mx-5 h-full items-center">
          {MENU_LIST.map((menu, idx) => (
            <div
                className="flex px-5"
              key={menu.text}
            >
              <NavItem active={menu.href===pathName} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;