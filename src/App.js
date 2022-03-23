import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Products } from './components/ProductsDashboard';
import { About} from "./components/About"
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainRoutes/>
    </div>
  );
}

export default App;
