import React from 'react'
import { Link } from 'react-router-dom'
import genreIcons from '../../assets/genres'

function SidebarCategories({ id, name, setShowSidebar }) {
  return (
    <Link
      key={id} to="/"
      onClick={() => setShowSidebar(false)}
      className="flex gap-6 pl-4 py-3">
      <img className="w-6 dark:invert" src={genreIcons[name.toLowerCase()]} alt="genre-icon" />
      {name}
    </Link>
  )
}

export default SidebarCategories
