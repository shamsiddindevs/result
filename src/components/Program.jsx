import React from "react";
import pimg1 from "../assets/img/program/e_1.webp";
import pimg2 from "../assets/img/program/e_2.webp";
import pimg4 from "../assets/img/program/e_4.webp";
import pimg5 from "../assets/img/program/e_5.webp";
import pimg7 from "../assets/img/program/e_7.webp";
import pimg8 from "../assets/img/program/e_8.webp";
import { FaChevronRight } from "react-icons/fa";


const Program = () => {
  return (
    <section
      id="program"
      className="pt-[45px] "
      style={{backgroundColor: "rgb(255, 181, 37)"}}>
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-center max-w-[714px] mx-auto">
          Sizni nima kutmoqda
        </h1>
        <div className="grid grid-cols-1 gap-[35px] lg:grid-cols-2 mt-[35px] ">
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg1}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg2}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg4}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg5}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg7}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
          <div className="programCard">
            <div className="flex justify-between items-start">
            <img
              src={pimg8}
              alt="program card image"
              width={135}
              height={135}
            />
            <div className="flex flex-col gap-2">
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                  background:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                  flex: "1 1 auto",
                }}>
                JO'ShQIN
              </button>
              <button
                className="border-none rounded-[10px] text-white text-base font-semibold leading-[19px] px-2 py-[7px] "
                style={{
                 backgroundImage: "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                  flex: "1 1 auto",
                }}>
                BO'TALOG'IM
              </button>
            </div>
            </div>
            <span
              className="leading-[24px] text-[18px] font-bold"
              style={{color: "rgb(10, 26, 63)"}}>
              Onlayn - format
            </span>
            <span
              className="leading-[22px] text-[18px] font-normal"
              style={{color: "rgb(10, 26, 63)"}}>
              Dunyoning istalgan nuqtasidan va istalgan vaqtda kursga har qanday
              qurilmadan kirish imkoniyatingiz bo’ladi. Siz o'zingizni qulay his
              qiladigan joyda - uyingizda, ko'chada, kafeda, tog'larda va hatto
              choyxonada ham ingliz tilini o’rganishingiz mumkin.
            </span>
          </div>
        </div>
        <div className="py-[50px] lg:py-[100px] flex justify-center align-center">
            <a href="#" className="gridBtn">
              <span >
                <FaChevronRight className="absolute top-3 left-[20px] w-[15px] h-[42px] bounce-animation" />
              </span>
              <span className="ml-[55px] mr-2">Ishtirok etish</span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Program;
