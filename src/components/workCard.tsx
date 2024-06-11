import githubPNG from "../img/github2.png";
import typescriptPNG from '../img/typescript.png'
import reactPNG from '../img/react.png'
import reduxToolkitPNG from '../img/reduxToolkit.png'
import tailwindPNG from '../img/tailwind.png'


type propsTypes = {
  title: string;
  discription: string;
  urlCode: string;
  urlPage: string;
  img: string;
  typescript?: boolean
  react?: boolean
  js?: boolean
  reduxTulkit?: boolean
  tailwind?: boolean

};

export default function WorkCard({
  title,
  discription,
  urlCode,
  urlPage,
  img,
}: propsTypes) {
  return (
    <>
      <div className={`worksCard flex justify-around w-[100%] h-[400px] sm:h-[880px]`} id={`works`}>
        <div className={`flex flex-col w-[40%] h-[90%] items-center sm:w-[100%]`}>
          <h2 className={`text-[1.5rem] font-medium mb-5`}>{title}</h2>
          <p className={`text-[grey] mb-5 font-sans text-center`}>{discription}</p>
          <div className="w-[100%] min-h-[30px] flex items-center justify-around text-[0.8rem] flex-wrap mb-5">
          <p>#useForm</p>
          <p>#react-router-DOM</p>
          <p>#axios</p>
          <p>#handy-svg</p>
          <p>#react-transition-group</p>
          </div>
          <div className="w-[100%] h-[30px] flex items-center justify-around sm:mt-10">

            <p className={`w-[30%] border-r-2 border-[grey] mr-5 `}>Cтек технологий</p>

<img src={typescriptPNG} alt="" className={`w-[30px] h-[30px] `}/>
<img src={reactPNG} alt="" className={`w-[30px] h-[30px] `}/>
<img src={reduxToolkitPNG} alt="" className={`w-[30px] h-[30px] `}/>
<img src={tailwindPNG} alt="" className={`w-[40px] h-[25px] `} />
<img src={``} alt="" />

          </div>
          <div className={`flex  justify-around w-[60%] mt-5 sm:w-[100%] sm:mt-10`}>
            <a href={urlCode} className={`flex items-center font-bold`}>
              code
              <img
                src={githubPNG}
                alt="github"
                className={`w-[30px] h-[30px]`}
              />
            </a>
            <a href={urlPage} className={`flex items-center font-bold`}>
              github page
              <img
                src={githubPNG}
                alt="github"
                className={`w-[30px] h-[30px]`}
              />
            </a>
          </div>
        </div>

        <div className={` w-[40%] h-[100%] sm:w-[100%]`}>
          <div
            className={`w-[100%] h-[80%] transition-[background] duration-[3000ms] bg-cover bg-top hover:bg-bottom cursor-pointer shadow-lg shadow-cyan-500/50 rounded-xl sm:h-[300px] sm:mt-10`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        </div>
      </div>
    </>
  );
}
