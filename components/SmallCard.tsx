import Image from "next/image";

type smallCardProps = {
  src: string;
  title: string;
};

export default function SmallCard({ src, title }: smallCardProps) {
  return (
    <div className="m-auto">
      <div className="p-6">
        <Image
          alt="Industries"
          src={src}
          width={130}
          height={130}
          className="flex justify-center"
        ></Image>
        <h1 className="text-[#180e28] bold-18 flex justify-center pb-4">
          {title}
        </h1>
      </div>
    </div>
  );
}
