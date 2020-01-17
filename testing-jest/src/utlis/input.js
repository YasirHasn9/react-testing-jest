import {useState} from "react"


export function useInput(initialValue){
    const [state, setState] = useState(initialValue)

    const customSetter = udpateValue => {
        setState(udpateValue)
    }

    return [state , customSetter]
}

export function useLocalStorge(key,initialValue){
    const [state , setState] = useInput(() => {
        return localStorage.getItem(key) || initialValue
    })
    const customSetter = updateValue => {
        setState(updateValue)
        localStorage.setItem(key, updateValue)
    }
    return [state , customSetter]
}