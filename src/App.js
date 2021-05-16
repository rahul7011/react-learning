import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
function App() {
  return (
    <div className="App">

    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>

      {/* <Counter></Counter> */}

      {/* <Message></Message> */}

      {/* <Greet name="super" number="1">
        <p>This is a children props</p>
      </Greet> */}
      {/* <Greet name="Rahul" number="2"> */}
        {/* <p>Another one</p> */}
      {/* </Greet> */}
      {/* <Greet name="React-Django" number="3"> */}
        {/* <p>This is another children props</p> */}
      {/* </Greet> */}

      {/* <Welcome name="super" number="1">
        <p>We use this here to refer props</p>
      </Welcome> */}
      {/* <Welcome name="Rahul" number="2"/> */}
      {/* <Welcome name="React-Django" number="3"/>  */}
    </div>
  );
}

export default App;
