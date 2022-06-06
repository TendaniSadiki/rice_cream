import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//components
import Home from '../Components/Home/Home';
const AppRoutes = () =>{
    return(
//Router
        <Router>
                <Routes>
                <Route exact path="*" element={<Home/>}/>
                </Routes>
        </Router>
    )
}

export default AppRoutes;
    