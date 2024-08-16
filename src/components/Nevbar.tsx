'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Nevbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-5", className)}
    >
      <Menu setActive={setActive}>
        <Link href='/'>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Contact">
      <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="mailto: aizaznaeem432@gmail.com">Email</HoveredLink>
      <HoveredLink href="https://www.linkedin.com/in/aizaz-naeem-bba5ba276/" target= "_blank">Linkdin</HoveredLink>
      <HoveredLink href="https://www.instagram.com/aizaz_rajput/" target="_blank">Instagram</HoveredLink>
      </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Portfolio">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="https://portfolio-p-sigma.vercel.app/" target="_blank">Space Portfolio</HoveredLink>
      </div>
      </MenuItem>
      </Menu>
        </div>
  )
}

export default Nevbar