import Link from "next/link";

const NavItem = ({ text, emoji, href, active }) => {
  return (
    <Link href={href} className={`nav__link`}>
      <div className={`nav__link`}>
      {text}
      <br></br>
      {emoji}
      </div>
    </Link>
  );
};

export default NavItem;