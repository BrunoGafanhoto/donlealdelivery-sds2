import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home';
import Navbar from './Navbar';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <>
    <Routes/>
    <ToastContainer/>
    </>
  );
}

export default App;
