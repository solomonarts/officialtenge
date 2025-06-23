import { notification } from "antd";
import React, { useMemo, useState } from "react";

const Context = React.createContext({
  name: "Default",
});

function ContactAddress() {
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
      <div className="bottom-0 flex flex-col items-center justify-center h-[60vh] border-b-[#f16b1d] border-b-4 lg:px-24 xl:px-72">
        <h6 className="text-[50px] font-bold mb-4 text-red-600 text-center mt-5">
          Solana Contract Address
        </h6>
        <div className="w-11/12 p-1 bg-black rounded-lg bg-opacity-90 md:w-3/5">
          <div className="flex items-center px-4 py-2">
            <span className="flex-grow text-white truncate">{address}</span>
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
          <h6 className="text-center text-[12px]">
            $TENGE Meme champions the inherent potential within every street
            child. Inspired by TENGE TENGE's journey from hardship to global
            acclaim, we dedicate ourselves to e mpowering the underserved youth.
            By fostering opportunities for growth and creative expression, we
            aim to inspire and uplift every child to see beyond their
            circumstances and realize the universe of possibilities that awaits
            them.
          </h6>
        </div>
      </div>
    </Context.Provider>
  );
}

export default ContactAddress;
