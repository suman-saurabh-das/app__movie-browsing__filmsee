import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar, Actors, Movies, MovieInformation, Profile } from './components';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <main className={`App ${darkTheme ? 'dark' : '' } 2xl:max-w-[1920px] mx-auto`}>
      <NavBar 
        darkTheme={darkTheme} 
        setDarkTheme={setDarkTheme}
      />
      <Routes>
        <Route 
          path='/' 
          element={<Movies />} 
        />
        <Route 
          path='/actors/:id' 
          element={<Actors />}
        />
        <Route 
          path='/movie/:id' 
          element={<MovieInformation />} 
        />
        <Route 
          path='/profile/:id'
          element={<Profile />}
        />
      </Routes>
    </main>
  );
}

export default App;
