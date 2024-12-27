"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import CustomButton from "./ui/CustomButton";
import MenuItems from "./ui/MenuItems";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="sm:px-10 px-7">
        <nav className="py-5 sm:py-7 flex justify-between items-center">
          <div className="flex items-center">
            <GiHamburgerMenu
              onClick={handleMenuOpen}
              className="sm:hidden cursor-pointer mr-2"
            />
            <h1 className="text-sm sm:text-xl font-semibold font-burtons ">
              KARMILAN
            </h1>
          </div>

          {/* -------------- */}
          <div className="hidden sm:block">
            <MenuItems setMenuOpen={setMenuOpen} />
          </div>
          {/* -------------- */}

          <div className="flex items-center justify-between">
            {theme === "dark" && (
              <div onClick={() => setTheme("light")}>
                <BsFillSunFill className="text-xl sm:text-2xl" />
              </div>
            )}

            {theme === "light" && (
              <div onClick={() => setTheme("dark")}>
                <BsFillMoonFill className="cursor-pointer text-xl sm:text-2xl" />
              </div>
            )}

            <div>
              <CustomButton btnLink="https://resume-karmilan.s3.ap-southeast-1.amazonaws.com/Software-Engineer-Resume-Karmilan-v2.pdf">
                Resume
              </CustomButton>
            </div>
          </div>
        </nav>
        <div className="block sm:hidden">
          {menuOpen && <MenuItems setMenuOpen={setMenuOpen} />}
        </div>
      </div>
    </>
  );
};

export default NavBar;