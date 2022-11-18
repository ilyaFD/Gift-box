import React from 'react';
import { createRoot } from 'react-dom/client';
import { Store, StoreProvider } from "./stores";
import App from './App';
import './index.css';

const store = new Store(); 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);