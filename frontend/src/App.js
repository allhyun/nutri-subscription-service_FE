import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 리액트 라우터
import Header from './components/Header';
import SubscriptionForm from './components/SubscriptionForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HealthSurvey from './components/HealthSurvey';
import NutriProducts from './components/NutriProducts';
import CustomerReviews from './components/CustomerReviews';
import Events from './components/Events';
import CustomerSupport from './components/CustomerSupport';

function App() {
  return (
    <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/health-survey" component={HealthSurvey} />
                <Route path="/nutritional-products" component={NutriProducts} />
                <Route path="/customer-reviews" component={CustomerReviews} />
                <Route path="/events" component={Events} />
                <Route path="/customer-support" component={CustomerSupport} />
                <Route path="/" component={SubscriptionForm} />
              </Routes>
            </main>
          </div>
        </Router>
  );
}

export default App;
