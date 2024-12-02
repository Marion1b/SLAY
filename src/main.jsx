import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/styles/css/style.css';
import App from './pages/App.jsx'
import Login from './pages/Login.jsx';
import ModifyProfile from './pages/ModifyProfile.jsx';
import Profile from './pages/Profile.jsx';
import Radar from './pages/Radar.jsx';
import Register from './pages/Register.jsx';
import Search from './pages/Search.jsx';
import Slayder from './pages/Slayder.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
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