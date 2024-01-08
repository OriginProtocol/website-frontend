import React from "react";
import { assetRootPath } from "../utils/image";
import { Typography } from "@originprotocol/origin-storybook";

const OethBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gradient-oeth-from to-gradient-oeth-to h-[124px] flex items-center pl-6 md:pl-0 justify-start md:!justify-center text-white rtl:!gap-4 md:!gap-10">
      <img
        src={assetRootPath("/images/oeth.svg")}
        width={54}
        height={54}
        alt="OETH"
        className="w-[64px] h-[64px] md:w-[54px] md:h-[54px] mr-4 md:mr-0"
      />
      <div className="flex !items-start md:!items-center flex-col md:flex-row !gap-0 md:!gap-10">
        <Typography.H7 className="!text-sm md:!text-2xl opacity-100">
          Stack ETH faster with OETH
        </Typography.H7>
        <button
          className="inline bg-[#7c41f7] !px-4 md:!px-6 !py-[6px] rounded-[100px] border border-white !mt-2 md:!mt-0"
          onClick={() => window.open("https://www.oeth.com", "_blank")}
        >
          Learn more
          <img
            src={assetRootPath("/images/ext-link-white.svg")}
            width={12}
            height={12}
            alt="External Link"
            className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] inline ltr:!ml-2 rtl:!mr-2"
          />
        </button>
      </div>
    </div>
  );
};

export default OethBanner;
