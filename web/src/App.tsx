import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NotFound from './pages/errors/NotFound';
import Home from './pages/home';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
