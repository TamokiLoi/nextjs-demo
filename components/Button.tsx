import { useEffect } from "react"

export default function Button() {

    useEffect(() => {
        // console.log('after render button component');
        // return () => {
        //     console.log('component button will unmount!');
        // }
    })

    return (
        <h1>Button Component</h1>
    )
}