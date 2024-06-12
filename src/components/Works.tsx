import {forwardRef} from 'react'
import png from '../img/works/Немецкий Стандарт.png'
import proAutoPNG from '../img/works/pro avto.png'
import portfolioPNG from '../img/works/portfolio.png'
import {MWorkCard} from './workCard'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'



export const  Works = forwardRef<HTMLDivElement>( (props, ref) => {
    const RussianLanguage = useSelector((state: RootState)=> state.switchLanguage.RussianLanguage)
    const works = [
        {
            titleRu: 'Немецкий стандарт',
            titleEn: 'German standard',
            discriptionRu: 'Одностраничный сайт с основной информацией о компании — это универсальное решение для бизнеса, нуждающегося в представлении в сети, но не желающего тратить много времени и ресурсов на создание полномасштабного корпоративного сайта. Данный проект представляет бизнес по производству кухонь в Краснодаре.',
            discriptionEn: 'A one-page website with basic information about the company is a universal solution for a business that needs an online presence, but does not want to spend a lot of time and resources on creating a full-scale corporate website. This project represents a kitchen production business in Krasnodar.',
            urlCode: 'https://github.com/Evgen31rus/keetchen-shop?tab=readme-ov-file',
            urlPage: 'https://evgen31rus.github.io/keetchen-shop/',
            img: png,
            gsap: true,
            reactTransitionGroup: true

        },
        {
            titleRu: 'PRO AUTO',
            titleEn: 'PRO AUTO',
            discriptionRu: 'Интернет-магазин автоаксессуаров, аккумуляторов, моторных масел и многого другого, многостраничный сайт с формой обратной связи, глобальным состоянием в виде корзины, возможностью пополнять лист товаров, а так же отправкой заказа.',
            discriptionEn: 'An online store of car accessories, batteries, motor oils and more, a multi-page site with a feedback form, a global status in the form of a shopping cart, the ability to replenish the list of products, as well as sending an order.',
            urlCode: 'https://github.com/Evgen31rus/pro-Auto',
            urlPage: 'https://evgen31rus.github.io/pro-Auto/',
            img: proAutoPNG,
            useForm: true,
            reactTransitionGroup: true,
            reactRouterDom: true,
            axios: true,
            handySvg: true,

        },
        {
            titleRu: ' Мое резюме',
            titleEn: 'My resume',
            discriptionRu: 'Мой сайт-портфолио создан с использованием React, Redux Toolkit и Tailwind CSS. Он красивый, динамичный и хорошо адаптирован для мобильных устройств. Приглашаю посетить и оценить его!',
            discriptionEn: 'My portfolio website is built using React, Redux Toolkit and Tailwind CSS. It is beautiful, dynamic and well adapted for mobile devices. I invite you to visit and evaluate it!',
            urlCode: 'https://github.com/Evgen31rus/Portfolio',
            urlPage: 'https://evgen31rus.github.io/Portfolio/',
            img: portfolioPNG,
            handySvg: true,
            framerMotion: true,

        },
       
    ]
    return(
        <div 
        ref={ref} className={`bg-[white] flex flex-col w-[90%] min-h-[550px] shadow-lg shadow-cyan-500/50 justify-around items-center max-w-[1200px] mt-5 sm:w-[100%] sm:min-h-[1800px] sm:justify-start`}>
            
            <h1 className={`flex h-[5%] text-[2.0rem] font-medium mt-10 mb-10`}>{RussianLanguage? 'Мои проекты':'My projects'}</h1>
            
{
    works.map((el, index) =>
        <MWorkCard  
initial={'hidden'}
whileInView={'visible'}
viewport={{amount: 0.2}}
custom={index}
       index={index} reactRouterDom={el.reactRouterDom} reactTransitionGroup={el.reactTransitionGroup} handySvg={el.handySvg} axios={el.axios} framerMotion={el.framerMotion} gsap={el.gsap} useForm={el.useForm} titleRu={el.titleRu} titleEn={el.titleEn} discriptionEn={el.discriptionEn} discriptionRu={el.discriptionRu} urlCode={el.urlCode} urlPage={el.urlPage} img={el.img}/>
    )
}
        </div>
    )
})

export const MWorks = motion(Works)