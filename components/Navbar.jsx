// https://github.com/CodeWithMarish/responsive-navbar
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Emoji from "react-emoji-render";

const MENU_LIST = [
  { text: "Home", emoji:<Emoji text="🏠" ></Emoji>, href: "/" },
  { text: "Projects", emoji:<Emoji text="📑" ></Emoji>,  href: "/projects" },
  { text: "Profiles", emoji:<Emoji text="🧑‍💻" ></Emoji>, href: "/profiles" },
  { text: "Leaderboards", emoji:<Emoji text="🏆" ></Emoji>, href: "/leaderboards" },
  { text: "About Us", emoji:<Emoji text="❓" ></Emoji>, href: "/about" },
  { text: "Contact", emoji:<Emoji text="✉️" ></Emoji>, href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>

          <h1 className="logo">PairMeUp</h1>

        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}

            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;