import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  PrivateRoute,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Movies from './components/movies';
import NavBar from './components/navBar';
import Dashboard from './components/admin/dashboard';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render () {
      return (
        <Router>
          <ToastContainer />
          <NavBar />
          <main className="container">
            <Routes>
              <Route path="/" exact element={<Navigate replace to="/movies" />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieForm />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/admin/*" element={<Dashboard />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/not-found" />} />
            </Routes>
          </main>
        </Router>
      );
  }

}

export default App;

