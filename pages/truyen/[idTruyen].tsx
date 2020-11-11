import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

export default function Truyen() {
    const router = useRouter();

    console.log('router', router.query.idTruyen);
    return (
        <>
            <Head>
                <title>Story Page Detail</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>
            <h1>Story Page Detail with id: {router.query.idTruyen}</h1>
        </>
    )
}