// // import { useSelector } from 'react-redux'
// // import { Avatar } from "antd";

// // const Profile = () => {
// //   const userInformation = useSelector(state => state.user)
// //   const user = JSON.parse(userInformation)

// //   return (
// //    <div className="flex justify-center items-center h-[100%]">
// //       <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
// //       {/* Profile Card */}
// //          <div className="md:w-1/3 p-6 flex flex-col items-center bg-blue-100">
// //             <Avatar 
// //                size="large" 
// //                style={{ cursor: "pointer", color: "#0814ec", backgroundColor: "#fde3cf", marginBottom: "20px", width: "100px", height: "100px", fontSize: "50px", fontWeight: "bold", borderRadius: "50%" }}>
// //                {user?.first_name.at(0)}
// //             </Avatar>
// //             <h2 className="text-xl font-semibold text-gray-800">{user?.first_name}</h2>
// //             <p className="text-gray-600 mb-4">I am a {user?.role} in the account</p>
// //             <div className="flex justify-between w-full">
// //                <div className="flex flex-col items-center">
// //                   <span className="text-gray-600">{user?.likes ? user?.likes.length : 0}</span>
// //                   <span className="text-gray-600">Liked</span>
// //                </div>
// //                <div className="flex flex-col items-center">
// //                   <span className="text-gray-600">{user?.purchases ? user?.purchases.length : 0}</span>
// //                   <span className="text-gray-600">Purchased</span>
// //                </div>
// //             </div>
// //          </div>

// //          {/* Profile Details */}
// //          <div className="md:w-2/3 p-6">
// //             <div className="mb-4">
// //                <h3 className="text-gray-800 font-semibold">Name</h3>
// //                <p className="text-gray-600">{user?.first_name}</p>
// //             </div>
// //             <div className="mb-4">
// //                <h3 className="text-gray-800 font-semibold">User Name</h3>
// //                <p className="text-gray-600">{user?.username}</p>
// //             </div>
// //             <div className="mb-4">
// //                <h3 className="text-gray-800 font-semibold">Password</h3>
// //                <p className="text-gray-600">*********</p>
// //             </div>
// //             <div className="mb-4">
// //                <h3 className="text-gray-800 font-semibold">Phone Number</h3>
// //                <p className="text-gray-600">+998 90 123 45 67</p>
// //             </div>
// //          </div>
// //       </div>
// //    </div>
// //   )
// // }

// // export default Profile

// import { useSelector } from 'react-redux';
// import { Avatar } from "antd";


// const Profile = () => {
//   // Safely parse user information and handle potential errors
//   const userInformation = useSelector(state => state.user);
//   let user = null;

//   try {
//     user = JSON.parse(userInformation);
//   } catch (error) {
//     console.error("Error parsing user information:", error);
//   }

//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
//         {/* Profile Card */}
//         <div className="md:w-1/3 p-6 flex flex-col items-center bg-blue-100">
//           <Avatar
//             size="large"
//             style={{
//               cursor: "pointer",
//               color: "#0814ec",
//               backgroundColor: "#fde3cf",
//               marginBottom: "20px",
//               width: "100px",
//               height: "100px",
//               fontSize: "50px",
//               fontWeight: "bold",
//               borderRadius: "50%"
//             }}
//           >
//             {user?.first_name?.charAt(0)}
//           </Avatar>
//           <h2 className="text-xl font-semibold text-gray-800">{user?.first_name}</h2>
//           <p className="text-gray-600 mb-4">I am a {user?.role} in the account</p>
//           <div className="flex justify-between w-full">
//             <div className="flex flex-col items-center">
//               <span className="text-gray-600">{user?.likes?.length ?? 0}</span>
//               <span className="text-gray-600">Liked</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="text-gray-600">{user?.purchases?.length ?? 0}</span>
//               <span className="text-gray-600">Purchased</span>
//             </div>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="md:w-2/3 p-6">
//           <div className="mb-4">
//             <h3 className="text-gray-800 font-semibold">Name</h3>
//             <p className="text-gray-600">{user?.first_name}</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-gray-800 font-semibold">User Name</h3>
//             <p className="text-gray-600">{user?.username}</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-gray-800 font-semibold">Password</h3>
//             <p className="text-gray-600">*********</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-gray-800 font-semibold">Phone Number</h3>
//             <p className="text-gray-600">+998 90 123 45 67</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from "react";
import { useSelector } from "react-redux";
import { Card, Typography } from "antd";
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const Profile = () => {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div className=" p-8 border rounded-lg shadow-lg bg-white">
      <Title level={2} className="mb-5 text-xl">User Info</Title>
      <div className="flex gap-5 flex-col">
        <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gray-200">
          <span className="text-gray-600 text-[48px]">
            {user.first_name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <div className="grid  gap-5" >
            <div>
              <Text className="text-[#808080] ">First_name:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user.first_name}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Username:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user.username}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Password:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]mt-2">
                {user.password}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Id:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user._id}
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;