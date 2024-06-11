import Aboute from "./Aboute";
import BurgerMenu from "./BurgerMenu";

export default function NavBar() {
  return (
    <div
      className={`flex z-50 w-[100%] h-[50px] bg-nav justify-center items-center sm:fixed sm:justify-end sm:pr-10`}
    >

<BurgerMenu/>

      <div className={`w-[50%] max-h-[1000px] flex justify-around sm:hidden `}>
        <div>
          <p className={`font-bold text-[1.2rem]`}>Front-end</p>
        </div>

        <div className={`flex list-none w-[40%] justify-around`}>
          <a href={`#aboute`} className={`cursor-pointer`}>Обо мне</a>
          <a href={`#works`} className={`cursor-pointer`}>Мои проекты</a>
        </div>
      </div>
    </div>
  );
}
