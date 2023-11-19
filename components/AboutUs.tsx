import Image from "next/image";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="bg-gray-10 max-container padding-container py-4 flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
        <h1 className="text-[#7E57C2] bold-40 font-bold mb-6 text-primary">
          About Us
        </h1>
        <p className="text-gray-600">
          At Pentadots, we are architects of tailored software solutions,
          turning challenges into gateways of opportunity. With a pledge to
          deliver success—efficient, on-point, and budget-friendly—we propel
          your business to the forefront of innovation and industry leadership.
        </p>
        <p className="text-gray-800 mt-6">
          "Innovative support in challenging times. Amidst global shifts,
          Pentadots reimagines businesses with AI, ensuring future resilience
          and success.
        </p>
        <div className="mt-36">
          <Button type="button" title="Know More" variant="btn_indigo" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-48">
        <Image src="/hero1.svg" alt="services" width={470} height={470} />
      </div>
    </section>
  );
}
