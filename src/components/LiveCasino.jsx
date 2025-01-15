import React from "react";

const liveCasinoData = [
  {
    id: 1,
    gameName: "Blackjack",
    gameImage: "/public/game/live1.webp",
    gameDescription:
      "Play the classic Blackjack game with real dealers and live streaming.",
  },
  {
    id: 2,
    gameName: "Roulette",
    gameImage: "/public/game/live2.png",
    gameDescription:
      "Experience the thrill of Roulette with live dealers and real-time gameplay.",
  },
  {
    id: 3,
    gameName: "Baccarat",
    gameImage: "/public/game/live3.webp",
    gameDescription:
      "Join the excitement of Baccarat with live dealers and real-time streaming.",
  },
];

const LiveCasino = () => {
  return (
    <div className="bg-neutral-900">
      <div className="flex-center text-4xl font-semibold">
        <h1 className="mt-5">Live Casino</h1>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveCasinoData.map((data) => (
            <div
              key={data.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div className="h-52 w-full flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden relative">
                <span className="absolute top-2 right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
                <img
                  src={data.gameImage}
                  alt={data.gameName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 min-h-[8rem]">
                <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {data.gameName}
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-neutral-400">
                  {data.gameDescription}
                </p>
              </div>
              <div className="flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
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

export default LiveCasino;
