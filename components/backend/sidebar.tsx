"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  ClipboardList,
  Handshake,
  Layers3,
  LayoutGrid,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  Tractor,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      Icon: User2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      Icon: Store,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      Icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      Icon: ClipboardList,
      href: "/dashboard/orders",
    },
    {
      title: "Staff",
      Icon: Handshake,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      Icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Stores",
      Icon: ShoppingBag,
      href: "/dashboard/pages",
    },
  ];
  return (
    <div className="bg-slate-50 space-y-6 w-64 h-screen text-slate-700 dark:bg-slate-800 dark:text-slate-50 p-4 left-0 top-0 sticky z-5">
      <Link className="mb-6" href="#">
        <ShoppingCart className="text-slate-800 dark:text-slate-50" />
        <TypewriterEffect words={[{ text: "Grocify" }]} />
      </Link>
      <div className="space-y-6 flex flex-col">
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex text-lime-300 items-center space-x-3  px-6 py-2 border-l-2 border-green-600"
              : "flex items-center space-x-3 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center space-x-3">
              <Layers3 />
              <span>Catalog</span>
              <ChevronRight />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Catalog</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/dashboard/attributes"
                className={
                  pathname === "/dashboard/attributes"
                    ? "flex text-lime-300"
                    : "flex items-center"
                }
              >
                Attributes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link
                href="/dashboard/banners"
                className={
                  pathname === "/dashboard/banners"
                    ? "flex text-lime-300"
                    : "flex items-center"
                }
              >Banners</Link></DropdownMenuItem>
            <DropdownMenuItem>
            <Link
                href="/dashboard/categories"
                className={
                  pathname === "/dashboard/categories"
                    ? "flex text-lime-300"
                    : "flex items-center"
                }
              >Categories
              </Link></DropdownMenuItem>
            <DropdownMenuItem>
            <Link
                href="/dashboard/coupons"
                className={
                  pathname === "/dashboard/coupons"
                    ? "flex text-lime-300"
                    : "flex items-center"
                }
              >Coupons</Link></DropdownMenuItem>
            <DropdownMenuItem><Link
                href="/dashboard/products"
                className={
                  pathname === "/dashboard/products"
                    ? "flex text-lime-300"
                    : "flex items-center"
                }
              >Products</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {sidebarLinks.map((item, i) => {
          const Icon = item.Icon;
          return (
            <Link
              key={i}
              href={item.href} // Add href property here
              className={
                item.href === pathname
                  ? "flex items-center text-lime-300 space-x-3 px-6 py-2 border-l-2 border-green-600"
                  : "flex items-center space-x-3 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="p-1">
          <button className="bg-lime-700 rounded-md flex items-center space-x-3 px-6 py-2 ">
            <LogOut />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
