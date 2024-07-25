// import { Outlet } from 'react-router-dom'
// import { GoogleOAuthProvider } from '@react-oauth/google';

// const Auth = () => {
//   return (
//     <div className='w-full h-screen flex items-center justify-center'>
//       <div className='max-w-[350px] w-full p-7 shadow-cm'>
//         <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
//           <Outlet />
//         </GoogleOAuthProvider>
//       </div>
//     </div>
//   )
// }

// export default Auth

import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Auth = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.error("Google Client ID is not defined. Please set VITE_GOOGLE_CLIENT_ID in your environment variables.");
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Error: Google Client ID is not set. Please check your configuration.</p>
      </div>
    );
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='max-w-[350px] w-full p-7 shadow-cm'>
        <GoogleOAuthProvider clientId={clientId}>
          <Outlet />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default Auth;
