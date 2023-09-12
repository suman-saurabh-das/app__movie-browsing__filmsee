import React from 'react'
import { Link } from 'react-router-dom'
import genreIcons from '../../assets/genres'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'

function SidebarCategories({ id, name, setShowSidebar }) {

  const dispatch = useDispatch()
  return (
    <Link
      key={id} to="/"
      onClick={() => {
        setShowSidebar(false)
        dispatch(selectGenreOrCategory(id))
      }}
      className="flex gap-6 pl-4 py-3">
      <img className="w-6 dark:invert" src={genreIcons[name.toLowerCase()]} alt="genre-icon" />
      {name}
    </Link>
  )
}

export default SidebarCategories
