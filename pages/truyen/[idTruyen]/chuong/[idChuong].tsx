import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Chuong() {
    const router = useRouter();

    console.log('router', router.query);

    function handleOnClick() {
        router.push('/');
    }

    return (
        <>
            <Head>
                <title>Chapter Page Detail</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>
            <div>
                <h1>Chapter Page Detail with id truyen: <span style={{ color: "red" }}>{router.query.idTruyen}</span> - id chuong: <span style={{ color: "blue" }}>{router.query.idChuong}</span> </h1>
                <Link href="/"><a className="active">Back to home</a></Link>
                <button onClick={handleOnClick}>Back to home</button>
            </div>
        </>
    )
}