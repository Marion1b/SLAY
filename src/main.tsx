import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/styles/scss/style.scss';
import Header from './components/Header.tsx';
import App from './pages/App.tsx'
import Login from './pages/Login.tsx';
import ModifyProfile from './pages/ModifyProfile.tsx';
import Profile from './pages/Profile.tsx';
import Radar from './pages/Radar.tsx';
import Register from './pages/Register.tsx';
import Search from './pages/Search.tsx';
import Slayder from './pages/Slayder.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/modifier-mon-profil" element={<ModifyProfile />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/radar" element={<Radar />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/slayder" element={<Slayder />} />
      </Routes>
    </Router>
  </StrictMode>,
)