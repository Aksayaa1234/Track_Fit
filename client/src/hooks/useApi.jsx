import { useState , useEffect} from 'react';
import axios from "axios";

export const useGetApi=(url,query,body={})=>{

    let [state,setState]=useState();
    let [bodyState,setBodyState]=useState();
    let [queryState,setQueryState]=useState();

    useEffect(()=>{
        if(queryState==null)
            return;
        axios.get(url,{
            params: queryState
        })
        .then((res)=>{
            setState(()=>(res.data));
        })
        .catch((error) => {
            console.error("GET error:", error);
        });
    },[queryState,bodyState]);

    const changeInput=(query,body={})=>{
        setBodyState(()=>(body));
        setQueryState(()=>(query));
    }
    return [state,changeInput]
}


export const usePostApi=(url,body,query={})=>{

    let [state,setState]=useState();
    let [bodyState,setBodyState]=useState();
    let [queryState,setQueryState]=useState();

    useEffect(()=>{
        if(bodyState==null)
            return;
        axios.post(url,{
        ...bodyState
        })
        .then((res)=>{
            console.log(res.data);
            setState(()=>(res.data));
        })
        .catch((error) => {
            setState((error.response.data));
        });
    },[queryState,bodyState]);

    const changeInput=(body,query={})=>{
        setBodyState(()=>(body));
        setQueryState(()=>(query));
    }
    return [state,changeInput]
}