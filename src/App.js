import './App.css';
import HomeScreen from './components/screens/home_screen';

import GenderScreen from './components/screens/gender_screen';
import ErrorScreen from './components/screens/error_screen';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TestScreen from './components/screens/test_screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomeScreen/>}/>
        <Route path="/test" element = {<TestScreen/>}/>
        <Route path="/gender" element = {<GenderScreen/>}/>
        <Route path="/gender/:id" element = {<GenderScreen/>}/>
        <Route path="*" element = {<ErrorScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
