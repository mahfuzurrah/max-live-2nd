import Image, { StaticImageData } from "next/image";

export interface CompanyImageProps {
  image: StaticImageData;
  alt: string;
}

export function CompanyImage(props: CompanyImageProps) {
  const { image, alt } = props;

  return (
    <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
      <Image
        className="max-w-full fill-current text-gray-400"
        src={image}
        alt={alt}
      />
    </div>
  );
}
