import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PetsProvider } from './context/pets_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/cart`,
    }}
  >
    <UserProvider>
      <PetsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </PetsProvider>
    </UserProvider>
  </Auth0Provider>
);
