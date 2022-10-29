// https://github.com/CodeWithMarish/responsive-navbar
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Emoji from "react-emoji-render";

const MENU_LIST = [
  { text: <Emoji text="Home 🏠" ></Emoji>, href: "/" },
  { text: <Emoji text="Projects 📑" ></Emoji>,  href: "/projects" },
  { text: <Emoji text="Profiles 🧑‍💻" ></Emoji>, href: "/profiles" },
  { text: <Emoji text="Leaderboards 🏆" ></Emoji>, href: "/leaderboards" },
  { text: <Emoji text="About Us ❓" ></Emoji>, href: "/about" },
  { text: <Emoji text="Contact ✉️" ></Emoji>, href: "/contact" },
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