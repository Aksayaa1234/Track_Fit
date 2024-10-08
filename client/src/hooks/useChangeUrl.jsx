import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "../context/QueryContext";


export const useChangeUrl=()=>{
    //this hook is used to change the url using navigate in can change only path or path with same query params based on reset
   let navigate=useNavigate();

   const change=(path)=>{
        navigate({pathname:path})
   } 
   return change;
}