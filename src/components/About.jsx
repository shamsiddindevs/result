import React from "react";
import a1 from "../assets/img/about/1.webp";

const About = () => {
  return (
    <section
      id="about"
      style={{backgroundColor: "rgb(81, 163, 254)"}}
      className="pt-[45px]">
      <div className="w-full max-w-[1200px] mx-auto  px-5  ">
        <div className=" flex flex-col gap-2">
          <h1 className="text-white text-[40px] leading-[48px] font-bold text-center max-w-[714px] mx-auto">
            Bizning kursimiz kimga to’g’ri keladi va sizga qanday natijalar olib
            keladi:
          </h1>
          <div className="cardsGrid">
            <div
              className="mt-[90px] rounded-[20px] px-[45px] pt-[90px] pb-[45px] relative flex flex-col"
              style={{
                border: "4px solid rgb(98, 172, 254)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}>
              <img
                src={a1}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[18px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
            </div>
            <div
              className="mt-[90px] rounded-[20px] px-[45px] pt-[90px] pb-[45px] relative flex flex-col"
              style={{
                border: "4px solid rgb(98, 172, 254)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}>
              <img
                src={a1}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[18px] font-light"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
