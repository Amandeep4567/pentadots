import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-24 md:gap-28 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-row">
        <div className="pt-4">
          <h1 className="bold-52 lg:bold-64 text-black">
            <span className="text-[#7E57C2]">Igniting Digital</span>
            <br /> Innovation
          </h1>
          <p className="regular-16 mt-6 text-gray-700 max-w-[520px]">
            Pentadots sparks transformative solutions, crafting software and
            applications for startups and enterprises, simplifying challenges
            with streamlined development
          </p>
          <p className="regular-16 mt-6 text-gray-700 max-w-[520px]">
            Unleashing digital brilliance, crafting bespoke experiences for
            startups and enterprises.
          </p>

          <div className="w-full mt-10 gap-3 sm:flex-row">
            <Button
              type="button"
              // title="Inspire Your Vision"
              title="Shape Your Ideas Together"
              variant="btn_indigo"
            />
          </div>
        </div>
        <div className="xl:ml-48">
          <Image
            src="/hero2.svg"
            alt="innovative"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </section>
  );
}
