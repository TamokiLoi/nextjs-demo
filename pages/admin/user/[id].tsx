import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

// Demo Client Side Rendering
export default function User() {
    const router = useRouter();

    console.log('router', router.query.id);

    return (
        <>
            <Head>
                <title>User Detail</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>
            <h1>User page with id: {router.query.id}</h1>
        </>
    )
}