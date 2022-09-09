import {useState, useEffect,useCallback} from 'react';
import useData from './useData';


// https://randomuser.me/api/

const useProfile = ()=>{
    const {data} = useData("https://randomuser.me/", "api/");

    return {
        data
    }
}

export default useProfile;