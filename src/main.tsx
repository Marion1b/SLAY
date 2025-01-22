import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useFetch} from "./api/fetchUtils.tsx";

// Global Styles
import './assets/styles/scss/style.scss';

// Components
import Header from './components/Header.tsx';

// Pages
import App from './pages/App.tsx';
import Login from './pages/Login.tsx';
import ModifyProfile from './pages/ModifyProfile.tsx';
import Profile from './pages/Profile.tsx';
import Radar from './pages/Radar.tsx';
import Register from './pages/Register.tsx';
import Search from './pages/Search.tsx';
import Slayder from './pages/Slayder.tsx';

function Root() {
  const {data, error, status} = useFetch('http://localhost:3000');

  if(status === 'loading'){
    console.log("loading");
  }

  if(status === "error"){
    console.log("error : " + error);
    console.log("data : " + data)
  }

  if(status === "success"){
    console.log("success");
    console.log(data);
  }

  return (
    <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/modifier-mon-profil" element={<ModifyProfile />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/radar" element={<Radar />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/slayder" element={<Slayder />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Root />);
} else {
  console.error('Root element not found');
}