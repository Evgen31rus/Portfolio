import Aboute from "./Aboute";
import RussianPNG from '../img/language/Russian.png'
import usaPNG from '../img/language/USA.png'
import BurgerMenu from "./BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { HandleSwitchLanguage } from "../store/SliceLanguage";
import { RootState } from "../store/store";
import CoatOfArmsRussian from '../img/language/coat of arms.png'

export default function NavBar() {

  const dispatch = useDispatch()
 const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)



  return (
    <div
      className={`flex z-50 w-[100%] h-[50px] bg-nav justify-center items-center sm:fixed sm:justify-around sm:pr-10 sm:flex-row-reverse `}
    >

<BurgerMenu/>

      <div className={`w-[50%] max-w-[1000px] flex justify-around  md:w-[80%]`}>
        <div className={`w-[240px] h-[30px] flex justify-around items-center `}>
          <p className={`font-bold text-[1.2rem]`}>{RussianLanguage? 'Язык' : 'Language'}</p>
          <div className={`w-[80px] h-[30px] shadow-lg shadow-cyan-500/50 rounded-xl cursor-pointer relative bg-cover bg-center transition-all duration-300 border-2 border-[#dbdada]`} onClick={()=>dispatch(HandleSwitchLanguage())}>
          <div className={`w-[30px] h-[100%] bg-cover bg-center rounded-full absolute transition-all duration-300 ${RussianLanguage? 'left-[0%]' : 'left-[65%]'}`}  style={{backgroundImage: `url('${RussianLanguage? RussianPNG : usaPNG} ')`} }></div>
          </div>
          
         
          
        </div>

        <div className={`flex list-none w-[40%] justify-around sm:hidden md:w-[90%]`}>
          <a href={`#aboute`} className={`cursor-pointer`}>{RussianLanguage? 'Обо мне' : 'About me'}</a>
          <a href={`#works`} className={`cursor-pointer`}>{RussianLanguage? 'Мои проекты' : 'My projects'}</a>
        </div>
      </div>
    </div>
  );
}
