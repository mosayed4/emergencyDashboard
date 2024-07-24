import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Emergencies } from './components/Emergencies';
import {  Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Users } from './components/Users';
import { Edit_emergency } from './components/Edit_emergency';
import { Creat_emergency } from './components/Creat_emergency';
import { Create_user } from './components/Create_user';
import { Edit_user } from './components/Edit_user';


function App() {
  return (
    <div className="wrapper">
      <Routes>

      <Route path="/" element={<Login/>}/>
      <Route
          path="/dashboard" element={<Dashboard/>} > 
          <Route path="emergencies" element={<Emergencies />} />
          <Route path="users" element={<Users />} />
          <Route path="emergencies/update" element={<Edit_emergency />} />
          <Route path="emergencies/create" element={<Creat_emergency />} />
          <Route path="users/create" element={<Create_user />} />
          <Route path="users/update" element={<Edit_user />} />
        </Route>


      


      </Routes>

      
     
    </div>
  );
}

export default App;
