// // import { Button, Layout, Input, Avatar } from "antd"
// // import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

// // import useFetch from "../../hooks/useFetch"

// // import { NavLink } from "react-router-dom"

// // const{ Header } = Layout;
// // const { Search } = Input;

// // const HeaderComponent = ({collapsed, handleToggleCollapsed}) =>{
// //   const [data] = useFetch ("/dashboard/profile"); 

// //   const handleSearch = (value) =>{
// //     console.log("Search:", value);
// //   };

// //   return(
// //     <Header style={{padding: 0, display: "flex", alignItems: "center", gap: "20px"}}>
// //       < Button
// //       type="text"
// //       onClick={handleToggleCollapsed}
// //       icon= {collapsed? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// //       style={{fontSize: "16px", width: 64 , height: 64, color: "#fff"}}/>

// //       <div style={{flex: 1, display:"flex", alignItems: "center"}}>
// //         <Search
// //         placeholder="Search..."
// //         onSearch={handleSearch}
// //         style={{maxwidth: "400px", width: "100%", marginRight: "20px"}}/>

// //       </div>

// //       <NavLink to="/dashboard/profile">
// //       <div className="bg-#ff57">
// //         <div>
// //           <Avatar size="large"  style={{cursor: "pointer", color: "#0814ec", background: "#fde3cf" }}>{data?.first_name.at(0)}</Avatar>
// //         </div>
// //       </div>
// //       </NavLink>

// //     </Header>
// //   )

// // }
// // export default HeaderComponent

// import { Button, Layout, Input, Avatar } from "antd";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import useFetch from "../../hooks/useFetch";
// import { NavLink } from "react-router-dom";

// const { Header } = Layout;
// const { Search } = Input;

// const HeaderComponent = ({ collapsed, handleToggleCollapsed }) => {
//   const [data] = useFetch("/dashboard/profile");

//   const handleSearch = (value) => {
//     console.log("Search:", value);
//   };

//   return (
//     <Header  style={{ padding: 0, display: "flex", alignItems: "center", gap: "20px" }}>
//       <Button
//         type="text"
//         onClick={handleToggleCollapsed}
//         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//         style={{ fontSize: "16px", width: 64, height: 64, color: "#fff" }}
//       />
//       <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
//         <Search
//           placeholder="Search..."
//           onSearch={handleSearch}
//           style={{ maxWidth: "400px", width: "100%", marginRight: "20px" }}
//         />
//       </div>
//       <NavLink to="/dashboard/profile">
//         <div style={{ background: "#ff5757", padding: "5px", borderRadius: "50%" }}>
//           <Avatar
//             size="large"
//             style={{ cursor: "pointer", color: "#0814ec", background: "#fde3cf" }}
//           >
//             {data?.first_name.charAt(0)}
//           </Avatar>
//         </div>
//       </NavLink>
//     </Header>
//   );
// };

// export default HeaderComponent;




import { Avatar, Menu, Layout, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';

const { Header } = Layout;
const { Search } = Input;


const Navbar = ({ collapsed, toggleCollapsed, setTermSearch }) => {
  const [data, loading] = useFetch("/auth/profile");

  const getUserInitial = (name) => {
    return typeof name === 'string' && name.length > 0 ? name.slice(0, 2).toUpperCase() : 'U';
  };

  const getAvatarColor = (name) => {
    if (typeof name !== 'string' || name.length === 0) return '#87d068';

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 50%, 70%)`;
  };

  const userName = loading ? 'User' : `${data?.first_name?.charAt(0).toUpperCase()}${data?.first_name?.slice(1).toLowerCase()}`;
  const avatarColor = loading ? '#87d068' : getAvatarColor(data?.first_name);

  const searchHandle = (value) => {
    setTermSearch(value);
    console.log(value);
  }

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className='flex items-center gap-16'>
        <div className="demo-logo">
          <div className='flex items-center'>
            <span className='text-white text-3xl w-full flex justify-center items-center h-full py-4 font-mono'>LOGO</span>
          </div>
        </div>

        <Button type="primary" onClick={toggleCollapsed} style={{ marginRight: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <Search
        placeholder="Search..."
        onChange={(e) => searchHandle(e.target.value)}
        allowClear
        style={{
          maxWidth: 600,
        }}
      />
      <Link to='profile' className='flex items-center gap-2'>
        <Avatar size="large" style={{ backgroundColor: avatarColor, cursor: 'pointer' }}>
          {loading ? <UserOutlined /> : getUserInitial(data?.first_name)}
        </Avatar>
        <span className='text-white text-[17px]'>{userName}</span>
      </Link>
    </Header>
  );
};

export default Navbar;
