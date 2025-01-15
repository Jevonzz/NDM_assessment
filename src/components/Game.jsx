import React from "react";

const gameData = [
  {
    id: 1,
    gameName: "Blackjack",
    gameImage: "/public/game/blackjack.png",
    gameDescription:
      "Blackjack is a casino banked game, meaning that players compete against the house rather than each other.",
  },
  {
    id: 2,
    gameName: "Roulette",
    gameImage: "/public/game/roulette.jpg",
    gameDescription:
      "Roulette is a casino game where players place bets on various numbers and combinations of numbers on a roulette wheel.",
  },
  {
    id: 3,
    gameName: "Poker",
    gameImage: "/public/game/poker.webp",
    gameDescription:
      "Poker is a card game that combines skill, strategy, and luck. Players bet on the strength of their hand in rounds of betting.",
  },
  {
    id: 4,
    gameName: "Slots",
    gameImage: "/public/game/slots.jpg",
    gameDescription:
      "Slots, also known as slot machines, are casino games where players insert coins or tokens into a machine and pull a lever or press a button to spin the reels.",
  },
  {
    id: 5,
    gameName: "Craps",
    gameImage: "/public/game/craps.jpg",
    gameDescription:
      "Craps is a dice game that is played in casinos. Players place bets on the outcome of the roll of two dice.",
  },
  {
    id: 6,
    gameName: "Baccarat",
    gameImage: "/public/game/bacarrat.jpg",
    gameDescription:
      "Baccarat is a card game that is played in casinos. Players bet on the outcome of the game, which is determined by the value of the cards dealt to the player and the dealer.",
  },
];

const Game = () => {
  return (
    <div className="mt-10" id="game">
      <div className="flex-center text-4xl font-semibold">
        <h1>Explore Our Top Casino Games</h1>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameData.map((game) => (
            <div
              key={game.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div className="h-52 w-full flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                <img
                  src={game.gameImage}
                  alt={game.gameName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 min-h-[12rem]">
                <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {game.gameName}
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-neutral-400">
                  {game.gameDescription}
                </p>
              </div>
              <div className="flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Play Demo
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Play Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
