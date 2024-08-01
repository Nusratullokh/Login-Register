// // import { useState, useEffect } from "react";
// // import axios from '../api';

// // const useFetch = (ENDPOINT) => {
// //     const [data, setData] = useState(null)
// //     const [loading, setLoading] = useState(false)
// //     useEffect(() => {
// //         const loadData = async() => {
// //             try{
// //                 setLoading(true)
// //                 const response = await axios.get(ENDPOINT)
// //                 setData(response.data?.payload)
// //             }
// //             catch(error){
// //                 console.log(error)
// //                 }
// //                 finally {
// //                     setLoading(false)
// //                 }
            
// //         }
// //         loadData()
// //         }, [ENDPOINT])
// //         return [data, loading]

// //     }
// // export default useFetch;

// import { useState, useEffect } from "react";
// import axios from '../api';

// const useFetch = (ENDPOINT) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const cancelTokenSource = axios.CancelToken.source();

//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(ENDPOINT, {
//           cancelToken: cancelTokenSource.token,
//         });
//         setData(response.data?.payload);
//       } catch (error) {
//         if (axios.isCancel(error)) {
//           console.log('Request canceled:', error.message);
//         } else {
//           setError(error);
//           console.error(error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();

//     return () => {
//       cancelTokenSource.cancel('Operation canceled by the user.');
//     };
//   }, [ENDPOINT]);

//   return [data, loading, error];
// };

// export default useFetch;


import { useEffect, useState } from "react";
import axios from '../api'

const useFetch = (ENDPOINT) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataLoad = async () => {
      try{
        setLoading(true);
        const response = await axios(ENDPOINT);
        setData(response.data?.payload);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false)
      }
    }

    dataLoad();
  }, [ENDPOINT])

  return [data, loading];
}

export default useFetch
