import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { HandleIsOpenMenu } from "../store/SliceMobileMenu"

export default function MobileMenu(){
    const dispatch = useDispatch()
    const isOpenMenu = useSelector((state:RootState)=>state.SliceMobileMenu.isOpen)
    const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
    return(
        <div className={` flex z-50 fixed w-[45vh] h-[100%] bg-[white] transition-all duration-300 justify-center items-center ${!isOpenMenu? 'translate-x-[-100%]':'translate-x-[-10%]'} `}>

    <div className={`flex flex-col list-none w-[100%] h-[200px] justify-around items-center text-[black]  font-bmedium text-[2rem]`}>
          <a href={`#aboute`} className={`cursor-pointer`} onClick={()=>dispatch(HandleIsOpenMenu())}>{RussianLanguage? 'Обо мне' : 'About me'}</a>
          <a href={`#works`} className={`cursor-pointer`} onClick={()=>dispatch(HandleIsOpenMenu())}>{RussianLanguage? 'Мои проекты' : 'My projects'}</a>
        </div>

        </div>
    )
}