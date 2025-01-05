"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const path = usePathname();
  return (
    <div>
      <Menu>
        <MenuHandler>
          <div className="cursor-pointer ">
            <svg
              class="h-8 w-8 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </MenuHandler>
        <MenuList className="dark:text-zinc-800 border-none space-y-4">
          <Link href={"/dashboard"} className="border-none ">
            {" "}
            <MenuItem
              className={`text-center border-none hover:text-[#304ffe] hover:font-bold border-none ld hover:dark:text-white hover:shadow-2xl ${
                path == "/dashboard" &&
                "text-indigo-500 dark:text-indigo-500 font-bold"
              }`}
            >
              Dashboard
            </MenuItem>
          </Link>
          <Link href={"/dashboard/resume"}>
            {" "}
            <MenuItem
              className={`text-center  hover:text-[#304ffe] hover:font-bold border-none ld hover:dark:text-white hover:shadow-2xl ${
                path == "/dashboard/resume" &&
                "text-indigo-500 dark:text-indigo-500 font-bold"
              }`}
            >
            Build Resume
            </MenuItem>
          </Link>
          <Link href={"/dashboard/plan"}>
            {" "}
            <MenuItem
              className={`text-center  hover:text-[#304ffe] hover:font-bold border-none ld hover:dark:text-white hover:shadow-2xl ${
                path == "/dashboard/plan" &&
                "text-indigo-500 dark:text-indigo-500 font-bold"
              }`}
            >
              Upgrade
            </MenuItem>
          </Link>
          <Link href={"/dashboard/working"}>
            {" "}
            <MenuItem
              className={`text-center  hover:text-[#304ffe] hover:font-bold border-none ld hover:dark:text-white hover:shadow-2xl ${
                path == "/dashboard/working" &&
                "text-indigo-500 dark:text-indigo-500 font-bold"
              }`}
            >
              How It Works?
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
}
