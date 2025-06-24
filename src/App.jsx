import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Carts from "./pages/Carts";

// Authentication
import Signup from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/Forgotpassword";
import UpdatePassword from "./pages/Authentication/UpdatePassword";

// Route Protection
import PrivateRoute from "./Routes/PrivateRoute";

// Optional: NotFound Page
import NotFound from "./pages/NotFound";
import Layout from "./Layouts/Layout";

const App = () => {
  const publicRoute = [
    { path: "/register", component: <Signup /> },
    { path: "/login", component: <Login /> },
    { path: "/forgot-password", component: <ForgotPassword /> },
    { path: "/", component: <Index /> },
    { path: "/about", component: <About /> },
    { path: "/blog", component: <Blog /> },
    { path: "/shop", component: <Shop /> },
    { path: "/contact", component: <Contact /> },
    { path: "/wishlist", component: <Wishlist /> },
    { path: "/cart", component: <Carts /> },
    { path: "*", component: <NotFound /> },
  ];

  const privateRoute = [
    { path: "/checkout", component: <Checkout /> },
    { path: "/update-password", component: <UpdatePassword /> },
  ];

  return (
    <div className="App">
      <Router>
      
      <Layout>
        <Routes>
          {/* Public Routes */}
          {publicRoute.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}

          {/* Private Routes */}
          {privateRoute.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<PrivateRoute>{item.component}</PrivateRoute>}
            />
          ))}
        </Routes>
</Layout>
      
      </Router>
    </div>
  );
};

export default App;
