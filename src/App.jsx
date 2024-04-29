import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

// import Loader from './components/Loader/Loader';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage';
// import { ContactsPage } from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/authOperations';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Container } from './components/Container/Container';
import { Section } from './components/Section/Section';
import HomePage from './pages/HomePage/HomePage';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Section>
    </Container>
  );
}

export default App;
