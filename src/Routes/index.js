import { useContext } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthContext } from "../contexts/Auth";


import Home from '../Pages/Home';
import Singnin from '../Pages/Singnin';
import Singnup from '../Pages/Singnup';


export default function Routers (){
    const Private = ({ Item })=>{
        const { authenticad } = useContext(AuthContext);

        return authenticad > 0 ? <Item /> : <Singnin />;
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Item={Home}></Private>}/>
                <Route path="*" element={<Private Item={Home}></Private>}/>
                <Route path="/login" element={<Singnin /> }/>
                <Route path="/singup" element={<Singnup /> }/>
            </Routes>
        </BrowserRouter>
    )
}