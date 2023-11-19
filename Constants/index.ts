export const navLinks = [
  { href: "/", key: "about_us", label: "About Us" },
  {
    href: "/",
    key: "sevices",
    label: "Services",
    dropdown: true,
    dropdownItems: [
      { href: "/", key: "service1", label: "ServiceOne" },
      { href: "/", key: "service2", label: "ServiceTwo" },
    ],
  },
  {
    href: "/",
    key: "solutions",
    label: "Solutions",
    dropdown: true,
    dropdownItems: [
      { href: "/", key: "solution1", label: "SolutionOne" },
      { href: "/", key: "solution2", label: "SolutionTwo" },
    ],
  },
  { href: "/", key: "startups", label: "Startups " },
  { href: "/", key: "hire_developers", label: "Hire Developers" },
  { href: "/", key: "faq", label: "FaQ" },
  // { href: "/", key: "contact_us", label: "Contact Us" },
];

export const footerLinks = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Services",
      "Solution",
      "Startups",
      "Privacy Policy",
      "Contact Us",
    ],
  },
];

export const footerContactLinks = {
  links: [
    { label: "Admin Number", value: "123-456-7890" },
    { label: "Admin Email", value: "pentadots@gmail.com" },
  ],
};
