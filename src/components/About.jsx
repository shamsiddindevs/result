import React from "react";
import a1 from "../assets/img/about/1.webp";
import a2 from "../assets/img/about/2.webp";
import a3 from "../assets/img/about/3.webp";
import a4 from "../assets/img/about/4.webp";
import a5 from "../assets/img/about/5.webp";
import a6 from "../assets/img/about/6.webp";
import check from "../assets/img/about/check.webp";
import { FaChevronRight } from "react-icons/fa";
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
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Haqiqatdan ham dolzarb va ma’noli bo'lgan ingliz tilini
                  o'rganasiz. “London is the capital of Great Britain” ga
                  o’xshagan iboralarni yodlashni unutasiz.{" "}
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
                src={a2}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Ota-onangiz kompyuterda/telefonda juda ko'p vaqt
                  sarflayotganingiz uchun sizni koyishmaydi, chunki siz ingliz
                  tilini o'rganayotgan bo’lasiz, shuningdek o'zingiz uchun
                  motivatsiyaga to'la ajoyib muhit yaratasiz.{" "}
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
                src={a3}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Ota-onangiz kompyuterda/telefonda juda ko'p vaqt
                  sarflayotganingiz uchun sizni koyishmaydi, chunki siz ingliz
                  tilini o'rganayotgan bo’lasiz, shuningdek o'zingiz uchun
                  motivatsiyaga to'la ajoyib muhit yaratasiz.{" "}
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
                src={a4}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Ota-onangiz kompyuterda/telefonda juda ko'p vaqt
                  sarflayotganingiz uchun sizni koyishmaydi, chunki siz ingliz
                  tilini o'rganayotgan bo’lasiz, shuningdek o'zingiz uchun
                  motivatsiyaga to'la ajoyib muhit yaratasiz.{" "}
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
                src={a5}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Ota-onangiz kompyuterda/telefonda juda ko'p vaqt
                  sarflayotganingiz uchun sizni koyishmaydi, chunki siz ingliz
                  tilini o'rganayotgan bo’lasiz, shuningdek o'zingiz uchun
                  motivatsiyaga to'la ajoyib muhit yaratasiz.{" "}
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
                src={a6}
                alt="card image1"
                className="max-w-[180px] max-h-[180px] absolute -top-[90px] left-[20px]"
              />
              <div className="flex flex-col gap-6 items-start">
                <span className="cardsBtn">Abituriyentlar</span>
                <p
                  className="leading-[22px] text-[19px]"
                  style={{color: "rgb(10, 26, 63"}}>
                  Agar siz universitet, litsey yoki boshqa o’quv muassasalari
                  uchun ingliz tilidan imtihonga tayyorlanishingiz kerak
                  bo’lsa-yu, lekin bunga vaqtingiz yetmasa ushbu kurs sizga
                  mutlaqo to’g’ri keladi.
                </p>
              </div>
              <div
                className="mt-4 px-5 py-6 relative flex flex-col gap-[10px] rounded-[10px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  flex: "1 1 auto",
                }}>
                <img
                  src={check}
                  alt="check icon"
                  className="text-transparent absolute -top-5 -right-[10px]"
                />
                <span
                  className="leading-[22px] text-[18px] font-semibold "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Sizning kutilgan natijangiz:
                </span>
                <p
                  className="leading-[22px] text-[18px]  "
                  style={{color: "rgb(10, 26, 63)"}}>
                  Ota-onangiz kompyuterda/telefonda juda ko'p vaqt
                  sarflayotganingiz uchun sizni koyishmaydi, chunki siz ingliz
                  tilini o'rganayotgan bo’lasiz, shuningdek o'zingiz uchun
                  motivatsiyaga to'la ajoyib muhit yaratasiz.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="py-[100px] flex justify-center align-center">
            <a href="#" className="gridBtn">
              <span >
                <FaChevronRight className="absolute top-3 left-[20px] w-[15px] h-[42px] bounce-animation" />
              </span>
              <span className="ml-[55px] mr-2">Ishtirok etish</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
