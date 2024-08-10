// import { Navigate, useRoutes } from 'react-router-dom';
// import { lazy } from 'react';

// import Suspense from '../../../utils/index';
// import Private from '../../private/private';
// import { useSelector } from 'react-redux';
// import DashboardProfile from '../profile/profile';

// const Home = lazy(() => import('../../home/Home'));
// const Auth = lazy(() => import('../../auth/Auth'));
// const Dashboard = lazy(() => import('../Dashboard'));

// const Products = lazy(() => import('../products/products'));
// const Popular_product = lazy(() => import('../../popular_products'));;
// const Login = lazy(() => import('../../auth/login/Login'));
// const Register = lazy(() => import('../../auth/register/Register'));

// const RouteController = () => {
//     const auth = useSelector(state => state.token);
//     return useRoutes([
//         {
//             path: '',
//             element: <Suspense><Popular_product /></Suspense>,
//         },
//         {
//             path: 'auth',
//             element: auth ? <Navigate to='/dashboard' /> : <Suspense><Auth /></Suspense>,
//             children: [
//                 {
//                     path: '',
//                     element: <Suspense><Login /></Suspense>,
//                 },
//                 {
//                     path: 'register',
//                     element: <Suspense><Register /></Suspense>,
//                 },
//             ],
//         },
//         {
//             path: 'dashboard',
//             element: <Suspense><Private /></Suspense>,
//             children: [
//                 {
//                     path: '',
//                     element: <Suspense><Dashboard /></Suspense>,
//                     children: [
//                         {
//                             path: '',
//                             element: <Suspense><Products /></Suspense>,
//                         },
//                         {
//                             path: 'Popular-product',
//                             element: <Suspense><Popular_product /></Suspense>,
//                         },
//                         {
//                             path: 'profile',
//                             element: <Suspense><DashboardProfile /></Suspense>,
//                         },

//                     ]
//                 }
//             ]
//         },

//     ]);
// };

// export default RouteController;


import { notification, Table } from "antd";
import useFetch from "../../../hooks/useFetch";
import axios from "../../../api/index";

const Users = () => {
  const [data, isLoading] = useFetch(`/admin/registered-users`) 
    const columns = [
        {
          title: 'Firstname',
          dataIndex: 'first_name',
        },
        {
          title: 'Username',
          dataIndex: 'username',
        },
        {
          title: 'Date',
          dataIndex: 'registeredAt',
        },
        {
          title: 'Action',
          render: (user) => <button onClick={() => handlePromoteUser (user)} type="primary">Promote</button>,
        },
      ];

      const handlePromoteUser = async(user) => {
        try{
          const response = await axios.post(`/admin/add-admin`, {username: user.username})  
          if (response.status === 200) {
              notification.success({
                message: 'User Promoted',
              })
            }
          }
        
        catch(error){
          console.log(error);
        }
      }

      
  return (
    <Table loading={isLoading} rowKey={(row) => row._id}  columns={columns} dataSource={data}  />
  )
}

export default Users