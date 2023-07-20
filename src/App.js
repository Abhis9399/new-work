
import './App.css';
import {BrowserRouter as Router,Switch,Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import SignUp from './components/Sign-Up/signup';
import SignIn from './components/Sign-Up/signin';
import ForgotPass from './components/Sign-Up/forgotpassword';
import Otp from './components/Sign-Up/Otp';
import Gatepass from './components/In-Out-Gate-Pass/Gatepass';
import Table from './components/Table/table';
import Control from './components/Control/Control';
// import Loading from './components/Loading/Loading';
import Unloading from './components/Unloading/Unloading';
import Multistep from './components/Multistep/Multistep';
import Palledar from './components/Palledar/Palledar';
import PalledarOne from './components/PalledarOne';
import RawMaterialUnloading from './components/Unloading/RawMaterialUnloading';
import ComplainSheet from './components/Multistep/ComplainSheet';
import Salai from './components/Multistep/SalaiDetails';
import HomePage from './components/Home-Page/Home-Page';
import RightSideBar from './components/Right-Side-Bar/RightSideBar';
import Supervisor from './components/Multistep/SupervisorTaskSheet';
import GatePass from './components/Multistep/gatepass'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <SignUp /> } />
        <Route path="/login" element={ <SignIn /> } />
        <Route path="/forgot" element={ <ForgotPass /> } />
        <Route path="/otp" element={ <Otp /> } />
        <Route path="Dashboard" element={ <Dashboard /> } />
        <Route path="gate-pass" element={ <Gatepass /> } />
        <Route path="table" element={ <Table /> } />
        <Route path="control" element={ <Control /> } />
        {/* <Route path="loading" element={ <Loading /> } /> */}
        <Route path="unloading" element={ <Unloading /> } />
        <Route path="multistep" element={ <Multistep /> } />
        <Route path="palledar" element={ <Palledar /> } />
        <Route path="palledarone" element={ <PalledarOne /> } />
        <Route path="rawmaterialunloading" element={ <RawMaterialUnloading /> } />
        <Route path="complainsheet" element={ <ComplainSheet /> } />
        <Route path="salai" element={ <Salai /> } />
        <Route path="supervisor" element={ <Supervisor /> } />
        <Route path="gatepass" element={ <GatePass /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
