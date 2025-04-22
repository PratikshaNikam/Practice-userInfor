import './App.css';
import PersonalInfo from './Components/PersonalInfo';
import ContactInfo from './Components/ContactInfo';
import ProfessionalInfo from './Components/ProfessionalInfo';
import AddressInfo from './Components/AddressInfo';
import Summary from './Components/Summary';
import { FormProvider } from './Components/FormContext';
import Layout from './Components/Layout';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
 return (
  <div className='container'>
   <h2 style={{color:'#ffffff'}}>User Registration Form</h2>
   <FormProvider>
   <Router>
      <Routes>
        <Route path="/" element={<Layout title="Personal Information"><PersonalInfo /></Layout>}/>
        <Route path="/contact" element={<Layout title="Contact Information"><ContactInfo /></Layout>}/>
        <Route path="/address" element={<Layout title="Address Information"><AddressInfo /></Layout>}/>
        <Route path="/professional" element={<Layout title="Professional Information"><ProfessionalInfo/></Layout>}/>
        <Route path="/summary" element={<Layout title="Summary of Information"><Summary /></Layout>}/>

      </Routes>
    </Router>
    </FormProvider>
  </div>
  )
}

export default App
