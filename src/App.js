import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Greet name="dps" height="5.11'">
        <p>This is children props</p>
      </Greet>
      <Greet name="gps" height="5.10'">
        <button>gps</button>
      </Greet>
      <Greet name="as" height="5.9'"/>
      <Welcome topic="react" subtopic="props"/>
      <Welcome topic="react1" subtopic="props1"/> */}
      {/* <Message/>
      <Counter/> */}
    </div>
  );
}

export default App;
