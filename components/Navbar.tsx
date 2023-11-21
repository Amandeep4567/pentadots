"use client";

import { navLinks } from "@/Constants";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [dropDown, setDropDown] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleDropdown(key: string) {
    setDropDown(dropDown === key ? "" : key);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 hover:bg-white hover:shadow-md">
      <Link href="/">
        <h1 className="text-[32px] md:text-[28px] font-extrabold text-[#7E57C2]">
          Penta<span className="text-black">dots</span>
        </h1>
      </Link>

      {/* Responsive Design for Small and Medium Screens */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white p-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-4">
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
                            <Link
                              href={dropdownItem.href}
                              key={dropdownItem.key}
                            >
                              <li>
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
                  <Link href={link.href} key={link.key}>
                    <p className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                      {link.label}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* "Contact Us" button inside the hamburger menu */}
          <Button
            type="button"
            title="Contact Us"
            variant="btn_indigo flex w-full"
          />
        </div>
      )}

      {/* Responsive Design for Large Screens */}
      <ul className="hidden lg:flex h-full gap-12 lg:items-center">
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
                        <Link href={dropdownItem.href} key={dropdownItem.key}>
                          <li>
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
              <Link href={link.href} key={link.key}>
                <p className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </p>
              </Link>
            )}
          </li>
        ))}
        {/* "Contact Us" button for large screens */}
        <Button type="button" title="Contact Us" variant="btn_indigo" />
      </ul>
    </nav>
  );
}
