import SmallCard from "./SmallCard";

export default function Services() {
  return (
    <section className="bg-gray-10 max-container padding-container p-10 my-10">
      <div className="m-auto">
        <h1 className="text-[#7E57C2] bold-40 font-bold text-primary text-center">
          Industries we Serve
        </h1>
        <div className="my-10">
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <SmallCard src="/realstate.svg" title="REALSTATE" />
            <SmallCard src="/healthcare.svg" title="HEALTHCARE" />
            <SmallCard src="/ecommerce.svg" title="ECOMMERCE" />
            <SmallCard src="/textile.svg" title="TEXTILE" />
            <SmallCard src="/construction.svg" title="CONSTRUCTION" />
            <SmallCard src="/education.svg" title="EDUCATION" />
            <SmallCard src="/fashion.svg" title="FASHION" />
            <SmallCard src="/travel.svg" title="TRAVEL & TOURISM" />
          </div>
        </div>
      </div>
    </section>
  );
}
