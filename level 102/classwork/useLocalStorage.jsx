//1) შექმენით კაუჭა useLocalStorage რომელიც მიიღებს 2 პარამეტრს: გასაღებს და საწყის მნიშვნელობას, თქვენი დავალებაა რომ ამ კაუჭამ localStorage-ში განაახლოს თავისი მდგომარეობა რეალურ დროში
import { useState, useEffect } from 'react';

function savedValue(key, initalState) {

    const savedInfo = JSON.parse(localStorage.getItem(key))

    if (savedInfo) {
        return savedInfo
    }

    return initalState;
}
function useLocalStorage(key, initalState) {
    const [value, setValue] = useState(() => {
        return savedValue(key, initalState)
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage;
