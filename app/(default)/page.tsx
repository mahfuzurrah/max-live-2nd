import Loading from "@/public/images/hourglass.svg";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[70vh] text-blue-primary font-semibold">
      <div className="">
        <Image src={Loading} alt="loading" />
      </div>
      Nothing to display as now
    </div>
  );
}
