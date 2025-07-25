
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './Routing/AppRouting';
import TitleManager from './Components/Title/TitleManager';




function App() {

  return (
    <>
    
    <Router>
      <TitleManager/>
      <AppRouting/>
    </Router>
    </>
  )
}

export default App
