import FeaturesBg from "@/public/images/features-bg.png";
import Image from "next/image";
import FeaturesElement from "@/public/images/features-element.png";
export interface TabContentProps {}
export function TabContent(props: TabContentProps) {
  const {} = props;

  return (
    <div className="relative inline-flex flex-col">
      <Image
        className="md:max-w-none mx-auto rounded"
        src={FeaturesBg}
        width={500}
        height="462"
        alt="Features bg"
      />
      <Image
        className="md:max-w-none absolute w-full left-0 transform animate-float"
        src={FeaturesElement}
        width={500}
        height="44"
        alt="Element"
        style={{ top: "30%" }}
      />
    </div>
  );
}
