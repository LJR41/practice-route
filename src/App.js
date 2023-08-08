import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import LandingPageView from './views/LandingPageView';
import HomeView from './views/HomeView';
import { useParams } from 'react-router-dom';
import ValueView from './views/ValueView';
import HelloView from './views/HelloView';



function App() {
  const value = useParams()
  const text = useParams()
  const background = useParams()

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<LandingPageView />} />
        <Route path='/home' element={<HomeView />} />
        <Route path='/:value' element={<ValueView/>} />
        <Route path='/hello/:text/:background' element={<HelloView/>} />

      </Routes>



    </div>
  );
}

export default App;
