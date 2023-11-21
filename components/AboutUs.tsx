// AboutUs.js

import Image from "next/image";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="max-container padding-container flex flex-col-reverse justify-between lg:flex-row">
      <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
        <h1 className="text-[#7E57C2] bold-40 font-bold mb-6 text-primary">
          About Us
        </h1>
        <p className="text-gray-600 text-justify">
          At Pentadots, we are architects of tailored software solutions,
          turning challenges into gateways of opportunity. With a pledge to
          deliver success—efficient, on-point, and budget-friendly—we propel
          your business to the forefront of innovation and industry leadership.
        </p>
        <p className="text-gray-800 mt-6 text-justify ">
          "Innovative support in challenging times. Amidst global shifts,
          Pentadots reimagines businesses with AI, ensuring future resilience
          and success.
        </p>
        <div className="mt-6 lg:mt-36 flex justify-center lg:justify-start">
          <Button type="button" title="Know More" variant="btn_indigo" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-4 md:ml-0 md:mt-8 lg:mt-0">
        <Image
          src="/hero1.svg"
          alt="services"
          width={470}
          height={470}
          className="m-auto"
        />
      </div>
    </section>
  );
}
