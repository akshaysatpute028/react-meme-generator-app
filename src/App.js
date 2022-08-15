import './App.css';
import EventListener from './components/EventListener'
import Header from "./components/Header"
import Meme from "./components/Meme"
import ThingsBeforeState from "./components/ThingsBeforeState";
import ThingsAfterState from "./components/ThingsAfterState";
import Animation from "./components/Animation"
import UseStateFunc from './components/UseStateFunc';
import UpdateStateObject from './components/UpdateStateObject';
import SetStateFromChild from './components/SetStateFromChild';
import Boxes from "./components/Boxes";
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
function App() {
  return (
    <div>
      <Boxes></Boxes>
    </div>
  )
}

export default App;
