import Image from "next/image";

type smallCardProps = {
  src: String | StaticImport;
  title: String;
};

export default function SmallCard({ src, title }: smallCardProps) {
  return (
    <div className="">
      <div className="p-6">
        <Image
          alt="Industries"
          src={src}
          width={130}
          height={130}
          className="flex justify-center"
        ></Image>
        <h1 className="text-[#180e28] bold-20 flex justify-center pb-4">
          {title}
        </h1>
      </div>
    </div>
  );
}
