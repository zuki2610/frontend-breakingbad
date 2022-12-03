import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'

import Home from '../../pages/home/Home'
import Deaths from '../../pages/deaths/Deaths'
import NotFound from '../../pages/notFound/NotFound'
import Characters from '../../pages/characters/Characters'
import Episodes from '../../pages/episodes/Episodes'
import Quotes from '../../pages/quotes/Quotes'

export default function Body() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/personajes' element={<Characters />} />
            <Route path='/episodios' element={<Episodes />} />
            <Route path='/citas' element={<Quotes />} />
            <Route path='/muertes' element={<Deaths />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
