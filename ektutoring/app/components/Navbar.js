'use client'

import Link from "next/link";
import NavItem from "./NavItem";
import { usePathname } from 'next/navigation';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  { text: "Subjects", href: "/subjects"},
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const pathName = usePathname();
    window.onscroll = function(){
        if(window.scrollY<200){
            document.getElementById("header").classList.add("bg-transparent")
            document.getElementById("header").classList.remove("bg-indigo-transparent")
        }
        else{
            document.getElementById("header").classList.add("bg-indigo-transparent")
            document.getElementById("header").classList.remove("bg-transparent")
        }
    }
  return (
    <header id="header" className="transition-colors duration-300 flex items-center bg-transparent w-full h-12 fixed z-50">
      <nav className="flex flex-row items-center justify-between stretch w-full h-full">
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