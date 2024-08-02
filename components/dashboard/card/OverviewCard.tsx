import ArroUp from "@/public/images/up.svg";
import { CardItem } from "@/types";
import Image from "next/image";

const OverviewCard = ({ imgSrc, title, number, gain }: CardItem) => {
  return (
    <div className="overview_card">
      <div className="title">
        <Image src={imgSrc} alt={title} width="32" height="32" />
        <div className="active-content">
          <p className="active-text">{title}</p>
          <p className="mb-2 text-lg font-bold text-black">{number}</p>
          <div className="flex card-btn">
            <Image src={ArroUp} width="16" height="16" alt="Arrow Up" />
            <span>{gain}</span> gain this month
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
