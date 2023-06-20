"use client";

import { useState } from "react";
import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";

interface DesktopSidebarProps {
  currentUser: User;
}

export default function DesktopSidebar({ currentUser }: DesktopSidebarProps) {
  const routes = useRoutes();
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  console.log(currentUser);

  return (
    <>
      <SettingsModal currentUser={currentUser} isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((route, index) => (
              <DesktopItem key={index} {...route} />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 fllex flex-col justify-center items-center">
          <div
            role="button"
            className="cursor-pointer hover:opacity-75 transition"
            onClick={() => setIsProfileOpen(true)}
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
}
