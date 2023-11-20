import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Landing from './Pages/Landing/Landing';
import Coming_Soon from './Pages/Coming_Soon/Coming_Soon';

//import Docs from './Pages/Docs/Docs';
//import DashRoutes from './Pages/Dash/DashRoutes';
//import AuthRoutes from './Pages/Auth/AuthRoutes';
//import Docs from '../Docs/Docs';
//import DashRoutes from '../Dash/DashRoutes';
//import ProfileRoutes from '../Dash/Profile/ProfileRoutes';
//import AuthRoutes from '../Auth/AuthRoutes';
//import Auth from '../Auth/Auth';
//import DocsPage from './pages/DocsPage';
//import RoadmapPage from './pages/RoadmapPage';
//import LoginPage from './auth/LoginPage';
//import SignupPage from './auth/SignupPage';
//import UserDashboardHomePage from './dash/UserDashboardHomePage';
//import UserProfilePage from './dash/UserProfilePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/coming_soon" element={<Coming_Soon />} />
        {/*
        <Route path="/docs" element={<Docs />} />

        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/dash/*" element={<DashRoutes />} />
        {/* <Route path="/dash/*" element={<DashRoutes />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/auth/*" element={<AuthRoutes />} /> */}


        {/* Add your other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;