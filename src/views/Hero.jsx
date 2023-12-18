// React
import { useState } from "react";

// local imports
import heroImage from "../assets/heroImage3.jpg";
import logo from "../assets/logo.svg";
import cartIcon1 from "../assets/cart.svg";
import cartIcon2 from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex items-center 
      justify-between pt-10 px-10 mx-auto"
      >
        <img src={logo} alt="" style={{ width: "150px" }} />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="service">Service</NavLink>
          <NavLink to="products">Designs</NavLink>
          <NavLink to="gallery">Gallery</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </ul>
        <img
          src={cartIcon1}
          className="hidden md:block cursor-pointer"
          alt=""
          style={{ width: "30px" }}
        />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-black"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <div
          className={`block md:hidden w-full fixed ${
            showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] h-[410] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer text-black"
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
            }}
          />
          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="service" mobileMenu>
              Service
            </NavLink>
            <NavLink to="products" mobileMenu>
              Designs
            </NavLink>
            <NavLink to="gallery" mobileMenu>
              Gallery
            </NavLink>
            <NavLink to="contact" mobileMenu>
              Contact
            </NavLink>
          </ul>
          <img src={cartIcon2} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>
      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-black max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-black max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[100px] py-3 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] opacity-95 outline-none text-gray-600
          text-base xs:text-lg placeholder-gray-400"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
