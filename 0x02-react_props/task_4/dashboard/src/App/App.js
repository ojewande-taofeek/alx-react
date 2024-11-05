import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn = false }) {
  return (
    <div>
      <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
