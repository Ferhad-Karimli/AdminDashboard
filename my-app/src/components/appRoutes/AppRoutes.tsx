import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';
import Navbar from '../navbar/Navbar';
import AddNewProduct from '../../pages/addNewProduct/AddNewProduct';
import Categories from '../../pages/categories/Categories';
import Settings from '../../pages/settings/Settings';
import Messages from '../../pages/messages/Messages';
import Dashboard from '../../pages/dashboard/Dashboard';
import Login from '../../pages/login/Login';
import { ProtectedRoute } from '../protectedRouter/ProtectedRouter';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ flex: 1, padding: '16px' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Product />} />
              <Route path="/products/new" element={<AddNewProduct />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
