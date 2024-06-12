import { useDispatch, useSelector } from "react-redux"
import { HandleIsOpenMenu } from "../store/SliceMobileMenu"
import { RootState } from "../store/store"

export default function BurgerMenu(){
    const isOpenMenu = useSelector((state:RootState)=>state.SliceMobileMenu.isOpen)
    const dispatch = useDispatch()
    return(
        <div className={`w-50px h-[40px] hidden justify-around relative sm:flex-col sm:flex`} onClick={()=>dispatch(HandleIsOpenMenu())}>
        <div className={` w-[50px] h-[2px] bg-[black] transition-all duration-300 ${isOpenMenu? 'rotate-[-45deg] absolute':'rotate-0'}`}></div>
        <div className={` w-[50px] h-[2px] bg-[black] transition-all duration-150 ${isOpenMenu? 'opacity-0':'opacity-100'} `}></div>
        <div className={` w-[50px] h-[2px] bg-[black] transition-all duration-300 ${isOpenMenu? 'rotate-45 absolute':'rotate-0'}`}></div>
        </div>

    )
}