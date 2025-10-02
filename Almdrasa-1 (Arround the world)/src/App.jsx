import { Route, Routes } from 'react-router'
// import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import './App.css'
import Error from '../pages/Error'
import CountryDetails from '../pages/CountryDetails'
import Default from '../layout/Default'

function App() {

  return (
    <div id='App' className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <Routes>
        <Route path='/' element={<Default/>}>
          <Route index element={<Home/>}/>
          <Route path='countries/:name' element={<CountryDetails/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
