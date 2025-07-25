
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './Routing/AppRouting';


function App() {

  return (
    <>
    <Router>
      <AppRouting/>
    </Router>
    </>
  )
}

export default App
