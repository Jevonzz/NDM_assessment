import React from "react";

const reviewData = [
  {
    id: 1,
    review:
      "I had an amazing time at Win Win Casino! The variety of games is impressive, and the staff is super friendly. I particularly enjoyed the poker tables; they were well-organized and lively. Definitely coming back!",
    name: "John Doe",
  },
  {
    id: 2,
    review:
      "Win Win Casino is the best casino I've ever been to! The atmosphere is great, and the games are top-notch. I had a blast playing blackjack and roulette. The staff is very professional and helpful. I highly recommend it!",
    name: "Jane Smith",
  },
  {
    id: 3,
    review:
      "I've been to many casinos, but Win Win Casino is by far my favorite! The layout is modern and clean, and the games are always running smoothly. The staff is friendly and attentive, making me feel welcome. I can't wait to come back!",
    name: "Mike Johnson",
  },
  {
    id: 4,
    review:
      "Win Win Casino is the perfect place to unwind and have fun! The games are exciting, and the staff is always there to help. I enjoyed playing slots and poker, and the food was delicious. I'll definitely be back soon!",
    name: "Sarah Brown",
  },
  {
    id: 5,
    review:
      "This place has the perfect vibe for a fun night out. The slots are modern, and there are plenty of options for card games. I even got lucky and won a small jackpot! Highly recommended for anyone who loves gaming.",
    name: "Maria Garcia",
  },
  {
    id: 6,
    review:
      "Win Win Casino offers a top-notch experience. The drinks were reasonably priced, and the dealers were very professional. The only downside was that it got a little crowded during peak hours, but it shows how popular this place is.",
    name: "David Martinez",
  },
];

const infoData = [
  {
    id: 1,
    title: "Casino Uptime",
    value: "99.95%",
    description: "Online 24/7",
  },
  {
    id: 2,
    title: "Customer Support",
    value: "24/7",
    description: "Live Chat, Email, Phone",
  },
  {
    id: 3,
    title: "Security",
    value: "Secure",
    description: "SSL Encryption",
  },
];

const Review = () => {
  return (
    <div className="overflow-hidden bg-neutral-900" id="reviews">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-8">
            What Our Players Say
          </h2>
        </div>
        <div
          data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full min-h-[400px] rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 w-full h-full">
              <div className="flex justify-center items-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                {reviewData.map((data) => (
                  <div
                    className="hs-carousel-slide flex justify-center w-full h-full px-4 md:px-8"
                    key={data.id}
                  >
                    <div className="flex flex-col bg-white rounded-xl dark:bg-black w-full h-full">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                          "{data.review}"
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                        <div className="flex items-center gap-x-3">
                          <div className="shrink-0">
                            <img
                              className="h-16 w-16 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                              src={
                                data.avatar ||
                                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              }
                              alt="Avatar"
                            />
                          </div>

                          <div className="grow">
                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                              {data.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
          <div className="hs-carousel-pagination flex justify-center absolute bottom-2 start-0 end-0 space-x-2"></div>
        </div>
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {infoData.map((data) => (
            <div key={data.id}>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                {data.title}
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                {data.value}
              </p>
              <p className="mt-1 text-gray-400">{data.description}</p>
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-0 end-0 transform lg:translate-x-32"
          aria-hidden="true"
        >
          <svg
            className="w-40 h-auto sm:w-72"
            width="1115"
            height="636"
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
              fill="currentColor"
              className="fill-orange-500"
            />
            <path
              d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
              fill="currentColor"
              className="fill-cyan-500"
            />
            <path
              d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
              fill="currentColor"
              className="fill-white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Review;
