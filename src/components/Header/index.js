import { Logo } from "../../assets/logo/index.js";
import { SearchIcon, Cart } from "../../assets/svgs";
import CloseBtn from "../../assets/svgs/CloseBtn.js";
export default function Header() {
  const navbarToggler = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("w-0");
    const sidebarContent = document.querySelector(".sidebar div");
    sidebarContent.classList.toggle("invisible");
  };
  return (
    <>
      <header className="w-full shadow-[0_-1px_rgb(221,243,249)_inset]">
        <div className="flex justify-center items-center py-3 px-4 bg-primary">
          <h2 className="font-[Montesarrat]  font-semibold tracking-widest">
            FREE SHIPPING ON ORDERS $125+
          </h2>
        </div>
        <div className=" flex columns-12 p-4">
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
          <div className="w-1/12 text-primary">
            <SearchIcon />
          </div>
          <div className="w-1/12 text-primary">
            <Cart />
          </div>
        </div>
      </header>
      <div className="sidebar transition-all	 fixed inset-y-0 w-10/12 h-screen bg-primary">
        <div className="sidebarContent">
          <div className="">
            {" "}
            {/* //Sidebar header */}
            <button className=" w-12 h-8" onClick={navbarToggler}>
              <CloseBtn />
            </button>
          </div>
          <ul className="px-4">
            {NavList.map((item, index) => {
              return (
                <li className="py-5 uppercase text-white font-[Montesarrat] font-semibold tracking-widest border-b">
                  <a href="#">{item.title}</a>
                </li>
              );
            })}
            <li className="py-5   text-white font-[Montesarrat] font-semibold tracking-widest font-normal">
              Account
            </li>
          </ul>
          <div className="absolute bottom-0">sidebar footer</div>
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
