import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';


// Lazy load the Dashboard component
const Dashboard = lazy(() => import('./components/dashboard.js'));

export default function App() {
  return (

    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Suspense> */}
        <Routes>
          <Route path="/" name="dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>


  );
}
