import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar, Actors, Movies, MovieInformation, Profile } from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/actors/:id' element={<Actors />} />
        <Route path='/movie/:id' element={<MovieInformation />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
