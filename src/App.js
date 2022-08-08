import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleMovie from './Components/SingleMovie/SingleMovie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
