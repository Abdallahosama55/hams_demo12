import React from "react";
import { useTranslation } from "react-i18next";
import Product1 from "../assets/images/product1.svg";
import { FaCircle } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import line from "../assets/images/line.svg";
function ProductHeader() {
  const { t } = useTranslation();

  return (
    <section className="gradient-bg-header flex flex-col  justify-center items-center ">
      <div className="mx-auto w-[80%]  flex-grow">
        <div className=" grid grid-cols-1  xl:grid-cols-2">
          <div className=" flex flex-col  pe-6 gap-4 justify-start items-start  text-black pt-24">
            <span className="text-[#5253B9] bg-white rounded-3xl border-[1px] border-[#5253B9] flex items-center p-3 py-2">
              <BsSoundwave />

              {t("badge__Product_header")}
            </span>
            <h1 className="gradient-text-header lg:text-[2.4em] font-bold text-[36px] text-start">
              {t("title_Product_header")}
            </h1>
            <p className="text-[#7D7D7D] lg:w-[75%] xl:w-[89%] text-[1em] text-start">
              {t("description_Product_header")}
            </p>

            <div className="flex flex-col justify-start items-start  gap-2">
              <div className="grid grid-cols-[25px_1fr] gap-2 items-start">
                {" "}
                {/* Align items in the start */}
                <FaCircle color="#5556BB" className="w-[18px] h-[18px] mt-1" />
                <p className="text-[#9A9A9A]">
                  <span className="font-bold text-black">
                    {t("faster_text")} :
                  </span>
                  {t("faster_desc")}
                </p>
              </div>
              <div className="grid grid-cols-[25px_1fr] gap-2 items-start">
                <FaCircle color="#5556BB" className="w-[18px] h-[18px] mt-1" />{" "}
                {/* Standardized size */}
                <p className="text-[#9A9A9A]">
                  <span className="font-bold text-black">
                    {t("latency_text")} :
                  </span>
                  {t("latency_desc")}
                </p>
              </div>
              <div className="grid grid-cols-[25px_1fr] gap-2 items-start">
                <FaCircle color="#5556BB" className="w-[18px] h-[18px] mt-1" />
                <p className="text-[#9A9A9A]">
                  <span className="font-bold text-black">
                    {t("accuracy_text")} :
                  </span>
                  {t("accuracy_desc")}
                </p>
              </div>
              <button className="rounded-3xl px-2 bg-[#3132A9] text-white hover:border-[1px] cursor-pointer transition-colors ease-in-out duration-300 hover:border-[#3132A9] hover:text-[#3132A9] hover:bg-[white] min-w-[120px] h-10">
              {t("button_Product_Header")}
            </button>
            </div>
          </div>

          <div className=" flex   justify-center  h-full mt-12    items-center">
            <img src={Product1} alt="text_speach_Ai" />
          </div>
        </div>
      </div>

      <img src={line} className=" mt-12 w-full" />
    </section>
  );
}

export default ProductHeader;
