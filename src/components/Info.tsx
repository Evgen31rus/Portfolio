
import LocationSVG from "../svg/location.svg";
import telegram from '../img/telegram.png'
import vk from '../img/vk.png'
import instagram from '../img/instagram.png'
import watsapp from '../img/watsapp.png'
import { HandySvg } from "handy-svg";
import typescriptPNG from '../img/typescript.png'
import reactPNG from '../img/react.png'
import reduxToolkitPNG from '../img/reduxToolkit.png'
import tailwindPNG from '../img/tailwind.png'
import jsPNG from '../img/js.png'
import sassPNG from '../img/sass.png'
import  butstrapPNG from '../img/butstrap.png'
import {motion} from 'framer-motion'
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const messagers = [
    {
        svg: telegram,
        url: "https://t.me/Evgen31rusR",
      },
      {
        svg: vk,
        url: "https://vk.com/evgen_31_rus",
      },
      {
        svg: instagram,
        url: "https://www.instagram.com/evgen_31__rus?igsh=MW9nYXJ6MzFhcG95OQ==",
      },
      {
        svg: watsapp,
        url: "https://wa.me/79524271114",
      },
]

const steck = [
  {
    png: reactPNG,
    url: "https://react.dev/",
  },
  {
    png: typescriptPNG,
    url: "https://www.typescriptlang.org/",
  },
  {
    png: reduxToolkitPNG,
    url: "https://redux-toolkit.js.org/",
  },
  {
    png: jsPNG,
    url: "https://www.javascript.com/",
  },
  {
    png: tailwindPNG,
    url: "https://tailwindcss.com/",
  },
  {
    png: sassPNG,
    url: "https://sass-lang.com/",
  },
  {
    png: butstrapPNG,
    url: "https://getbootstrap.com/",
  },
];

const textAnimation = {
  hidden: {
    x:-100,
    opacity: 0,
  },
  visible: (custom:number) => ({
    x: 0 ,
    opacity: 1,
    transition: {delay: custom*0.2}
  })

}

export default function Info() {
  const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
  return (
    <motion.div 
      initial='hidden'
      whileInView='visible'
    className={`flex flex-col justify-center w-[30%] h-[80%] p-5 sm:w-[100%] sm:items-start`}>

<div>

</div>
      <div 
      className={`flex flex-col w-[100%] justify-center items-start sm:flex`}>
        <motion.div
        variants={textAnimation}
        custom={1}>
        <p className={`text-[1.0rem] font-medium mr-5  sm:mb-5`}>{RussianLanguage? 'Стек технологий:' : 'Technology stack:'}</p>
        <div className={`flex pl-2 items-center h-[40px] `}>
        {steck.map((el, index) => (
          <a target="_blank" href={el.url}>
            <img src={el.png} alt="" className={`w-[25px] h-[25px] ml-2 mr-2`}/>
          </a>
        ))}
        </div>
        </motion.div>
        
        </div>

        <motion.div
        variants={textAnimation}
        custom={2}
        >
        <p className={`text-[1.0rem] font-medium mr-5 mb-5 mt-5`}>{RussianLanguage? 'Геопозиция:' : 'Geolocation:'}</p>
        <div 
        
        className={`flex items-center justify-start w-[100%] h-[10px] `}>
        <HandySvg
              src={LocationSVG}
              width="25px"
              height="15px"
            />
            <p className={`text-[0.8rem] font-medium ml-5`} >{RussianLanguage? 'РФ, Белгородская обл. , г.Белгород' : 'Russian Federation, Belgorod region. , Belgorod'}</p>
        </div>
        </motion.div>
        
        
        <motion.div
        variants={textAnimation}
        custom={3}
        >
        <p className={`text-[1.0rem] font-medium mr-5 mb-5 mt-10`}>{RussianLanguage? 'Связь со мной:' : 'Contact me:'}</p>
        <div className={`w-[60%] justify-around flex items-center`}>
{
    messagers.map((el, index)=>
        <a target="_blank" href={el.url}>
    <img src={el.svg} alt=""  className={`w-[30px] h-[30px]`}/>
</a>
    )
}

        </div>
        </motion.div>


        
        
  
    </motion.div>
  );
}
