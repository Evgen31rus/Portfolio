import tailwindSVG from "../svg/tailwind.svg";
import reduxSVG from "../svg/redux.svg";
import reactSVG from "../svg/react.svg";
import jsSVG from "../svg/js.svg";
import sassSVG from "../svg/sass.svg";
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

const messagers = [
    {
        svg: telegram,
        url: "https://tailwindcss.com/",
      },
      {
        svg: vk,
        url: "https://vk.com/evgen_31_rus",
      },
      {
        svg: instagram,
        url: "https://react.dev/",
      },
      {
        svg: watsapp,
        url: "https://www.javascript.com/",
      },
]

const steck = [
  {
    png: reactPNG,
    url: "https://tailwindcss.com/",
  },
  {
    png: typescriptPNG,
    url: "https://redux-toolkit.js.org/",
  },
  {
    png: reduxToolkitPNG,
    url: "https://react.dev/",
  },
  {
    png: jsPNG,
    url: "https://www.javascript.com/",
  },
  {
    png: tailwindPNG,
    url: "https://sass-lang.com/",
  },
];

export default function Info() {
  return (
    <div className={`flex flex-col justify-center w-[30%] h-[80%] p-5 sm:w-[100%] sm:items-start`}>


      <div className={`flex flex-col w-[100%] justify-center items-start sm:flex`}>
        <p></p>
        <div>
        <p className={`text-[1.0rem] font-medium mr-5  sm:mb-5`}>Стек технологий:</p>
        <div className={`flex pl-2 items-center h-[40px] `}>
        {steck.map((el, index) => (
          <a href={el.url}>
            <img src={el.png} alt="" className={`w-[25px] h-[25px] ml-2 mr-2`}/>
          </a>
        ))}
        </div>
        </div>
        
        </div>

        <div>
        <p className={`text-[1.0rem] font-medium mr-5 mb-5 mt-5`}>Геопозиция:</p>
        <div className={`flex items-center justify-start w-[100%] h-[10px] `}>
        <HandySvg
              src={LocationSVG}
              width="25px"
              height="15px"
            />
            <p className={`text-[0.8rem] font-medium ml-5`} >РФ, Белгородская обл. , г.Белгород</p>
        </div>
        </div>
        
        
        <div>
        <p className={`text-[1.0rem] font-medium mr-5 mb-5 mt-10`}>Связь со мной:</p>
        <div className={`w-[60%] justify-around flex items-center`}>
{
    messagers.map((el, index)=>
        <a href={el.url}>
    <img src={el.svg} alt=""  className={`w-[30px] h-[30px]`}/>
</a>
    )
}

        </div>
        </div>


        
        
  
    </div>
  );
}
