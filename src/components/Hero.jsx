import Input from "../generics/Input";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="py-[80px] overflow-hidden relative z-index-1 after-gradient">
      <div className="w-full max-w-[1200px] mx-auto  px-5  ">
        <div className="flex flex-col gap-4 max-w-[580px] z-[2] relative">
          <div className="flex gap-6 items-center ">
            <div className="text-white leading-[25px] text-[20px]">
              <h4 className="font-bold">Format:</h4>
              <h4>Online</h4>
            </div>
            <div className="text-white text-center leading-[25px] text-[20px]">
              <h4 className="font-bold">Bo'talog'im</h4>
              <h4>790 000 so'm</h4>
            </div>
            <div className="text-white text-center leading-[25px] text-[20px]">
              <h4 className="font-bold">Jo'shqin 3 oy</h4>
              <h4>990 000 so'm</h4>
            </div>
          </div>
          <div className="text-[64px] leading-[80px] text-white font-bold">
            <h1>General Chinese</h1>
          </div>
          <div className="text-white  leading-[25px] text-[20px]">
            <p className="font-bold">
              Zamonaviy o’quv platformasi, qiyqiriq videodarslar va haftada 6
              kun o’qituvchi bilan jonli onlayn darslar sizga atigi 3 oyda
              ingliz tili darajangizni oshirishga kafolat beradi
            </p>
          </div>
          <form
            action="POST"
            className="flex flex-col gap-4 w-[475px]">
            <span
              type="text"
              className="min-h-[50px] px-5 rounded-[10px] text-[18px] h-[50px] outline-none box-border min-w-[364px] flex items-center "
              style={{
                boxShadow: "rgba(7, 7, 7, 0.05) 0px 1px 1px",
                backgroundColor: "rgb(247, 247, 247)",
                border: "1px solid rgba(51, 51, 51, 0.1)",
              }}>
              <span>+998 </span>
              <input
                className="flex-1 ml-1 border-none outline-none bg-transparent h-full "
                type="number"
                placeholder="XXXXXXXXX"
              />
              <span className="opacity-[0.45]">0 / 9</span>
            </span>

            <span
              type="text"
              className="min-h-[50px] px-5 rounded-[10px] text-[18px] h-[50px] outline-none box-border min-w-[364px] "
              style={{
                boxShadow: "rgba(7, 7, 7, 0.05) 0px 1px 1px",
                backgroundColor: "rgb(247, 247, 247)",
                border: "1px solid rgba(51, 51, 51, 0.1)",
              }}>
              <input
                className="flex-1 border-none outline-none bg-transparent h-full "
                type="text"
                placeholder="Ism, familiya"
              />
            </span>

            <div className="flex flex-wrap gap-[15px]">
              <button
                className="px-[15px] w-[230px] flex justify-center items-center font-semibold h-[60px] rounded-[10px] text-white  text-[18px] cursor-pointer transition-all uppercase"
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.3) ",
                  backgroundImage:
                    "linear-gradient(rgb(164, 232, 105) 0%, rgb(90, 175, 16) 100%)",
                }}>
                O'qishni Boshlang!
              </button>

              <a
                href="https://t.me/hanyuban_admin"
                className="px-[15px] w-[230px] flex justify-center items-center font-semibold h-[60px] rounded-[10px] text-white  text-[18px] cursor-pointer transition-all uppercase"
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.3) ",
                  backgroundImage:
                    "linear-gradient(rgb(109, 161, 249) 0%, rgb(72, 119, 211) 100%)",
                }}>
                Bizga bog'lanish
              </a>
            </div>
          </form>
          <div
            className="text-[13px] font-semibold max-w-[364px]"
            style={{color: "rgb(255, 252, 252)"}}>
            <span>Tugmani bosish orqali siz</span>
            <a
              href="#"
              style={{borderBottom: "1px solid rgb(255, 255, 255)"}}>
              ommaviy orreftamizga
            </a>
            <span>rozilik bildirasiz!</span>
          </div>
        </div>
        <div className="absolute -bottom-[80%] -right-[35%] animation-rotation ">
          <img className="max-w-[1052px] h-auto"
            src="/src/assets/img/hero/earth.webp"
            alt="animation earth"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
