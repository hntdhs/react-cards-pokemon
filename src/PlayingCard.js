import React from "react";
import { useFlip } from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
// is front defined elsewhere?
function PlayingCard({ front, back = backOfCard }) {
  // old way:
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // new way:
  const [isFacingUp, flip] = useFlip();
  // why new way? useFlip comes from hooks, and with hooks it's just one line and doesn't use useState. more easily reusable.
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
