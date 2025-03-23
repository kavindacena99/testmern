import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Food from './pages/Food';



function App(){
  return(
    <div>
      <Routes>
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;