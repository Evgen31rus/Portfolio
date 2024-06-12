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
      <MobileMenu/>
      <NavBar/>
      <Aboute/>
      <Works/>
    </div>
  );
}

export default App;
