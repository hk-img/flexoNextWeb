"use client";
import React, { useEffect, useState } from "react";
import Svg from "@/components/svg";
import Image from "next/image";
import Auth from "../auth/Auth";
import Link from "next/link";

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 50;
  const navbarHeight = 75;

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        if (st + window.innerHeight < document.body.scrollHeight) {
          setHidden(false);
        }
      }

      setLastScrollTop(st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-transform duration-700 ${
          hidden ? "-translate-y-full " : "translate-y-0 shadow-[0_0_12px_0_#0000004d]"
        } bg-white`}
      >
        <div className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-4 mx-auto py-[21px]">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  title="logo"
                  className="lg:w-[130px] sm:w-[70px] w-[100px]"
                  width={137}
                  height={37}
                />
              </Link>
            </div>

            <div className="lg:flex hidden items-center gap-5">
              <div>
                <a href="#" className="bg-[#f76900] border-[2px] border-[#f76900] rounded-[15px] text-[15px] text-white py-[8px] px-5.5">
                  List Your Space
                </a>
              </div>
              <div>
                <button
                  type="button"
                  className="flex items-center gap-1 border-[2px] border-[#ffe9d8] bg-[#f7690012] text-[#f76900] rounded-[15px] py-[8px] px-5.5 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <span>
                    <Svg name="logIn" className="size-[22px]" />
                  </span>
                  <span className="text-[15px]">Sign in</span>
                </button>
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <a href="#">
                <Svg name="call" className="size-[16px] text-black" />
              </a>
              <a href="#">
                <Svg name="homePlus" className="size-[18px] text-black" />
              </a>
              <a href="#">
                <Svg name="logOut" className="size-[22px] text-black" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {
        isOpen && <Auth isOpen={isOpen} setIsOpen={setIsOpen} />
      }
    </>
  );
};

export default Header;
