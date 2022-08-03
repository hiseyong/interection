import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {Nav} from './components/Nav/Nav';
import { NavMobile } from './components/Nav/NavMobile';
import {Main} from './components/Main/Main';
import { Footer } from './components/footer/Footer';
import { Img } from './components/Img/Img';
import { Txt } from './components/Txt/Txt';
import './App.css'

function App() {
  const Desktop = useMediaQuery(
    {minDeviceWidth: 1500}
  )
  return (
    <div className="App">
      <BrowserRouter>
        {Desktop === true ?
          <Nav/>
          :
          <NavMobile/>
        }
        <hr/>
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/img' element={<Img/>}/>
            <Route path='/txt' element={<Txt/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
