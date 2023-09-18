import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors'
import MovieInformation from './components/Movies/MovieInformation'
import Profile from './components/Profile/Profile'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className={`App ${darkTheme ? 'dark' : '' } font-primary 2xl:max-w-[1920px] mx-auto`}>
      <NavBar 
        darkTheme={darkTheme} 
        setDarkTheme={setDarkTheme}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Routes>
        <Route 
          exact path={'/'} 
          element={<Movies showSidebar={showSidebar} />} 
        />
        <Route 
          exact path={'/approved'} 
          element={<Movies showSidebar={showSidebar} />} 
        />
        <Route 
          path='/actors/:id' 
          element={<Actors showSidebar={showSidebar} />}
        />
        <Route 
          path='/movie/:id' 
          element={<MovieInformation showSidebar={showSidebar} />} 
        />
        <Route 
          path='/profile/:id'
          element={<Profile showSidebar={showSidebar} />}
        />
      </Routes>
    </main>
  );
}

export default App;
