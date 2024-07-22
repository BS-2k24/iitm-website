import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Secure } from "../../assets/gif/";

function Verify() {
  const [showNewText, setShowNewText] = useState(false);

  const navigate = useNavigate();

  const handleMouseDown = () => {
    setShowNewText(true);
  };

  const handleMouseUp = () => {
    setShowNewText(false);
  };

  return (
    <>
      <main className="bg-[#F3F3F3] h-[100vh] w-[100vw] flex justify-center items-center font-inter">
        <section className="bg-white laptop:w-[30vw] laptop:h-[75vh] h-full p-1 rounded-2xl flex flex-col justify-center items-center">
          <img
            src={Secure}
            alt="secure"
            className="max-w-[60%] laptop:h-full object-contain p-4"
          />
          <p className="text-[13px] text-zinc-700 font-[500] py-4 px-6">
            By proceeding, you confirm that you have read and agreed to the{" "}
            <span className="underline">Terms</span> of Virtual Campus - IIT
            Madras email verification system
          </p>
          <motion.button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={navigate("/")}
            className="w-[90%] min-h-10 text-white rounded-lg text-sm font-normal font-instrument relative overflow-hidden flex items-center justify-center"
          >
            <AnimatePresence>
              {!showNewText ? (
                <>
                  <motion.div
                    key="initial-bg"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center items-center gap-2 w-full h-full bg-[#121417] p-2 rounded-lg"
                  ></motion.div>
                  <motion.p
                    key="initial-text"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute flex justify-center items-center gap-2"
                  >
                    Hold to Continue <span className="text-[17px]">→</span>
                  </motion.p>
                </>
              ) : (
                <>
                  <motion.div
                    key="processing-bg"
                    initial={{ x: "-100%", backgroundColor: "#EDEDED" }}
                    animate={{ x: 0, backgroundColor: "#e1e1e1" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute flex justify-center items-center gap-2 w-full h-full  p-2 z-30 rounded-lg"
                  ></motion.div>
                  <motion.p
                    key="processing-text"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute flex justify-center items-center gap-2 text-black font-medium z-40"
                  >
                    Processing
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </motion.button>
          <div className="flex items-center justify-center gap-2 mt-5 font-medium py-4 border-y-[1px] w-full">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.30471 1.76548L4.35429 3.25382C3.44387 3.59423 2.69971 4.6709 2.69971 5.63673V11.5188C2.69971 12.453 3.31721 13.6801 4.06929 14.2421L7.47346 16.7834C8.58971 17.6226 10.4264 17.6226 11.5426 16.7834L14.9468 14.2421C15.6989 13.6801 16.3164 12.453 16.3164 11.5188V5.63673C16.3164 4.66298 15.5722 3.58632 14.6618 3.2459L10.7114 1.76548C10.0385 1.52007 8.96179 1.52007 8.30471 1.76548Z"
                stroke="#171717"
                strokeOpacity="0.5"
                strokeWidth="1.1875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.16455 9.3971L8.43913 10.6717L11.8433 7.26752"
                stroke="#171717"
                strokeOpacity="0.5"
                strokeWidth="1.1875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#171717] opacity-70 text-sm">
              Your personal information is secure.
            </p>
          </div>
          <p className="p-4 text-sm text-[#171717] opacity-70 font-normal w-full text-center">
            Powered by <span className="font-semibold">Rabbit</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default Verify;
