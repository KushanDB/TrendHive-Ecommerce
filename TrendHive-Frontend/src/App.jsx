import './App.css'
import AdminPage from './pages/adminPage.jsx';
import ProductCard from './components/productCard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import TestPage from './pages/test.jsx';
import LoginPage from './pages/loginPage.jsx';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh]">

        <Toaster position="top-right"/> {/* For displaying toast notifications */}
        <Routes path="/">
          <Route path='/*' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<h1>Register page</h1>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
