import { useState } from "react";
import Control from "../assets/images/icons/control.png"

import IMAGES from "../assets/images/image"

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ]

  return (
    <div className="flex">
      {/* tailwind.config.js 파일에 colors 추가 (dark-purple) */}
      <div className={`${ open ? 'w-72' : 'w-20' } h-screen p-5 pt-8 bg-dark-purple relative duration-300`}>
        <img className={`${ !open && 'rotate-180'} absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple text-white`} src={Control} alt=""
        onClick={() => setOpen(!open)}></img>

        <div className="flex gap-x-4 items-center">
          <img className={`${open && "rotate-[360deg]"} cursor-pointer duration-500`} src={IMAGES.Logo} alt="" />
          <h1 className={`${!open && "hidden"} text-white origin-left font-bold text-2xl duration-200`}>GrandSun/ICT</h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, index)=>(
            <li key={index} className={`${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md`}>
              <img src={IMAGES[menu.src]} className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left font-bold text-base duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contents 영역 */}
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;