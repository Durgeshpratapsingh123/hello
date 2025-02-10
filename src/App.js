import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="dps" height="5.11'">
        <p>This is children props</p>
      </Greet>
      <Greet name="gps" height="5.10'">
        <button>gps</button>
      </Greet>
      <Greet name="as" height="5.9'"/>
      <Welcome topic="react" subtopic="props"/>
      <Welcome topic="react1" subtopic="props1"/>
      <Message/>
    </div>
  );
}

export default App;
