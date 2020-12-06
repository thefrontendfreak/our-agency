import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './assets/styles/bootstrap.min.css';
import './assets/styles/default.css';
import './assets/styles/fontawesome-all.min.css';
import "swiper/components/navigation/navigation.scss";
import 'swiper/swiper.scss';
import './App.scss'
import Header from './core/layout/Header';
import HomePage from './core/components/pages/HomePage';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="">
                        <Header />
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
