import { Route, Routes } from 'react-router-dom';

import Profile from "./components/Profile";
import TotalSalaryComponent from './components/TotalSalaryComponent';
import TaxCalculator from './components/TaxCalculator';


function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Profile/>} />
          <Route path='/salary' element={<TotalSalaryComponent/>} />
          <Route path='/tax' element={<TaxCalculator/>} />
          <Route path='*' element={<h1>404 - Not Found!</h1>} />
        </Routes>
      </div>
  );
}

export default App;
