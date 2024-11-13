import t1 from "../assets/img/tarif/1.webp";
import {FaChevronRight} from "react-icons/fa";

const Tarif = () => {
  return (
    <section
      id="tarif"
      className="py-[45px]"
      style={{backgroundColor: "rgb(81, 163, 254)"}}>
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-[80px] mt-[45px]">
          <div className="tarifCard">
            <img
              src={t1}
              alt="tarif image"
              className="absolute left-1/2 -translate-x-1/2 -top-[80px] "
              width={"180px"}
              height={"180px"}
              loading="lazy"
            />
            <div className="flex flex-col items-center gap-8 w-full">
              <span
                className="tarifBtn"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(141, 213, 79) 0%, rgb(90, 163, 28) 100%)",
                }}>
                JO'SHQIN
              </span>
              <p
                className="leading-[22px] text-[18px] "
                style={{color: "rgb(10, 26, 63)"}}>
                (joylar soni — ∞)
              </p>
              <div className="flex flex-col w-full gap-4">
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Barcha o'quv darslariga kirish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kurs kontentiga kirishga to'liq imkoniyat
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    O'quv platformasi{" "}
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kurs tugallangandan so'ng o'quv dasturiga kirish imkoni
                    bo'lmaydi, va platformaga kirish uchun o'quvchilar yana bir
                    oyga pul to'lashlari kerak bo'ladi
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
                <div className="line-through opacity-[70%]">
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
                <div className="line-through opacity-[70%]">
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
              </div>
              <div
                className="text-center text-[24px] leading-[37px] mt-[100px] font-bold"
                style={{color: "rgb(10, 26, 63)"}}>
                <p>3 oyga 990 000 sum</p>
              </div>
              <div className="flex justify-center align-center">
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
          </div>
          <div className="tarifCard">
            <img
              src={t1}
              alt="tarif image"
              className="absolute left-1/2 -translate-x-1/2 -top-[80px] "
              width={"180px"}
              height={"180px"}
              loading="lazy"
            />
            <div className="flex flex-col items-center gap-[40px] w-full">
              <span
                className="tarifBtn"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(191, 143, 253) 0%, rgb(141, 95, 201) 100%)",
                }}>
                Bo'talog'im
              </span>
              <p
                className="leading-[22px] text-[18px] "
                style={{color: "rgb(10, 26, 63)"}}>
                (joylar soni — 1000 ta)
              </p>
              <div className="flex flex-col w-full gap-4">
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Barcha o'quv darslariga kirish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kurs kontentiga kirishga to'liq imkoniyat
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    O'quv platformasi{" "}
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kurs tugallangandan so'ng o'quv dasturiga kirish imkoni
                    bo'lmaydi, va platformaga kirish uchun o'quvchilar yana bir
                    oyga pul to'lashlari kerak bo'ladi
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
                <div>
                  <span
                    className="leading-[22px] text-[18px] font-semibold "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Trening davomida qo'shimcha materiallar olish
                  </span>
                  <p
                    className="leading-[22px] text-[16px] "
                    style={{color: "rgb(10, 26, 63)"}}>
                    Kursni qulay va samarali bajarish uchun juda ko'p sonli
                    cheklistlar va qollanmalarga ega bolish
                  </p>
                </div>
              </div>
              <div
                className="text-center text-[24px] leading-[37px] mt-[100px] font-bold"
                style={{color: "rgb(10, 26, 63)"}}>
                <p>oyiga 990 000 sum</p>
              </div>
              <div className="flex justify-center align-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarif;
