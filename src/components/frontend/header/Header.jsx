"use client";
import React, { useEffect, useRef, useState } from "react";
import Svg from "@/components/svg";
import ImageWithFallback from "@/components/ImageWithFallback";
import Auth from "../auth/Auth";
import Link from "next/link";
import { useAuth } from "@/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { TOKEN_NAME } from "@/constant/constant";
import { useRouter } from "next/navigation";
import { ShowToast } from "@/utils/ShowToast";

const Header = () => {
  const router = useRouter();
  const { token, setToken, setUser,user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 50;
  const navbarHeight = 75;

  useEffect(() => {
    // Throttle scroll handler to reduce blocking
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const st = window.scrollY;

          if (Math.abs(lastScrollTop - st) <= delta) {
            ticking = false;
            return;
          }

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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    function handleClickOutside(event) {
      if(event.target.closest(".userClass")){
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { mutate: logoutMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        "user/userLogOut",
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        ShowToast(data.message,"success");
        setToken("");
        setUser({});
        localStorage.removeItem(`${TOKEN_NAME}`);
        document.cookie = `${TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.reload();
      } else {
        ShowToast(data.message,"error");
      }
    },
    onError: (error) => {
      ShowToast(error.message,"error");
    },
  });

  const handleLogout = () => {
    const payload = {};
    logoutMutate(payload);
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     const mobile = window.innerWidth <= 768;

  //     if (mobile) {
  //       const script = document.getElementById("zoho-salesiq");
  //       if (script) script.remove();
  //       if (window.$zoho) delete window.$zoho;
  //       const widget = document.getElementById("zsiqchat");
  //       if (widget) widget.remove();
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <header
        className={`fixed z-50 w-full transition-transform duration-700 ${
          hidden
            ? "-translate-y-full -top-px"
            : "translate-y-0 shadow-[0_0_12px_0_#0000004d] top-0"
        } bg-white`}
      >
        <div className="container relative w-full mx-auto group lg:py-5 sm:py-[20.5px] py-[17px]">
          <div className="flex justify-between items-center">
            <div className="px-[15px]">
              <Link href="/">
                <ImageWithFallback
                  src="/images/logo.webp"
                  alt="logo"
                  title="logo"
                  className="xl:w-[130px] lg:w-[114px] md:w-[74px] w-[100px] h-auto aspect-[130/37]"
                  width={130}
                  height={37}
                  priority
                  fallback="/images/default_image.webp"
                />
              </Link>
            </div>

            <div className="lg:flex hidden items-center gap-5 px-[15px]">
              <div>
                <Link
                  href="/list-with-us"
                  className="bg-[#f76900] block border-[2px] border-[#f76900] rounded-[15px] xl:text-[15px] lg:text-sm text-white py-[8px] px-5.5"
                >
                  List Your Space
                </Link>
              </div>
              {token ? (
                <>
                  <div className="relative group z-[9999]">
                    <label
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      title={`${user?.firstName} ${user?.lastName}`}
                      className="userClass flex items-center justify-center border hover:bg-[#f76900] bg-[#001740] text-white 
                                      w-[30px] h-[30px] rounded-full cursor-pointer transition"
                    >
                      <Svg name="user" className="size-[15px]" />
                    </label>
                  </div>
                </>
              ) : (
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
              )}
            </div>

            <div className="flex lg:hidden items-center gap-[15px] px-[15px]">
              <Link aria-label="call " href="tel:95133 92400">
                <Svg name="call" className="size-[15px] text-black" />
              </Link>
              <Link aria-label="list with us" href="/list-with-us">
                <Svg name="homePlus" className="size-[18px] text-black" />
              </Link>
              {token ? (
                <button type="button" aria-label="user login" className="cursor-pointer userClass" onClick={() => setIsMenuOpen((prev) => !prev)}>
                  <Svg
                    name="logOut"
                    className="size-[22px] text-black cursor-pointer"
                  />
                </button>
              ) : (
                <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
                  <Svg name="logOut" className="size-[22px] text-black" />
                </div>
              )}
            </div>
          </div>
          {token && (
            <div
              ref={menuRef}
              className={`absolute md:right-0 right-3 z-60 md:top-20 top-15 w-[250px] bg-white text-black rounded-sm transition-all duration-200 shadow-[10px_10px_20px_#0000006b]
            ${
              isMenuOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }
            `}
            >
              <div className="py-2">
                <ul>
                  <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/profile-management");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Profile
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/booking-management");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Bookings
                    </div>
                  </li>
                  {/* <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/booking-request-inquires");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Booking Requests
                    </div>
                  </li> */}
                  <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/visit-scheduling");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Visits
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/favourite-workspace");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Favorites
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/workspace-review-rating-list");
                      }}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      My Reviews
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={handleLogout}
                      className="cursor-pointer block px-4 text-[15px] py-2 hover:bg-[#f76900] hover:text-white"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
      {isOpen && <Auth isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
