import {Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import GameEasy from './page/GameEasy'
import GameNormal from './page/GameNormal'
import GameHard from './page/GameHard'
import Coutries from './page/Coutries'
import Rules from './page/Rules'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/easy' element={<GameEasy />} />
        <Route path='/normal' element={<GameNormal />} />
        <Route path='/hard' element={<GameHard />} />
        <Route path='/countries' element={<Coutries />} />
        <Route path='/rules' element={<Rules />} />
      </Routes>
    </>
  )
}

export default App
