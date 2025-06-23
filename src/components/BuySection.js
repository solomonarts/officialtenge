import React from "react";
import { Button } from "antd";
import solanalg from "../assets/images/logos/solana-sol-logo_1solana-sol-logo.webp";
import usdc8 from "../assets/images/logos/usdc.webp";

const BuySection = ({ openDock }) => (
  <section
    id="buy"
    className="py-16 bg-white buy lg:px-24 xl:px-72 h-[60vh] flex flex-col justify-center"
  >
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-8 text-5xl font-bold">Buy $TENGE TENGE with Crypto!</h2>
      <div className="flex items-center justify-center gap-10 mb-8">
        <div className="flex flex-col justify-center rounded-full">
          <img src={usdc8} className="w-24 h-auto" />
        </div>
        <div className="flex flex-col justify-center h-16 p-2 bg-black rounded-full">
          <img src={solanalg} className="w-12 h-auto aspect-square" />
        </div>
      </div>
      <div className="flex justify-center mb-10 space-x-4">
        <button className="px-6 py-2 text-white bg-red-600 rounded-md text-[28px] uppercase font-extrabold">
          Buy Now
        </button>
      </div>
      <p className="text-black text-[12px]">
        $TENGE Meme champions the inherent potential within every street child.
        Inspired by TENGE TENGE's journey from hardship to global acclaim, we
        dedicate ourselves to e mpowering the underserved youth. By fostering
        opportunities for growth and creative expression, we aim to inspire and
        uplift every child to see beyond their circumstances and realize the
        universe of possibilities that awaits them.{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={() => openDock("terms")}
        >
          Here
        </span>
        , See Privacy Policy{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={() => openDock("privacy")}
        >
          Here
        </span>
      </p>
    </div>
  </section>
);

export default BuySection;
