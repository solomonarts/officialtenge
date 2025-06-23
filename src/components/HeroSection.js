import React, { useMemo, useState } from "react";
import { Button, notification } from "antd";
import bgpic1 from "../assets/images/bg/bbg4.png";
import tengebg from "../assets/images/bg/tengebg.jpg";
import tenge1 from "../assets/images/bg/tenge1.PNG";

const Context = React.createContext({
  name: "Default",
});

function HeroSection({ openDock }) {
  const [address] = useState("0x1234...abcd");

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.info({
      message: `Notification`,
      description: `Address Copied to clipboard`,
      placement: "bottomLeft",
    });
  };
  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    openNotification();
  };
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <section
        id="home"
        className="relative text-white bg-fixed bg-black bg-no-repeat bg-cover lg:px-24 xl:px-72 lg:py-10 hero"
        style={{
          backgroundImage: `url(${tengebg})`,
        }}
      >
        <div className="relative border-white rounded-2xl bg-black/60 border-[1px]">
          <div className="container relative grid grid-cols-1 gap-8 px-4 mx-auto mt-0 md:grid-cols-2">
            <div className="relative mt-12 main_pic_container">
              <img src={tenge1} alt="TENGE" className="main_pic 3d_pic" />
            </div>
            <div className="flex flex-col items-start justify-center mb-6 text-center md:text-left">
              <h1 className="mb-6 font-bold text-white uppercase main_hero_text text-[5.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]">
                The <br />
                <span className="text-red-600">Official</span> <br /> $TENGE
                MEME
              </h1>
              <p className="px-10 py-3 bg-black/20 text-[23px] font-thin italic mb-4">
                “Every Child Holds a Universe”
              </p>
              <p className="mb-8 text-[32px] font-[200]">
                Join the $TENGE Community, lets make History Now.
              </p>
              <button className="px-6 py-2 text-white bg-red-600 rounded-lg shadow-lg hover:bg-orange-500 m-auto md:m-0 text-[24px] font-bold uppercase">
                Buy $TENGE
              </button>
            </div>
          </div>
          <div className="bottom-0 flex flex-col items-center justify-center mt-8">
            <h6 className="text-[20px] font-bold mb-4">
              Solana Contract Address
            </h6>
            <div className="w-11/12 p-1 bg-black rounded-lg bg-opacity-90 md:w-3/5">
              <div className="flex items-center px-4 py-2">
                <span className="flex-grow truncate text-whitw">{address}</span>
                <button
                  type="primary"
                  className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-orange-500"
                  onClick={handleCopy}
                >
                  Copy Address
                </button>
              </div>
            </div>
            <div className="p-10">
              <h6>
                The $TENGE Memes celebrate TENGE's journey from a street kid to
                a global icon, embodying the power of opportunity and
                resilience. These tokens are meant to foster community
                engagement and symbolize solidarity with the values of hope and
                empowerment that TENGE’s life represents. These memes are
                strictly meant for community support and engagement; they are
                not investments, do not represent investment contracts, and are
                not to be considered securities in any form. See Terms &
                Conditions{" "}
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
              </h6>
            </div>
          </div>
        </div>
      </section>
    </Context.Provider>
  );
}

export default HeroSection;
