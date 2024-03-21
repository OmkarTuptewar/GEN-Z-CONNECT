

import './App.css';
import {Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Chatpage from './Pages/chatpage';
function App() {
  return (
   <div className='App'> 
      
    <Route path='/' component={HomePage} exact />
    <Route path='/chats' component={Chatpage}/>
    </div>
  );
}

export default App;
