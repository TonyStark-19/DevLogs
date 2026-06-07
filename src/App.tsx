// import react
import React from 'react';

// import routing components
import { Routes, Route } from 'react-router-dom';

// import mainpage
import MainPage from './pages/MainPage';

// main routing app component
export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
}