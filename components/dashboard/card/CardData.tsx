import Card1 from "@/public/images/active_accounts.svg";
import DeactivatedAccounts from "@/public/images/deactivated_accounts.svg";
import Card3 from "@/public/images/payment.svg";
import Card4 from "@/public/images/transactions.svg";
import { CardItem } from "@/types";

const CardData: CardItem[] = [
  {
    imgSrc: Card1,
    title: "Active models",
    number: "13",
    gain: "32.3%",
  },
  {
    imgSrc: DeactivatedAccounts,
    title: "Best Models",
    number: "BTC ",
    gain: "32.3%",
  },
  {
    imgSrc: Card3,
    title: "Wallet",
    number: "$9246",
    gain: "32.3%",
  },
  {
    imgSrc: Card4,
    title: "Transactions",
    number: "742",
    gain: "32.3%",
  },
];

export default CardData;
