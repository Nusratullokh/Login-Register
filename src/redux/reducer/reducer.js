// // import {LOGIN, REGISTER, ERROR, LOADING, SIGN_OUT} from "../action/action";

// // const initialState ={
// //     token: localStorage.getItem("token") || null,
// //     user: localStorage.getItem("user") || null,
// //     loading: false,
// //     isError: false,
// //     isSuccess: false,
// //     error: null,
// //     remember: false
// // };

// // export const reducer = (state = initialState, action) => {
// //     switch (action.type) {
// //         case REGISTER:
// //         case LOGIN:
// //             localStorage.setItem("token", action.token);
// //             localStorage.setItem("user",JSON.stringify(action.user) );
// //             return {
// //                 token: action.token,
// //                 user: action.user,
// //                 loading: false,
// //                 isError: false,
// //                 isSuccess: true,
// //                 error: null,
// //             }
// //             case LOADING:
// //                 return {
// //                     ...state,
// //                     loading: true,
// //                     }
// //                     case ERROR:
// //                         return {    
// //                             isError: true,
// //                             loading: false,
// //                             error: action.error || "ERROR",
// //                             token: null,
// //                         }
// //                         case SIGN_OUT:
// //                             localStorage.removeItem("token");
// //                             localStorage.removeItem("user");
// //                             return {
// //                                 ...state,
// //                                 token: null,
// //                                 user: null,
// //                                 }
// //                                 default:
// //                                     return state;
// //                                     }

// // }

// import { LOGIN, REGISTER, ERROR, LOADING, SIGN_OUT } from "../action/action";

// const initialState = {
//   token: localStorage.getItem("token") || null,
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   loading: false,
//   isError: false,
//   isSuccess: false,
//   error: null,
//   remember: false,
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER:
//     case LOGIN:
//       localStorage.setItem("token", action.token);
//       localStorage.setItem("user", JSON.stringify(action.user));
//       return {
//         ...state,  // Include all previous state properties
//         token: action.token,
//         user: action.user,
//         loading: false,
//         isError: false,
//         isSuccess: true,
//         error: null,
//       };
    
//     case LOADING:
//       return {
//         ...state,
//         loading: true,
//       };
    
//     case ERROR:
//       return {
//         ...state,
//         isError: true,
//         loading: false,
//         isSuccess: false,
//         error: action.error || "ERROR",
//         token: null,
//         user: null,
//       };
    
//     case SIGN_OUT:
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       return {
//         ...state,
//         token: null,
//         user: null,
//         isError: false,
//         isSuccess: false,
//         error: null,
//       };
    
//     default:
//       return state;
//   }
// };

import {
  ERROR,
  LOADING,
  LOGIN,
  REGISTER,
} from "../action/action";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isError: false,
  isSuccess: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      localStorage.setItem("token", action.token);
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        token: action.token,
        user: action.user,
        error: null,
        isError: false,
        isSuccess: true,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: "ERROR",
        isError: true,
        isSuccess: false,
        loading: false,
        user: null,
        token: null,
      };
    case "SIGNOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
