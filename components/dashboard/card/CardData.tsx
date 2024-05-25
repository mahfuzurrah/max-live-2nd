import Card3 from "@/public/images/brain.svg";
import Card4 from "@/public/images/circle-play.svg";
import Card1 from "@/public/images/code-branch.svg";
import DeactivatedAccounts from "@/public/images/stars.png";
import { CardItem } from "@/types";

const CardData: CardItem[] = [
  {
    imgSrc: Card1,
    title: "Active flows",
    number: "13",
    gain: "32.3%",
  },
  {
    imgSrc: DeactivatedAccounts,
    title: "Most used flow",
    number: "Contract Analysys  ",
    gain: "32.3%",
  },
  {
    imgSrc: Card3,
    title: "Most used model",
    number: "GPT 4o",
    gain: "32.3%",
  },
  {
    imgSrc: Card4,
    title: "Runned",
    number: "742",
    gain: "32.3%",
  },
];

export default CardData;
