import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import styles from '../../../styles/Home.module.css';

const LifeCycleHook = () => {

    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log('useEffect run = empty');
    }, []);
    useEffect(() => {
        console.log('useEffect run counter, visible', counter, visible);
    }, [counter, visible]);
    useEffect(() => {
        console.log('useEffect run counter', counter);
    }, [counter]);
    useEffect(() => {
        console.log('useEffect run visible', visible);
    }, [visible]);

    console.log('before return');

    return (
        <div className={styles.container}>
            <h1>Play Ground - Life Cycle - Hooks</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => {
                // setCounter(counter + 1)
                setCounter((preCounter) => {
                    return preCounter + 1
                })
            }}>Counter Add</button><br/>
            <button onClick={() => setVisible(!visible)}>Hide Component Button</button>
            {visible && <Button />}
        </div>
    )
}

export default LifeCycleHook;