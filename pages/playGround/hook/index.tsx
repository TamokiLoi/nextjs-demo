import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import Button from '../../../components/Button';
import styles from '../../../styles/Home.module.css';
import useConstructor from '../../../custom-hook/useConstructor';

const LifeCycleHook = () => {

    // similar constructor: type 2
    useMemo(() => {
        console.log('constructor 2');
    }, []);

    // create constructor: type 3
    const isRunHook = useRef(false);
    if (isRunHook.current == false) {
        console.log('constructor 3');
        isRunHook.current = true;
    }

    // create constructor: type 4
    useConstructor(() => {
        console.log('constructor 4');
    })

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
                {/* type 1 */}
                {/* <input type="file" ref={inputFileEl} className={styles.uploadHidden}/>
                <button
                    className={styles.upload}
                    onClick={() => {
                        console.log(inputFileEl.current);
                        inputFileEl.current.click();
                    }}>
                    Upload Image
                </button> */}

                {/* type 2 */}
                <input type="file" className={styles.uploadHidden} />
                <button
                    className={styles.upload}
                    onClick={() => {
                        console.log(inputFileEl.current);
                        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                        input.click();
                    }}>
                    Upload Image
                </button>
            </div>
        </div>
    )
}

export default LifeCycleHook;