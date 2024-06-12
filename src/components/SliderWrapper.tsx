import github from '../img/github.png'
import {motion} from 'framer-motion'
import img1 from '../img/aboute/img1.jpg'
import img2 from '../img/aboute/img2.jpg'
import img3 from '../img/aboute/img3.jpg'
import SliderPhoto from './SliderPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { HandleSwitchLeft, HandleSwitchRight } from '../store/SliceSwitchSlider'
import { RootState } from '../store/store'

const wrapperAnimation ={
    hidden:{
        x:100,
        positon: 'absolute',
        opacity: 0,
    },
    visible: (custom:number)=>({
        x:0,
        opacity: 1,
        transition: {delay: custom*0.2}
    })
}

export default function Slider(){
    const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
    const translateCount = useSelector((state:RootState)=> state.switchSlider.translate)
    const dispatch = useDispatch()
    const sliderPhoto = [
        {
        img: img1,
        },
        {
        img: img2,
        },
        {
        img: img3,
        },
    ]

return(
    <motion.div 
    initial='hidden'
    whileInView='visible'
    className={`flex flex-col w-[42%] h-[70%] justify-around sm:flex-col-reverse sm:w-[100%] sm:items-center `}>



<div>

</div>
<motion.div 
variants={wrapperAnimation}
custom={1}

className={`bg-nav flex items-center w-[400px] bg-cover bg-center overflow-hidden bg-norepeat h-[300px] rounded-2xl shadow-lg shadow-cyan-500/50 sm:w-[400px]  md:w-[300px] relative sm:`}
>

{
    <SliderPhoto array={sliderPhoto}/>
}

<div className={`absolute w-[30px] h-[30px] right-[0] text-[2.5rem] text-[white] font-bold cursor-pointer ${translateCount==-800? 'opacity-50' : 'opacity-100'}`} onClick={()=>dispatch(HandleSwitchRight())}>{'>'}</div>

<div className={`absolute w-[30px] h-[30px] left-[0] text-[2.5rem] text-[white] font-bold cursor-pointer ${translateCount==0? 'opacity-50' : 'opacity-100'}`} onClick={()=>dispatch(HandleSwitchLeft())}>{'<'}</div>

</motion.div>

<motion.div 
variants={wrapperAnimation}
custom={2}
className={`flex justify-around mt-5 sm:w-[100%] `}>

<a href="https://github.com/Evgen31rus">
    <img src={github} alt="" className='w-[30px] h-[29px]'/>
</a>                                                   

<h1 className={`text-[1.3rem] font-medium text-center sm:mb-5`}>{RussianLanguage? 'Евгений Роговой' : 'Evgeniy Rogovoy'}</h1>
</motion.div>



    </motion.div>
)
}
