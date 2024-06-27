import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SinglePet,
  Cart,
  Checkout,
  Error,
  About,
  Pets,
  PrivateRoute,
  AuthWrapper,
} from './pages';
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='pets' element={<Pets />} />
          <Route path='pets/:id' element={<SinglePet />} />
          <Route
            path='checkout'
            element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
