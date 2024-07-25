import {Layout, } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

import Sider from "../../components/sider/Sider";

const Dashboard = () => {
    const [collapsed, setCollapsed] =useState(false);

    const handleToggleCollapsed = () => {
      setCollapsed(!collapsed);
    }

  return (

    <Layout style={{minHeight: '100vh'}}>
    <Header collapsed={collapsed} handleToggleCollapsed={handleToggleCollapsed}/>

      <Layout>
          <Sider collapsed={collapsed}/>
          <Outlet/>
      </Layout>
      
    </Layout>
  )
}

export default Dashboard