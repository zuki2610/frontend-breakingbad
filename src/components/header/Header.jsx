import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/personajes'>Personajes</Link>
        <br />
        <Link to='/episodios'>Episodios</Link>
        <br />
        <Link to='/frases-celebres'>Frases Celebres</Link>
        <br />
        <Link to='/muertes'>Muertes</Link>
    </nav>
  )
}
