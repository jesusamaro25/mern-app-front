import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Navigate, Routes, BrowserRouter as Router } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch]);
    
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
