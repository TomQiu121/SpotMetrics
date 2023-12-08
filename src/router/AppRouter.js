import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import RedirectPage from '../components/RedirectPage.js';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/redirect" element={<RedirectPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
