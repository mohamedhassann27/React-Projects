import { Route, Routes } from "react-router"
import Home from "./Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import Contacts from "./pages/Contacts/Contacts"
import Invoices from "./pages/Invoices/Invoices"
import Team from "./pages/Team/Team"
import Form from "./pages/Form/Form"
import Calendar from "./pages/Calendar/Calendar"
import Faq from "./pages/Faq/Faq"
import BarChart from "./pages/BarChart/BarChart"
import PieChart from "./pages/PieCahrt/PieChart"
import LineChart from "./pages/LineChart/LineChart"
import Geography from "./pages/Geography/Geography"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="invoices" element={<Invoices/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="calendar" element={<Calendar/>}/>
        <Route path="faq" element={<Faq/>}/>
        <Route path="bar" element={<BarChart/>}/>
        <Route path="pie" element={<PieChart/>}/>
        <Route path="line" element={<LineChart/>}/>
        <Route path="geography" element={<Geography/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
