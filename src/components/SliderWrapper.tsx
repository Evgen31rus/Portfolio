import github from '../img/github.png'

export default function Slider(){
return(
    <div className={`flex flex-col w-[40%] h-[70%] justify-around sm:flex-col-reverse`}>


<div className={`bg-nav w-[420px] bg-cover bg-center bg-norepeat h-[300px] rounded-2xl shadow-lg shadow-cyan-500/50`}

style={{
    backgroundImage: `url(https://sun9-31.userapi.com/impg/hR_s2X0hJJ1IlG119XlwGJBznAZD9K8YzVmsqw/ZE6dSSmCVRE.jpg?size=1637x2160&quality=95&sign=745888148fe8664cdc362fcd02ef8f88&type=album)`
}}>

</div>

<div className={`flex justify-around mt-5`}>

<a href="https://github.com/Evgen31rus">
    <img src={github} alt="" className='w-[30px] h-[29px]'/>
</a>

<h1 className={`text-[1.3rem] font-medium text-center `}>Евгений Роговой</h1>
</div>



    </div>
)
}