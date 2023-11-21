import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-16 md:gap-28 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col lg:flex-row justify-between items-center text-center md:text-left">
        <div className="pt-4">
          <h1 className="bold-52 lg:bold-64 text-black">
            <span className="text-[#7E57C2]">Igniting Digital</span>
            <br /> Innovation
          </h1>
          <p className="regular-16 mt-6 text-gray-700 text-justify lg:w-[540px]">
            Pentadots sparks transformative solutions, crafting software and
            applications for startups and enterprises, simplifying challenges
            with streamlined development
          </p>
          <p className="regular-16 mt-6 text-gray-700 text-justify lg:w-[540px]">
            Unleashing digital brilliance, crafting bespoke experiences for
            startups and enterprises.
          </p>

          <div className="w-full mt-10 gap-3 flex justify-center md:justify-start sm:flex-none sm:flex-row">
            <Button
              type="button"
              title="Shape Your Ideas Together"
              variant="btn_indigo"
            />
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:block ">
          <Image src="/hero2.svg" alt="innovative" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
