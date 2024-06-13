import { useState } from "react";
import Info from "./Info";
import Slider from "./SliderWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Aboute(){
    const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
    const [isOpenEducation, setIsOpenEducation] = useState<boolean>(false)

    const HandleIsOpenEducation= () => {
        setIsOpenEducation(!isOpenEducation)
    }

    return(
        <div className={`bg-[white] flex flex-col w-[90%] min-h-[550px] shadow-lg shadow-cyan-500/50 justify-around items-center max-w-[1200px] mt-5 sm:h-[1050px] sm:w-[100%] sm:overflow-[hidden] sm:mt-10 sm:pb-10 `} id={`aboute`}>

<h1 className={`flex h-[5%] text-[2.0rem] font-medium mb-5 sm:mt-5`}>{RussianLanguage? 'Обо мне':'About me'}</h1>

            
<div className={`flex w-[90%] h-[80%] justify-around items-center sm:flex-col-reverse md:flex-col`}>
<Info/>
<Slider/>
</div>
<div className={`w-[90%] min-h-[50px] mb-5`}>

<div className={`min-h-[50px] w-[100%] flex flex-col justify-center shadow-lg shadow-cyan-500/50 rounded-xl pl-10 overflow-hidden`}>

<div className={`w-[100%] flex items-center`} onClick={HandleIsOpenEducation}>
<div className={`w-[40px] h-[40px] rounded-full mr-5 flex justify-center items-center font-bold cursor-pointer shadow-lg shadow-cyan-500/50`}>
<div className={`absolute w-[20px] h-[5px] bg-nav`}></div>
<div className={`absolute w-[20px] h-[5px] bg-nav transition-[transform] duration-300 ${!isOpenEducation? 'rotate-90' : 'rotate-0'}`}></div>
    </div>
    {RussianLanguage? 'Образование':'Education'}
</div>
   
<div className={`w-[100%] transition-[height] duration-300 mt-10 ${isOpenEducation? 'h-[100px] sm:h-[150px]' : 'h-[0px]'} flex flex-col sm:pl-2 sm:pr-2 sm:text-[0.9rem]`}>

    <p >{RussianLanguage? 'Государственное':'Public education'}<span className={`ml-2 text-[grey] `}>{RussianLanguage? 'Высшее образование (Ветеринария)':'Higher education (Veterinary medicine)'} </span></p>
    <p >{RussianLanguage? 'курсы':'courses'}<a target="_blank" href={`https://netology.ru/sharing/16a8ab8e3d9252eff4540d40675abc01?utm_source=social&utm_campaign=certificate_lms `} className={`ml-2 text-[grey] `}> {RussianLanguage? 'JavaScript-программирование для начинающих,':'JavaScript programming for beginners,'}</a><a target="_blank" href={`https://netology.ru/profile/program/lra-53/schedule`} className={`ml-2 text-[grey] `}> {RussianLanguage? 'React для JS-разработчиков':'React for JS developers'}</a></p>

</div>
</div>


</div>


        </div>
    )
}