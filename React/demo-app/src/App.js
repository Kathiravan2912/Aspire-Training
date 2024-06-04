import logo from './logo.svg';
import Hello from './Hello';
import Welcome from './Welcome';
import Registration from './Registration';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div>
      <Hello/>
      <Welcome name = "Kathiravan" Location = "Villupuram">React Concepts</Welcome>
      <Login></Login>
      <Registration></Registration>
    </div>
  );
}

export default App;
