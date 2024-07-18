import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

// const socket = io("http://localhost:3000");

function Room() {
  const { roomId } = useParams();
  const [players, setPlayers] = useState([]);
  const [cards, setCards] = useState([]);
  const [hand, setHand] = useState([]);
  const [card, setCard] = useState("");

  // useEffect(() => {
  //   socket.emit('joinRoom', roomId);
  //   socket.on('playerJoined', (playerId) => {
  //     setPlayers((prev) => [...prev, playerId]);
  //   });

  //   socket.on('hand', (hand) => {
  //     setHand(hand);
  //   });

  //   socket.on('cardPlayed', ({ playerId, card }) => {
  //     setCards((prev) => [...prev, { playerId, card }]);
  //   });

  //   return () => {
  //     socket.off('playerJoined');
  //     socket.off('hand');
  //     socket.off('cardPlayed');
  //   };
  // }, [roomId]);

  // const playCard = (card) => {
  //   socket.emit("playCard", { roomId, card });
  // };

  return (
    <div>
      {/* <h1>Room: {roomId}</h1>
      <div>
        <h2>Players</h2>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Your Hand</h2>
        <ul>
          {hand.map((card, index) => (
            <li key={index}>
              {card} <button onClick={() => playCard(card)}>Play</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Played Cards</h2>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              {card.playerId}: {card.card}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Room;
