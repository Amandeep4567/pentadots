import Button from "./Button";
import Card from "./Card";

export default function Services() {
  return (
    <section className="bg-gray-10 max-container padding-container my-16 py-10 text-center">
      <div className="">
        <h1 className="text-[#7E57C2] bold-40 font-bold mb-6 text-primary">
          Our Services
        </h1>
        <div className="">
          <div className="grid grid-cols-3 gap-4">
            <Card
              src="/mobiledev.svg"
              style="bg-gray-10"
              heading="Development of Mobile Apps"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
            <Card
              src="/product.svg"
              style="bg-white"
              heading="Product Design"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
            <Card
              src="/webdev.svg"
              style="bg-gray-10"
              heading="Website Development"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
            <Card
              src="/startup.svg"
              style="bg-white"
              heading="Guiding Startups"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
            <Card
              src="/rescue.svg"
              style="bg-gray-10"
              heading="Rescue of Software Projects"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
            <Card
              src="/uiux.svg"
              style="bg-white"
              heading="UI/UX"
              details="Crafting responsive and dynamic websites tailored to elevate your online presence and user experience."
            />
          </div>
          <div className="mt-16 flex justify-center">
            <Button
              type="button"
              title="Discover All Services"
              variant="btn_indigo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
