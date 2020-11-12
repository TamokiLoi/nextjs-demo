import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';
import '../styles/Home.module.css';

/** declare by CLASS */
// export default class CustomApp extends React.Component<AppProps> {
//   render() {
//     return (
//       <div className="root-app">
//         <Head>
//           <title>Create Next App</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     )
//   }
// }

/** declare by FUNCTION */
const CustomAPP: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default CustomAPP;

/** declare by OLD */
// function MyApp({ Component, pageProps }) {
//   return (
//     <div className="root-app">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   )
// }
// export default MyApp
