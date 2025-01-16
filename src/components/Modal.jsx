import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ buttonName }) => {
  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={openModal} // Open the modal on button click
      >
        {buttonName}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          id="hs-focus-management-modal"
          className="hs-overlay fixed inset-0 z-[80] flex justify-center items-center bg-gray-500 bg-opacity-50 pointer-events-auto"
          role="dialog"
          tabIndex="-1"
          aria-labelledby="hs-focus-management-modal-label"
        >
          <div className="bg-neutral-800 rounded-xl shadow-lg sm:max-w-lg w-full mx-4 sm:mx-0 p-4 overflow-y-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3
                id="hs-focus-management-modal-label"
                className="font-bold text-gray-800 dark:text-white"
              >
                {buttonName}
              </h3>
              <button
                type="button"
                onClick={closeModal} // Close the modal
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <label
                htmlFor="email-input"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email-input"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:text-neutral-400"
                placeholder="Email"
                autoFocus=""
              />
            </div>
            <div className="p-4 overflow-y-auto">
              <label
                htmlFor="password-input"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password-input"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:text-neutral-400"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                onClick={closeModal} // Close the modal
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                {buttonName === "Login" ? "Login Now" : "Register Now"}{" "}
                {/* Correct conditional button text */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Modal;
