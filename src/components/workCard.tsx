import { forwardRef } from "react";
import githubPNG from "../img/github2.png";
import typescriptPNG from '../img/typescript.png'
import reactPNG from '../img/react.png'
import reduxToolkitPNG from '../img/reduxToolkit.png'
import tailwindPNG from '../img/tailwind.png'
import iconViuportPNG from '../img/iconViuport.png'
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


type propsTypes = {
  index: number
  titleRu: string;
  titleEn: string;
  discriptionRu: string;
  discriptionEn: string;
  urlCode: string;
  urlPage: string;
  img: string;
  typescript?: boolean
  react?: boolean
  js?: boolean
  reduxTulkit?: boolean
  tailwind?: boolean
  useForm?: boolean
  reactRouterDom?:boolean
  axios?: boolean
  handySvg?: boolean
  reactTransitionGroup?:boolean
  gsap?: boolean
  framerMotion?:boolean
  

};

export const WorkCard = forwardRef<HTMLDivElement, propsTypes>(({index, titleRu, titleEn, discriptionRu,  discriptionEn, urlCode, urlPage, img, useForm, reactRouterDom, reactTransitionGroup, axios, gsap,framerMotion , handySvg}, ref) => {
  const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
  const textAnimation ={
    hidden:{
        x: index%2==0? 100 : -100 ,
        positon: 'absolute',
        opacity: 0,
    },
    visible: (custom:number)=>({
        x:0,
        opacity: 1,
        transition: {delay: custom*0.5}
    })
}
const imgAnimation ={
  hidden:{
      x: index%2!=0? 100 : -100 ,
      positon: 'absolute',
      opacity: 0,
  },
  visible: (custom:number)=>({
      x:0,
      opacity: 1,
      transition: {delay: custom*0.2}
  })
}

  return (
    <>
      <div
      ref={ref}
      className={`worksCard flex justify-around w-[100%] h-[400px] sm:h-[880px] md:mb-5 md:h-[450px] `} id={`works`}>
        <motion.div 
        variants={textAnimation}
        className={`flex flex-col w-[40%] h-[90%] items-center sm:w-[100%] md:justify-between md:w-[50%]`}>
          <h2 className={`text-[1.5rem] font-medium mb-5`}>{ RussianLanguage? titleRu : titleEn}</h2>
          <p className={`text-[grey] mb-5 font-sans text-center sm:text-[0.8rem] sm:pl-3 sm:pr-3 md:text-[0.9rem]`}>{ RussianLanguage? discriptionRu : discriptionEn}</p>
          <div className="w-[100%] min-h-[30px] flex items-center justify-around text-[0.8rem] flex-wrap mb-5 sm:text-[0.8rem] sm:pl-3 sm:pr-3 md:text-[0.7rem] md:mb-2 ">
          <p className={useForm? 'flex':'hidden'}>#useForm</p>
          <p className={reactRouterDom? 'flex':'hidden'}>#react-router-DOM</p>
          <p className={axios? 'flex':'hidden'}>#axios</p>
          <p className={handySvg? 'flex':'hidden'}>#handy-svg</p>
          <p className={reactTransitionGroup? 'flex':'hidden'}>#react-transition-group</p>
          <p className={framerMotion? 'flex':'hidden'}>#framer-motion</p>
          <p className={gsap? 'flex':'hidden'}>#gsap</p>
          </div>
          <div className="w-[100%] h-[30px] flex items-center justify-around sm:mt-10 md:flex-col">

            <p className={` w-[100%] border-r-2 border-[grey] mr-5 sm:text-[0.8rem] sm:pl-2 sm:w-[50%] md:text-[0.8rem] md:w-[100%] md:text-center md:border-r-0 md:mb-3 lg:w-[100%]`}>{ RussianLanguage? 'Cтек технологий': 'Technology stack'}</p>
<div className={`w-[100%] flex items-center justify-around md:w-[80%]`}>
<img src={typescriptPNG} alt="" className={`w-[30px] h-[30px] md:w-[20px] md:h-[20px]`}/>
<img src={reactPNG} alt="" className={`w-[30px] h-[30px] md:w-[20px] md:h-[20px]`}/>
<img src={reduxToolkitPNG} alt="" className={`w-[30px] h-[30px] md:w-[20px] md:h-[20px]`}/>
<img src={tailwindPNG} alt="" className={`w-[40px] h-[25px] md:w-[20px] md:h-[20px]`} />
<img src={``} alt="" />
</div>

          </div>
          <div className={`flex  justify-around w-[60%] mt-5 sm:w-[100%] sm:mt-10 md:w-[100%] md:h-[20px]`}>
            <a href={urlCode} className={`flex items-center font-bold  md:text-[0.8rem]`}>
              code
              <img
                src={githubPNG}
                alt="github"
                className={`w-[30px] h-[30px] md:w-[20px] md:h-[20px]`}
              />
            </a>
            <a href={urlPage} className={`flex items-center font-bold md:text-[0.8rem]`}>
              github page
              <img
                src={iconViuportPNG}
                alt="githubPages"
                className={`w-[20px] h-[20px] ml-2 md:w-[15px] md:h-[15px]`}
              />
            </a>
          </div>
        </motion.div>

        <motion.div 
        variants={imgAnimation}
        className={` w-[40%] h-[100%] sm:w-[100%]`}>
          <div
            className={`w-[100%] h-[80%] transition-[background] duration-[3000ms] bg-cover bg-top hover:bg-bottom cursor-pointer shadow-lg shadow-cyan-500/50 rounded-xl sm:h-[300px] sm:mt-10`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        </motion.div>
      </div>
    </>
  );
})

export const MWorkCard = motion(WorkCard)
