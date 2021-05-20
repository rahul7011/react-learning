import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreetings from "./components/UserGreetings";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import Fragments from "./components/Fragments";
import RefsDemo from "./components/RefsDemo";
import FRparent from "./components/FRparent";
function App() {
  return (
    <div className="App">
    <FRparent></FRparent>
    {/* <RefsDemo></RefsDemo> */}
    {/* <Fragments></Fragments> */}
    {/* <LifeCycleA></LifeCycleA> */}
    {/* <Form></Form> */}

    {/* <StyleSheet primary="primary" ></StyleSheet> */}

    {/* <NameList></NameList> */}

    {/* <UserGreetings></UserGreetings> */}

    {/* <ParentComponent></ParentComponent> */}

      {/* <EventBind></EventBind> */}

      {/* <FunctionClick></FunctionClick>
    <ClassClick></ClassClick> */}

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
