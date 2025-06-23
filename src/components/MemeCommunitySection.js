import React from "react";
import tengecom from "../assets/images/bg/tengecom.jpg";

const MemeCommunitySection = () => (
  <section
    id="community"
    className="py-16 bg-[#eee] meme-community lg:px-24 xl:px-72"
  >
    <div className="container grid gap-8 px-4 py-10 mx-auto md:grid-cols-2 rounded-xl">
      <div className="flex flex-col gap-5">
        <div class="about_left_text text-red-600">
          Join the $TENGE Meme community!
        </div>
        <p className="p-6 text-lg leading-relaxed text-white bg-black rounded-xl">
          <span className="font-bold text-yellow-500">Mission</span> <br />
          $TENGE Meme champions the inherent potential within every street
          child. Inspired by TENGE TENGE's journey from hardship to global
          acclaim, we dedicate ourselves to e mpowering the underserved youth.
          By fostering opportunities for growth and creative expression, we aim
          to inspire and uplift every child to see beyond their circumstances
          and realize the universe of possibilities that awaits them. ✊
        </p>
      </div>
      <div className="text-center md:text-left">
        {/* <h2 className="sticky mb-4 text-3xl font-extrabold uppercase top-20">
          About TENGE TENGE <br />{" "}
          <span className="text-black lowercase">
            From the Ghetto to a Global Icon of Hope and Freedom
          </span>
        </h2> */}
        <img
          src={tengecom}
          alt="TENGE TENGE"
          className="object-bottom h-full rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default MemeCommunitySection;
