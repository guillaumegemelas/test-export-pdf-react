//import des composants
import Canvas from "./component/Canvas";
import Button from "./component/Button";
import ButtonToPdf from "./component/ButtonToPdf";

import "./App.css";

function App() {
  return (
    <div>
      <div id="capture">
        <Canvas />
      </div>
      <div>
        <Button />
      </div>{" "}
      <div>
        <ButtonToPdf />
      </div>
    </div>
  );
}

export default App;
