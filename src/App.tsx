import { useSelector } from "react-redux";
import Aboute from "./components/Aboute";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import {Works} from "./components/Works";
import { RootState } from "./store/store";

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

function App() {
  const isOpenMenu = useSelector((state:RootState)=>state.SliceMobileMenu.isOpen)
  return (
    <div className="App">
      <div className={` bg-[black]  transition-all duration-300 fixed w-[100vh] h-[100vh] justify-start hidden sm:flex ${isOpenMenu? 'bg-opacity-70 z-40' : 'bg-opacity-0 z-10'}`}>
      <MobileMenu/>
      </div>
      <NavBar/>
      <Aboute/>
      <Works/>
    </div>
  );
}

export default App;
