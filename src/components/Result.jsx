import React from "react";
import reshand from "../assets/img/result/hand.webp";
import r_1 from "../assets/img/result/r_1.webp";
import r_2 from "../assets/img/result/r_2.webp";
import r_3 from "../assets/img/result/r_3.webp";
import r_4 from "../assets/img/result/r_4.webp";
import r_5 from "../assets/img/result/r_5.webp";
import r_6 from "../assets/img/result/r_6.webp";
import r_7 from "../assets/img/result/r_7.webp";
import {FaChevronRight} from "react-icons/fa";

const Result = () => {
  return (
    <section
      id="result"
      className="pt-[45px] "
      style={{backgroundColor: "rgb(191, 143, 253)"}}>
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between w-full relative mb-[45px]">
          <h2 className="text-white text-3xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-center max-w-[640px]">
            Ingliz tili — ajoyib!
            <br />
            Ammo, kursni tugatgandan so'ng qanday natijalarga erisha olasiz?
          </h2>
          <img
            src={reshand}
            alt="hand"
            className=" hidden lg:inline-block text-transparent absolute right-0 -top-[40px]"
            width={"400px"}
            height={"200px"}
            loading="lazy"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[35px]">
          <div className="resultCard gap-4 flex items-center">
            <img
              src={r_1}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center">
            <img
              src={r_2}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center  ">
            <img
              src={r_3}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center">
            <img
              src={r_4}
              alt="result image1"
              className="text-transparent rotate-[170deg]"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center">
            <img
              src={r_5}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center">
            <img
              src={r_6}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
          <div className="resultCard gap-4 flex items-center ">
            <img
              src={r_7}
              alt="result image1"
              className="text-transparent"
              width={60}
              height={60}
              loading="lazy"
            />
            <p
              className="leading-[22px] text-[18px]"
              style={{color: "rgb(10, 26, 63)"}}>
              Siz ingliz tilini qanday o'rganish mumkinligini va haqiqiy
              interaktiv ta'lim nima ekanligini tushunasiz
            </p>
          </div>
        </div>
        <div className="py-[25px] lg:py-[50px] flex justify-center align-center">
          <a
            href="#"
            className="gridBtn ">
            <span>
              <FaChevronRight className="absolute top-3 left-[20px] w-[15px] h-[42px] bounce-animation" />
            </span>
            <span className="ml-[55px] mr-2">Ishtirok etish</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Result;
