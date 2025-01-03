"use client";

import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

type MenuObj = {
  name: string;
  path: string;
};

type MenuItemsProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuItems: FC<MenuItemsProps> = ({ setMenuOpen }) => {
  const menuItems: MenuObj[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <ul className=" flex items-center flex-col sm:flex-row sm:space-x-6  ">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            onClick={handleClick}
            href={item.path}
            className="text-md sm:text-xl  hover:text-teal-600 hover:text-2xl"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
