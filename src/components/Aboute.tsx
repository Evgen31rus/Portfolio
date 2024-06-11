import Info from "./Info";
import Slider from "./SliderWrapper";

export default function Aboute(){
    return(
        <div className={`bg-[white] flex flex-col w-[90%] h-[550px] shadow-lg shadow-cyan-500/50 justify-around items-center max-w-[1200px] mt-5 sm:h-[900px] sm:w-[100%]`} id={`aboute`}>

<h1 className={`flex h-[5%] text-[2.0rem] font-medium`}>Обо мне</h1>

            
<div className={`flex w-[90%] h-[80%] justify-around items-center sm:flex-col-reverse`}>
<Info/>
<Slider/>
</div>


        </div>
    )
}