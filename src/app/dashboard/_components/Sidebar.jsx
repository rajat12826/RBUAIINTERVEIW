import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export function Sidebar() {
    return (
      <div>
        <Menu>
        <MenuHandler>
          <div className="cursor-pointer " >
          <svg class="h-8 w-8 text-zinc-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
</svg>

          </div>
        </MenuHandler>
        <MenuList className="dark:text-zinc-800  space-y-4">
          <MenuItem className="hover:font-bold border-none ">Dashboard</MenuItem>
          <MenuItem className="hover:font-bold border-none">Questions</MenuItem>
          <MenuItem className="hover:font-bold border-none">Upgrade</MenuItem>
          <MenuItem className="hover:font-bold border-none">How It Works?</MenuItem>
        </MenuList>
      </Menu>
      </div>
    );
  }