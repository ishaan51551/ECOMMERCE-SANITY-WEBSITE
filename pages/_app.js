import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp

// import React from 'react'; //importing react becoz we are using  presets(babelrc), so that we can use the jsx section.
// import {Toaster} from 'react-hot-toast'; //for pop up the elements
// import { Layout } from '../components';
// import { StateContext } from '../context/StateContext';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <StateContext>
//     <Layout>
//       <Toaster/>
//       <Component {...pageProps} /> 
//       {/* we get access to component(INSIDE OF A LAYOUT)  through a props called children which appears in Layout.jsx */}
//     </Layout>
//     </StateContext>
//   )
// }

// export default MyApp
