import { Route, Routes } from 'react-router-dom';

import Profile from "./components/Profile";
import TotalSalaryComponent from './components/TotalSalaryComponent';


function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Profile/>} />
          <Route path='/salary' element={<TotalSalaryComponent/>} />
        </Routes>
      </div>
  );
}

export default App;
