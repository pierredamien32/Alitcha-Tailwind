import "./index.css"
import Bouton1 from "../src/components/buttons/Bouton1";
import Bouton2 from "../src/components/buttons/Bouton2";
import Bouton3 from "../src/components/buttons/Bouton3";
import Bouton4 from "../src/components/buttons/Bouton4";
import Bouton5 from "../src/components/buttons/Bouton5";

function App() {
  return (
    // <div className="w-screen h-screen flex items-center justify-center">
    //   <div className="text-3xl text-orange-600">
    //     Welcome on Alitcha Tailwind
    //   </div>
    // </div>
    <div className="w-screen h-screen flex items-center justify-center">
      <Bouton1/>
      <Bouton2/>
      <Bouton3/>
      <Bouton4/>
      <Bouton5/>
    </div>
  );
}

export default App;

