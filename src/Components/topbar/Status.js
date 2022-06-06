import OnlineNav from "./OnlineNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const Status = () =>{   
        return(
            <Router>
                    <Routes>
                    <Route exact path="*" element={<OnlineNav/>}/>
                    </Routes>
            </Router>
        )
    }
    
    export default Status;