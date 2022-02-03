import React from 'react';
import { Route, Navigate, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="login/*" element={<LoginScreen/>}></Route>
                <Route path="/" element={<CalendarScreen/>}></Route>
                <Route path="*" element={<Navigate replace to='/' />}></Route>
            </Routes>
        </Router>
    );
};
