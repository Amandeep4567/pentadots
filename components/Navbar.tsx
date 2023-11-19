"use client";

import { navLinks } from "@/Constants";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [dropDown, setDropDown] = useState("");

  function toggleDropdown(key: string) {
    setDropDown(dropDown === key ? "" : key);
  }
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 hover:bg-white hover:shadow-md">
      <Link href="/">
        <h1 className="text-[28px] font-extrabold text-[#7E57C2]">
          Penta<span className="text-black">dots</span>
        </h1>
      </Link>

      <ul className=" flex h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <li key={link.key} className="relative">
            {link.dropdown ? (
              <div
                onClick={() => toggleDropdown(link.key)}
                className="regular-16 flexCenter cursor-pointer pb-2 transition-all"
              >
                {link.label}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>

                {dropDown === link.key && (
                  <ul className="absolute left-0 top-full bg-white mt-2 p-2 rounded-md shadow-md">
                    {link.dropdownItems.map(
                      (dropdownItem: {
                        key: string;
                        href: string;
                        label: string;
                      }) => (
                        <Link href={dropdownItem.href}>
                          <li key={dropdownItem.key}>
                            <p className="p-2 hover:font-bold">
                              {dropdownItem.label}
                            </p>
                          </li>
                        </Link>
                      )
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={link.href}>
                <p className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Button type="button" title="Contact Us" variant="btn_indigo" />
    </nav>
  );
}
