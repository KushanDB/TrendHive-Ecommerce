import './App.css'
import AdminPage from './pages/adminPage.jsx';
import ProductCard from './components/productCard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import TestPage from './pages/test.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh]">
        <Routes path="/">
          <Route path='/*' element={<HomePage/>}/>
          <Route path='/register' element={<h1>Register page</h1>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
