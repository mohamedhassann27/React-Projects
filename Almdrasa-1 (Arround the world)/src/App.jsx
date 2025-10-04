import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import './App.css'
import Error from '../pages/Error'
import CountryDetails from '../pages/CountryDetails'
import Default from '../layout/Default'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "../public/locales/en.json"
import ar from "../public/locales/ar.json"
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({

    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    },

    fallbackLng: "en",

    detection: {
      order:[
        'cookie',
      ],
      caches: ['cookie']
    }
  });

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
