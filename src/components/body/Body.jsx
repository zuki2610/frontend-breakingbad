import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'

import Episodios from '../../pages/episodios/Episodios'
import FrasesCelebres from '../../pages/frasesCelebres/FrasesCelebres'
import Home from '../../pages/home/Home'
import Muertes from '../../pages/muertes/Muertes'
import NotFound from '../../pages/notFound/NotFound'
import Personajes from '../../pages/personajes/Personajes'

export default function Body() {
  return (
    <body>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/personajes' element={<Personajes />} />
                <Route path='/episodios' element={<Episodios />} />
                <Route path='/frases-celebres' element={<FrasesCelebres />} />
                <Route path='/muertes' element={<Muertes />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </body>
  )
}
