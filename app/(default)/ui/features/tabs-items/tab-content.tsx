import FlowsBg from "@/public/images/result.png";
import Image from "next/image";
import FeaturesElement from "@/public/images/logo.png";
export interface TabContentProps {}
export function TabContent(props: TabContentProps) {
  const {} = props;

  return (
    <div className="relative inline-flex flex-col">
      <Image
        className="md:max-w-none mx-auto rounded"
        src={FlowsBg}
        width={500}
        height="462"
        alt="Flows bg"
      />
      <Image
        className="md:max-w-none absolute left-0 transform animate-float"
        src={FeaturesElement}
        width="100"
        height="20"
        alt="Logo"
        style={{ top: "70%", left: "80%"}}
      />
    </div>
  );
}
