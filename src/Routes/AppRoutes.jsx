/**
 * IMPORTS
 */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CardDetails} from 'src/pages/CardDetails';
import {ErrorPage} from 'src/pages/ErrorPage';
import {Home} from 'src/pages/Home';


/**
 * CODE
 */
function AppRoutes ()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/card/:id' element={<CardDetails/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}


/**
 * EXPORTS
 */
export {
  AppRoutes
};
