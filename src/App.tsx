import Aboute from "./components/Aboute";
import NavBar from "./components/NavBar";
import {Works} from "./components/Works";

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
  return (
    <div className="App">

      <NavBar/>
      <Aboute/>
      <Works/>
    </div>
  );
}

export default App;
