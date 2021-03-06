import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Signup from "./pages/auth/signup";
import Dash from "./pages/dashboard";
import Loader from "./components/loader";
import Notfound from "./pages/error/404";
import LoginForm from "./pages/auth/login";
import UserPage from "./pages/user";
import { useMoralis } from "react-moralis";
const App = () => {
  const { isAuthenticated, isInitializing } = useMoralis();
  const [loading, uloading] = useState(true);
  useEffect(() => {
    if (isInitializing) {
      uloading(false);
    }
  }, [isInitializing]);

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={loading ? <Loader /> : <Home />} />
        <Route exact path="/blog" element={loading ? <Loader /> : <Blog />} />
        <Route
          exact
          path="/signup"
          element={loading ? <Loader /> : <Signup />}
        />
        <Route
          exact
          path="/login"
          element={
            loading ? (
              <Loader />
            ) : isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginForm />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            loading ? (
              <Loader />
            ) : isAuthenticated ? (
              <Dash />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/dashboard/:page"
          element={
            loading ? (
              <Loader />
            ) : isAuthenticated ? (
              <Dash />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/user/:username" element={<UserPage />} />

        <Route path="*" element={loading ? <Loader /> : <Notfound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
