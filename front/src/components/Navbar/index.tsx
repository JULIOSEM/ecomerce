"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/user";
import { categoriesToPreload } from "@/utils/categories";
import { cartIcon, userIcon } from "@/utils/icons";

export default function NavBar() {
  const { isLogged } = useContext(UserContext);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCategoryClick = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <div className="fixed w-full z-50 bg-transparent backdrop-blur-sm text-white border-black flex h-16 items-center justify-between px-4">
      <div className="ps-10">
        <Link href={"/home"}>
        </Link>
      </div>

      <div className="flex justify-center ">
        <ul className="flex text-sm font-bold">
          <li className="flex me-10 font-medium">
            <Link
              className="transition duration-300 ease-in-out hover:text-pageColor"
              href={"/home"}
            >
              HOME
            </Link>
          </li>
          <li className="flex font-medium">
            <Link
              href={"/contact"}
              className="transition duration-300 ease-in-out hover:text-pageColor"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        {isLogged ? (
          <ul className="flex text-sm">
            <li className="flex pe-10 font-medium hover:underline">
              <Link
                href={"/cart"}
                className="group text-white transition duration-300 ease-in-out hover:text-pageColor"
              >
                {cartIcon}
              </Link>
            </li>
            <li className="flex pe-10 font-medium hover:underline">
              <Link
                className="group text-white transition duration-300 ease-in-out hover:text-pageColor"
                href={"/user-dashboard"}
              >
                {userIcon}
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex text-sm">
            <li className="flex pe-10 font-medium hover:underline">
              <Link href={"/auth-signin"}>{userIcon}</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}