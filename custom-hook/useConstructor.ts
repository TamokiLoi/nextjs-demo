import { useRef } from 'react';
// create Custom Hook -> useConstructor
// get one function callback
// function call one only time

type ConstructorCallBack = () => void;

function useConstructor(callback: ConstructorCallBack): void {
    const isRun = useRef(false);
    if (isRun.current == false) {
        callback();
        isRun.current = true;
    }
}

export default useConstructor;