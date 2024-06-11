import Cart from './Cart'
import Input from './Input'
import Login from './Login';
import ConditionalRendering from './conditionalRendering';
import './App.css';
import WishLabel from './wishLabel';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import LoginControl from './loginControl';
import GuestGreeting from './GuestGreeting';
import Greetings from './Greetings';
function App() {
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      <loginControl/>
      <GuestGreeting/>

    </div>
  );
}

export default App;





