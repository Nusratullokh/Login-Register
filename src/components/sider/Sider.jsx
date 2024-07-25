// import "./Sider.css"

// import { NavLink,  } from "react-router-dom";

// import { Layout, Button, Menu, Typography, Modal } from 'antd';
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// import {SIGN_OUT} from "../../redux/action/action"


// import {
//   UserOutlined,
//   DropboxOutlined,
//   SettingOutlined,
//   LogoutOutlined,
//   LoginOutlined,
// } from '@ant-design/icons';

// // import { TiUserOutline } from "react-icons/ti";

// const { Sider } = Layout;
// const { Title } = Typography;
// // const { Search } = Input;

// const SiderComponent= ({collapsed}) => {
//   const dispatch = useDispatch ();
//   const [isModalVisible , setIsModalVisible]= useState(false);

//   const showModal = () =>{
//     setIsModalVisible(true);
//   };

//   const hendleOk = () => {
//     dispatch ({type: SIGN_OUT});
//     setIsModalVisible(false);

//   };

// const hendleCanel = () => {
//   setIsModalVisible(false);

// };





// // const onSearch = () => {

// }
// // const SiderComponent = ({collapsed, handleToggleCollapsed}) => {
//   return (
//       <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
//         <Title level={3} className="text-center text-white pt-3"><span className="text-white"> Logo</span></Title>
//         {/* other content */}
//         <Menu

//           theme="dark"
//           mode="inline"
//           items={[
//             {
//               key: '1',
//               icon: <DropboxOutlined />,
//               label: <NavLink end className={"sidebar__link"} to="/dashboard">Products</NavLink>
//             },

//             {
//               key: '2',
//               icon: <UserOutlined />,
//               label: <NavLink className={"sidebar__link"} to="/dashboard/users">Users</NavLink>
//             },
//             {
//               key: '3',
//               icon: <SettingOutlined />,
//               label: <NavLink className={"sidebar__link"} to="/dashboard/settings">Settings</NavLink>
//             }

//           ]}
//         />
//         <div className="text-center p-3 flex-1 flex items-end">
//           <Button onClick={showModal} className="w-full" danger type="primary">
//             <LoginOutlined /> {!collapsed && "Sign Out"}
//             </Button>
//         </div>

//         <Modal
//         title="Basic Modal"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okText="yes"
//         cancelText="no"
//         maskClosable={false}
//         >
//           <p>Do you want to exit the platform?</p>
//         </Modal>
//       </Layout.Sider>
      
   


//   );




// export default SiderComponent;


// import "./Sider.css";

// import { NavLink } from "react-router-dom";
// import { Layout, Button, Menu, Typography, Modal } from 'antd';
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { SIGN_OUT } from "../../redux/action/action";
// import {
//   UserOutlined,
//   DropboxOutlined,
//   SettingOutlined,
//   LogoutOutlined,
//   LoginOutlined,
// } from '@ant-design/icons';

// const { Sider } = Layout;
// const { Title } = Typography;

// const SiderComponent = ({ collapsed }) => {
//   const dispatch = useDispatch();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     dispatch({ type: SIGN_OUT });
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
//       <Title level={3} className="text-center text-white pt-3"><span className="text-white">Logo</span></Title>
//       <Menu
//         theme="dark"
//         mode="inline"
//         items={[
//           {
//             key: '1',
//             icon: <DropboxOutlined />,
//             label: <NavLink className="sidebar__link" to="/dashboard">Products</NavLink>
//           },
//           {
//             key: '2',
//             icon: <UserOutlined />,
//             label: <NavLink className="sidebar__link" to="/dashboard/users">Users</NavLink>
//           },
//           {
//             key: '3',
//             icon: <SettingOutlined />,
//             label: <NavLink className="sidebar__link" to="/dashboard/settings">Settings</NavLink>
//           }
//         ]}
//       />
//       <div className="text-center p-3 flex-1 flex items-end">
//         <Button onClick={showModal} className="w-full" danger type="primary">
//           <LoginOutlined /> {!collapsed && "Sign Out"}
//         </Button>
//       </div>
//       <Modal
//         title="Sign Out Confirmation"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okText="Yes"
//         cancelText="No"
//         maskClosable={false}
//       >
//         <p>Do you want to exit the platform?</p>
//       </Modal>
//     </Layout.Sider>
//   );
// };

// export default SiderComponent;


import "./Sider.css";
import { NavLink } from "react-router-dom";
import { Layout, Button, Menu, Typography, Modal } from 'antd';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SIGN_OUT } from "../../redux/action/action";
import {
  UserOutlined,
  DropboxOutlined,
  SettingOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

const SiderComponent = ({ collapsed }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch({ type: SIGN_OUT });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Title level={3} className="text-center text-white pt-3">
        <span className="text-white">Logo</span>
      </Title>
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: '1',
            icon: <DropboxOutlined />,
            label: <NavLink className="sidebar__link" to="/dashboard">Products</NavLink>
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: <NavLink className="sidebar__link" to="/dashboard/users">Users</NavLink>
          },
          {
            key: '3',
            icon: <SettingOutlined />,
            label: <NavLink className="sidebar__link" to="/dashboard/settings">Settings</NavLink>
          }
        ]}
      />
      <div className="text-center p-3 flex-1 flex items-end">
        <Button onClick={showModal} className="w-full" danger type="primary">
          <LoginOutlined /> {!collapsed && "Sign Out"}
        </Button>
      </div>
      <Modal
        title="Sign Out Confirmation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
        maskClosable={false}
      >
        <p>Do you want to exit the platform?</p>
      </Modal>
    </Sider>
  );
};

export default SiderComponent;

