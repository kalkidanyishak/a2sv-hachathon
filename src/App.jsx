import { useState } from 'react'
import MainPage from './components/mainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import RegisterChild from './components/mainPage/surveyor/RegisterChild'
import RegisterMother from './components/mainPage/surveyor/RegisterMom'
import Register from './components/mainPage/surveyor/Register'
import MotherList from './components/mainPage/surveyor/MotherList'
import ChildList from './components/mainPage/surveyor/ChildList'
import Postnatal from './components/mainPage/surveyor/Postnatal'
import Antenatal from './components/mainPage/surveyor/Antenatal'
import InfantForm from './components/mainPage/surveyor/InfantForm'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/surveyor' >
        <Route index element={<Register/>}/>
        <Route path='register-child' element={<RegisterChild/>} />
        <Route path='register-mother' element={<RegisterMother/>} />
        <Route path='mother-list/:type' element={<MotherList/>} />
        <Route path='child-list' element={<ChildList/>} />
      </Route>
      <Route path='postnatal/:id/:name' element={<Postnatal/>} />
      <Route path='antenatal/:id/:name' element={<Antenatal/>} />
      <Route path='infant-form/:id/:name' element={<InfantForm/>}/>
    </Routes>

    </>
  )
}

export default App
