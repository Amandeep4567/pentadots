import Image from "next/image";
import Button from "./Button";

type CardProps = {
  heading: String;
  details: String;
  style: String;
  src: string;
};

export default function Card({ src, heading, details, style }: CardProps) {
  return (
    <div className={`${style} p-4 md:m-2 rounded-md shadow-md`}>
      <Image
        src={src}
        alt="innovative"
        width={110}
        height={110}
        className="m-auto"
      />
      <h2 className="bold-24 flex justify-center pb-4">{heading}</h2>
      <p className="text-gray-700 flex text-center">{details}</p>
      <div className="flex justify-center mt-6">
        <Button type="button" title="Explore" variant="btn_indigo mb-2" />
      </div>
    </div>
  );
}
