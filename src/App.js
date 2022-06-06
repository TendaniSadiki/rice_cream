import Topbar from './Components/topbar/Topbar';
import './App.css';
import AppRoutes from './Auth/Routes';


//functional programing
function App() {
  return (
    <div>
    <AppRoutes/>
    <Topbar/>
    </div>
  );
}

export default App;
