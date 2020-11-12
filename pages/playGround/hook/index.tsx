import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import Button from '../../../components/Button';
import styles from '../../../styles/Home.module.css';

const LifeCycleHook = () => {

    // similar constructor
    useMemo(() => {
        console.log('constructor new');
    }, []);

    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Tamoki',
        lastName: 'Loi',
    });

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

    const fullName = useMemo(() => { return user.firstName + ' ' + user.lastName }, [user]);

    const handleCreateCounter = useCallback(() => {
        setCounter(counter + 1)
    }, [counter]);

    const inputFileEl = useRef(null);

    return (
        <div className={styles.container}>
            <h1>Play Ground - Life Cycle - Hooks</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleCreateCounter}>Counter Add</button><br />
            <button onClick={() => setVisible(!visible)}>Hide Component Button</button>
            {visible && <Button />}
            <p>{fullName}</p>
            <hr style={{ width: '100%' }} />
            <div>
                <input type="file" ref={inputFileEl} className={styles.uploadHidden}/>
                <button
                    className={styles.upload}
                    onClick={() => {
                        console.log(inputFileEl.current);
                        inputFileEl.current.click();
                    }}>
                    Upload Image
                </button>
            </div>
        </div>
    )
}

export default LifeCycleHook;