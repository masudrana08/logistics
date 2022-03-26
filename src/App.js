import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
