import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './components/Loader/Loader';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';
import Layout from './components/Layout';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
