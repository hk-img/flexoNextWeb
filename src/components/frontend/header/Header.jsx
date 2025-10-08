"use client";
import React, { useEffect, useState } from "react";
import Svg from "@/components/svg";
import Image from "next/image";
import Auth from "../auth/Auth";
import Link from "next/link";
import { useAuth } from "@/context/useAuth";

const Header = () => {
  const {token} = useAuth();
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

  const handleLogout = ()=>{
    
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-transform duration-700 ${
          hidden ? "-translate-y-full " : "translate-y-0 shadow-[0_0_12px_0_#0000004d]"
        } bg-white`}
      >
        <div className="container w-full mx-auto lg:py-5 sm:py-[20.5px] py-[17px]">
          <div className="flex justify-between items-center">
            <div className="px-[15px]">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  title="logo"
                  className="xl:w-[130px] lg:w-[114px] md:w-[74px] w-[100px] h-auto"
                  width={130}
                  height={37}
                  priority={true}
                />
              </Link>
            </div>

            <div className="lg:flex hidden items-center gap-5 px-[15px]">
              <div>
                <Link href="/list-with-us" className="bg-[#f76900] block border-[2px] border-[#f76900] rounded-[15px] xl:text-[15px] lg:text-sm text-white py-[8px] px-5.5">
                  List Your Space
                </Link>
              </div>
              {
                !token ? (
                  <>
                    <div>
                      <div class="relative">
                          
                        <input type="checkbox" id="user-dropdown" class="peer hidden" />
                          <label
                              for="user-dropdown"
                              class="fixed inset-0 hidden peer-checked:block z-10 cursor-default"
                            ></label>
                        <label
                          for="user-dropdown"
                          class="flex items-center justify-center border hover:bg-[#f76900] bg-[#001740] text-white w-[30px] h-[30px] rounded-full cursor-pointer transition"
                        >
                         <Svg name="user" className="size-[15px]" />
                        </label>

                        <div
                          class="absolute right-0 top-13 w-[250px] bg-white text-black rounded-sm 
                                opacity-0 scale-95 pointer-events-none transition-all duration-200 shadow-[10px_10px_20px_#0000006b]
                                peer-checked:opacity-100 peer-checked:scale-100 peer-checked:pointer-events-auto"
                        >
                          <div className="py-2">
                            <ul>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Profile</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Bookings</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Booking requests</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Visits</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Favorites</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">My Riviews</a></li>
                              <li><a href="/" class="block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white">Logout</a></li>
                            </ul>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </>
                ):(
                  <div>
                    <div
                      className="flex items-center gap-1 border-[2px] border-[#ffe9d8] bg-[#f7690012] text-[#f76900] rounded-[15px] py-[8px] px-5.5 cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <span>
                        <Svg name="logIn" className="size-[22px]" />
                      </span>
                      <span className="xl:text-[15px] lg:text-sm">Sign in</span>
                    </div>
                  </div>
                )
              }
            </div>

            <div className="flex lg:hidden items-center gap-[15px] px-[15px]">
              <Link href="tel:95133 92400">
                <Svg name="call" className="size-[15px] text-black" />
              </Link>
              <Link href="/list-with-us">
                <Svg name="homePlus" className="size-[18px] text-black" />
              </Link>
              <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <Svg name="logOut" className="size-[22px] text-black" />
              </div>
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
