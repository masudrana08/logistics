import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './pages/Blog/BlogDetails';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog/:id' element={<BlogDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
