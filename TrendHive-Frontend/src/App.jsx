import './App.css'
import AdminPage from './pages/adminPage.jsx';
import ProductCard from './components/productCard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] bg-gray-600">
        <Routes path="/">
          <Route path='/*' element={<HomePage/>}/>
          <Route path='/register' element={<h1>Register page</h1>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
