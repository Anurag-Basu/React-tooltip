import "./App.css";
import TooltipComponent from "./Components/Tooltip/TooltipComponent";

function App() {
  return (
    <div className="App">
      <h1>React Tooltip</h1>
      <div id='tooltip-container' >


        <div className="wrapper" >
          {/* passing the text and direction as a props to TooltipComponent */}
            <TooltipComponent text='Lorem, ipsum dolor, ' direction='top' >
              Top
            </TooltipComponent>
        </div>

        <div className="wrapper" >
              {/* passing the text and direction as a props to TooltipComponent */}
            <TooltipComponent text='Lorem, ipsum dolor ' direction='right'>
              Right
            </TooltipComponent>
        </div>

        <div className="wrapper" >
            {/* passing the text and direction as a props to TooltipComponent */}
            <TooltipComponent text='Lorem, ipsum dolor ' direction='bottom' >
              Bottom
            </TooltipComponent>
        </div>

        <div className="wrapper" >
            {/* passing the text and direction as a props to TooltipComponent */}
            <TooltipComponent text='Lorem, ipsum dolor ' direction='left' >
              Left
            </TooltipComponent>
        </div>

      </div>

    </div>
  );
}

export default App;
