import {
  AlignJustify,
  Bell,
  Calculator,
  Layout,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
Calculator;
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import ThemeSwitcher from "./toggleButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 top-0 left-60">
      {/*icons*/}
      <span className="text-slate-800 dark:text-slate-50">
        <AlignJustify />
      </span>
      {/*3 icons*/}
      <div className="flex space-x-4">
        <div className="relative inline-flex items-center">
          <ThemeSwitcher />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
              <Bell className="text-green-600" />
              <span className="sr-only">Notifications</span>
              <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 -end-0 dark:border-gray-900">
                20
              </span>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-2 py-4 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="user Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-500 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021-12:40Pm</p>
                  </div>
                </div>
                <span>
                  <X />
                </span>
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="user Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-500 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021-12:40Pm</p>
                  </div>
                </div>
                <span>
                  <X />
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="user Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock Out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-500 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021-12:40Pm</p>
                  </div>
                </div>
                <span>
                  <X />
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpg"
              alt="user Profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-2 py-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="flex items-center space-x-2">
                <Layout className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
