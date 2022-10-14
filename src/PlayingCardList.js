import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
// old way without using hooks:
// function CardTable() {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={addCard}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(cardData => (
//           <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//         ))}
//       </div>
//     </div>
//   );
// }

// new way making use of hooks:
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  // cards, addCard, clearCards correspond to the 3 things returned at end of useAxios function in hooks.js - responses, addResponseData, clearResponses. first is a variable and the second two are functions. cards gets set in local storage, and the response data from the API is used then cleared.
  // reason we don't use useState with hooks is because local storage is handling keeping that information. syncing state to local storage so that it persists through a page refresh.
  // https://usehooks.com/useLocalStorage/
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
          // using default for back; see playingcard.js
        ))}
      </div>
    </div>
  );
}


CardTable.defaultProps = {};

export default CardTable;
