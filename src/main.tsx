import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './Router.tsx';

// Global Styles
import './assets/styles/scss/style.scss';

// Components
import Header from './components/Header.tsx';

function Root() {
  console.log("try to change a href to Link component");

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