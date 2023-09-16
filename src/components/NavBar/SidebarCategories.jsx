import React from 'react'
import { Link } from 'react-router-dom'
import genreIcons from '../../assets/genres'
import { useDispatch } from 'react-redux'
import { selectGenreIdOrCategoryName } from '../../features/currentGenreIdOrCategoryName'

function SidebarCategories({ id, name, setShowSidebar }) {
  const dispatch = useDispatch()
  return (
    <Link
      key={id} to="/"
      onClick={() => {
        setShowSidebar(false)
        dispatch(selectGenreIdOrCategoryName(id))
      }}
      className="flex gap-6 pl-4 py-3 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-cyan-200 dark:from-zinc-800 dark:to-zinc-600">
      <img className="w-6 dark:invert" src={genreIcons[name.toLowerCase()]} alt="genre-icon" />
      {name}
    </Link>
  )
}

export default SidebarCategories
