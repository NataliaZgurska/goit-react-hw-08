import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Container } from './components/Container/Container';
import { Section } from './components/Section/Section';

import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage'));

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
