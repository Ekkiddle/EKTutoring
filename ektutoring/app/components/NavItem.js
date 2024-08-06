import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={`hover:text-black opacity-100 h-full ${active ? 'font-bold' : ''}`}>
      {text}
    </Link>
  );
};

export default NavItem;