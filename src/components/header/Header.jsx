// import { Button, Layout, Input, Avatar } from "antd"
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

// import useFetch from "../../hooks/useFetch"

// import { NavLink } from "react-router-dom"

// const{ Header } = Layout;
// const { Search } = Input;

// const HeaderComponent = ({collapsed, handleToggleCollapsed}) =>{
//   const [data] = useFetch ("/dashboard/profile"); 

//   const handleSearch = (value) =>{
//     console.log("Search:", value);
//   };

//   return(
//     <Header style={{padding: 0, display: "flex", alignItems: "center", gap: "20px"}}>
//       < Button
//       type="text"
//       onClick={handleToggleCollapsed}
//       icon= {collapsed? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       style={{fontSize: "16px", width: 64 , height: 64, color: "#fff"}}/>

//       <div style={{flex: 1, display:"flex", alignItems: "center"}}>
//         <Search
//         placeholder="Search..."
//         onSearch={handleSearch}
//         style={{maxwidth: "400px", width: "100%", marginRight: "20px"}}/>

//       </div>

//       <NavLink to="/dashboard/profile">
//       <div className="bg-#ff57">
//         <div>
//           <Avatar size="large"  style={{cursor: "pointer", color: "#0814ec", background: "#fde3cf" }}>{data?.first_name.at(0)}</Avatar>
//         </div>
//       </div>
//       </NavLink>

//     </Header>
//   )

// }
// export default HeaderComponent

import { Button, Layout, Input, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = ({ collapsed, handleToggleCollapsed }) => {
  const [data] = useFetch("/dashboard/profile");

  const handleSearch = (value) => {
    console.log("Search:", value);
  };

  return (
    <Header style={{ padding: 0, display: "flex", alignItems: "center", gap: "20px" }}>
      <Button
        type="text"
        onClick={handleToggleCollapsed}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{ fontSize: "16px", width: 64, height: 64, color: "#fff" }}
      />
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Search
          placeholder="Search..."
          onSearch={handleSearch}
          style={{ maxWidth: "400px", width: "100%", marginRight: "20px" }}
        />
      </div>
      <NavLink to="/dashboard/profile">
        <div style={{ background: "#ff5757", padding: "5px", borderRadius: "50%" }}>
          <Avatar
            size="large"
            style={{ cursor: "pointer", color: "#0814ec", background: "#fde3cf" }}
          >
            {data?.first_name.charAt(0)}
          </Avatar>
        </div>
      </NavLink>
    </Header>
  );
};

export default HeaderComponent;




