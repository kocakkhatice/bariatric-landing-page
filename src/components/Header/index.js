import { Logo } from "../../assets/logo/index.js";
import { SearchIcon, Cart } from "../../assets/svgs";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "../../assets/svgs/asideFooter";

import CloseBtn from "../../assets/svgs/CloseBtn.js";
export default function Header() {
  const navbarToggler = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("w-0");
    sidebar.classList.toggle("w-10/12");
    sidebar.classList.toggle("invisible");

    const sidebarContent = document.querySelector(".sidebar div");
    sidebarContent.classList.toggle("invisible");
    sidebarContent.classList.toggle("w-0");
    sidebarContent.classList.toggle("w-10/12");

    //sidebarContent.classList.toggle("invisible");
  };
  return (
    <>
      <header className="w-full shadow-[0_-1px_rgb(221,243,249)_inset]">
        <div className="flex justify-center items-center py-3 px-4 bg-primary">
          <h2 className="font-[Montesarrat]  font-semibold tracking-widest text-xs">
            FREE SHIPPING ON ORDERS $125+
          </h2>
        </div>
        <div className=" flex justify-center items-center columns-12 p-4 relative ">
          <div
            className="w-1/12   flex flex-col justify-center items-center "
            onClick={navbarToggler}
          >
            <span className="block w-5 h-0.5 mb-1 bg-primary"></span>
            <span className="block w-5 h-0.5 mb-1 bg-primary"></span>
            <span className="block w-5 h-0.5   bg-primary"></span>
          </div>
          <div className="w-9/12  flex justify-center items-center">
            <a>
              <img src={Logo} />
            </a>
          </div>
          <div className="w-1/12 h-full text-primary ">
            <SearchIcon />
          </div>
          <div className="w-1/12 h-full text-primary">
            <Cart />
          </div>
        </div>
      </header>
      <div className="sidebar transition-all invisible pl-4 pr-5 fixed inset-y-0 w-0/12 h-screen bg-[#1dafd9] pt-5">
        <div className="sidebarContent invisible w-0">
          {" "}
          {/* //Sidebar header */}
          <button className="block w-4 h-4 pb-5" onClick={navbarToggler}>
            <CloseBtn />
          </button>
          <ul className="">
            {NavList.map((item, index) => {
              return (
                <li className="py-5 uppercase text-white font-[Montesarrat] font-semibold tracking-widest border-solid border-b border-[#ffffff40]">
                  <a href="#">{item.title}</a>
                </li>
              );
            })}
            <li className="py-5   text-white font-[Montesarrat] font-semibold tracking-widest font-normal">
              Account
            </li>
          </ul>
          <footer className="absolute left-0 bottom-0 w-full   shadow-[0_1px_#ffffff40_inset] ">
            <ul className="grid grid-cols-4 justify-evenly h-full py-4">
              {footerList.map((item, index) => {
                return (
                  <a className="inline-flex items-center justify-center w-full h-full ">
                    <li className="  text-white font-semibold tracking-widest font-normal ">
                      {item.icon}
                    </li>
                  </a>
                );
              })}
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

const NavList = [
  {
    title: "Premium Support Group",
  },
  {
    title: "SHOP",
  },
  {
    title: "2022 EASTER DINNER menu & recipes",
  },
  {
    title: "Recipes",
  },
  {
    title: "Learn",
  },
  {
    title: "Podcast: Real Talk",
  },
  {
    title: "VIP CLUB REWARDS",
  },
  {
    title: "Subscriptions",
  },
];
const footerList = [
  {
    link: "https://www.facebook.com",
    icon: <Facebook />,
  },
  {
    link: "https://www.twitter.com",
    icon: <Twitter />,
  },
  {
    link: "https://www.instagram.com",
    icon: <Instagram />,
  },
  {
    link: "https://www.youtube.com",
    icon: <Youtube />,
  },
];
