import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function RefreshHandler({ setIsAuthenticated }) {
    const locaion = useLocation();
    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem('token')){
            setIsAuthenticated(true);
            if(
                locaion.pathname === '/' ||
                locaion.pathname === '/login' ||
                locaion.pathname === '/signup'
            ){
                navigate('/home');
            }
        }
    },)
    return (
        null
    )
}

export default RefreshHandler;