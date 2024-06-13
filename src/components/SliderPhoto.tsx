import { useSelector } from "react-redux"
import { RootState } from "../store/store"

type propsTypes = {
    array: {img:string}[]
}

export default function SliderPhoto ({array}:propsTypes){
    const translateCount = useSelector((state:RootState)=> state.switchSlider.translate)
    return(
        <div className={`flex w-[1200px] h-[100%] transition-[transform] duration-300 md:justify-center md:items-center`}
        style={{
            transform: `translateX(${translateCount}px)`
        }}
        >
            {
array.map((el, index)=>
<div className={`w-[400px] h-[100%] bg-cover  bg-no-repeat  bg-center md:bg-origin-padding`} style={{
    backgroundImage: `url('${el.img}')`
}}></div>
)
            }
        </div>
    )
}