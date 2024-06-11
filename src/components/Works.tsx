
import png from '../img/works/Немецкий Стандарт.png'
import proAutoPNG from '../img/works/pro avto.png'
import WorkCard from './workCard'
export default function Works(){
    const works = [
        {
            title: 'Немецкий стандарт',
            discription: 'Одностраничный сайт с основной информацией о компании — это универсальное решение для бизнеса, нуждающегося в представлении в сети, но не желающего тратить много времени и ресурсов на создание полномасштабного корпоративного сайта. Данный проект представляет бизнесс производства кухонь в краснодаре.',
            urlCode: 'https://github.com/Evgen31rus/keetchen-shop?tab=readme-ov-file',
            urlPage: 'https://evgen31rus.github.io/keetchen-shop/',
            img: png
        },
        {
            title: 'PRO AUTO',
            discription: 'Интернет-магазин автоаксессуаров, аккумуляторов, моторных масел и другого, многостроничный сайт с формой обратной связи, глобальным состоянием в виде корзины, возможностью пополнять лист товаров, а так же отправкой заказа.',
            urlCode: 'https://github.com/Evgen31rus/pro-Auto',
            urlPage: 'https://evgen31rus.github.io/pro-Auto/',
            img: proAutoPNG
        },
       
    ]
    return(
        <div className={`bg-[white] flex flex-col w-[90%] min-h-[550px] shadow-lg shadow-cyan-500/50 justify-around items-center max-w-[1200px] mt-5 sm:w-[100%] sm:min-h-[1800px] sm:justify-start`}>
            
            <h1 className={`flex h-[5%] text-[2.0rem] font-medium mt-10 mb-10`}>Мои проекты</h1>
            
{
    works.map(el =>
        <WorkCard title={el.title} discription={el.discription} urlCode={el.urlCode} urlPage={el.urlPage} img={el.img}/>
    )
}
        </div>
    )
}