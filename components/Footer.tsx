import React from "react";
import Link from "next/link";
import { footerLinks, footerContactLinks } from "@/Constants";

export default function () {
  return (
    <footer className="flexCenter mb-4">
      <div className="padding-container max-container flex w-full flex-col gap-4">
        <div className="flex flex-row gap-24">
          <div className="">
            <Link href="/">
              <h1 className="text-[28px] font-extrabold text-[#7E57C2]">
                Penta<span className="text-black">dots</span>
              </h1>
            </Link>
            <h1 className="bold-20 mt-10">Address:</h1>
            <p className="text-md text-gray-30 mt-1">
              Calicut, Thrissur, Banglore
            </p>
          </div>
          <div className="ml-10">
            {footerLinks.map((footerLink) => (
              <div className="">
                <h1 className="bold-24 mb-8">{footerLink.title}</h1>
                <div className="flex flex-col gap-4 text-gray-30">
                  {footerLink.links.map((link) => (
                    <p>
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="">
              <h1 className="bold-24 mb-8">Contact Us</h1>
              <div className="flex flex-col gap-4 text-gray-30">
                {footerContactLinks.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p key={link.label}>{link.label}:</p>
                    <p
                      key={link.value}
                      className="bold-16 whitespace-nowrap text-blue-70"
                    >
                      {link.value}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Pentadots | All rights reserved
        </p>
      </div>
    </footer>
  );
}
