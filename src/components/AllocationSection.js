import { React } from "react";
import allocationpic from "../assets/images/bg/allocation.PNG";

const AllocationSection = ({ openDock }) => (
  <section
    id="allocation"
    className="py-16 bg-gradient-to-t from-[#210000] to-black border-b-red-600 border-b-4 allocation lg:px-24 xl:px-72"
  >
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-8 text-5xl font-bold text-red-600">Allocation</h2>
      <p className="text-white mb-8 text-[20px]">
        There are 260,000,000 $TENGE available on day one and will grow to a
        total of 1 billion $TENGE over three years. Each group's allocation are
        released on their own schedule over 3 years.
      </p>
      <div className="flex justify-center">
        <img
          src={allocationpic}
          alt="Allocation Chart"
          className="w-4/5 h-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-10 text-[12px] font-light text-white">
        $TENGE Meme champions the inherent potential within every street child.
        Inspired by TENGE TENGE's journey from hardship to global acclaim, we
        dedicate ourselves to e mpowering the underserved youth. By fostering
        opportunities for growth and creative expression, we aim to inspire and
        uplift every child to see beyond their circumstances and realize the
        universe of possibilities that awaits them. ✊{" "}
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

export default AllocationSection;
