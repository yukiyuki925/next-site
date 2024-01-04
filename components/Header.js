"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headerListItems } from "@/constants";
import { usePathname } from "next/navigation";

function Header() {
  const [active, setActive] = useState();
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);
  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        {/*logo*/}
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">ORIGIN.Doc</p>
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>
        {/*headerListItem*/}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider">
          <ul className="flex gap-8 items-center">
            {headerListItems.map((item) => (
              <Link key={item._id} href={item.link}>
                <li
                  className={`${
                    active === item.link && "text-primeColor"
                  }text-gray-600 hover:text-primeColor cursor-pointer duration-300 group relative`}
                >
                  {item.title}
                  <span
                    className={`${
                      active === item.link && "scale-100"
                    } absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          <button className="w-36 h-8 bg-darkBlue text-white rounded-md hover:bg-primeColor duration-300">
            連絡する
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
