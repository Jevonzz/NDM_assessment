import React from "react";

const bonusData = [
  {
    id: 1,
    image: "/public/bonus1.webp",
    title: "Mega Money Awaits You! Spin the Wheel for $1 and Win Big!",
    description: "Act Fast! Your 80 Free Spins for $1 Won’t Wait Forever!",
    feature1: "Secure",
    feature2: "High RTP",
    feature3: "24/7 Support",
  },
  {
    id: 2,
    image: "/public/bonus2.jpg",
    title: "Get a 100% Deposit Bonus up to $1000!",
    description: "Don’t Miss Out on Your Chance to Double Your Money!",
    feature1: "Secure",
    feature2: "High RTP",
    feature3: "24/7 Support",
  },
];

const Bonus = () => {
  return (
    <div id="bonus">
      <div className="flex-center text-4xl font-semibold">
        <h1 className="mt-5">Grab Your Welcome Bonus Today!</h1>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          {bonusData.map((bonus) => (
            <>
              <div>
                <a href="">
                  <img
                    className="rounded-xl"
                    src={bonus.image}
                    alt="Bonus Image"
                  />
                </a>
              </div>
              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                      {bonus.title}
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">
                      {bonus.description}
                    </p>
                  </div>
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          <span className="font-bold">Secure</span>
                        </span>
                      </div>
                    </li>

                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          <span className="font-bold">High RTP</span>
                        </span>
                      </div>
                    </li>

                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          <span className="font-bold">
                            24/7 Customer Support
                          </span>
                        </span>
                      </div>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Claim Now!
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
