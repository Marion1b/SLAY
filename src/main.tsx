import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Cookies from 'js-cookie';
import Router from './Router.tsx';

// Global Styles
import './assets/styles/scss/style.scss';

function Root() {
  return (
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Root />);
} else {
  console.error('Root element not found');
}