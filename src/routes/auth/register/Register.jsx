// import React, { useState } from 'react'

// import { Button, Checkbox, Form, Input, Typography, Divider } from 'antd';
// import { Link } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
// import axios from "../../../api";


// const{Title, Text} = Typography;


// const Register = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] =useState(false)

//   const onFinish = async (values) => {
//     console.log(values)
//     try {
//       setLoading(true)
//       const response = await axios.post('/auth', values);
//     console.log(response.data);
//     }
//     catch (error) {
//       console.log(error);
//     }
//     finally {
//     setLoading(false)
//     }
//     form.resetFields()
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       layout='vertical'
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 24,
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Title className='text-center'>Register</Title>
//       <Form.Item
//       style={{ marginBottom: "0px"}}
//         label="Firstname"
//         name="first_name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your firstname!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//       style={{ marginBottom: "0px"}}
//         label="Username"
//         name="Username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           }
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//       style={{ marginBottom: "0px"}}
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           }
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>
    

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           span: 16,
//         }}
//       >
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item
//       className='w-full'
//         wrapperCol={{
//           span: 24,
//         }}
//       >
//         <Button className='w-full' type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//       <Divider className='text-center text-gray-500 mb-[20px]'>Or</Divider>
//            <div className='flex justify-center'>
//            <GoogleLogin
//         onSuccess={credentialResponse => {
//           console.log(credentialResponse);
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//         useOneTap
//       />
//            </div>
//       <Text className='mt-[20px] block text-center'> Already have an account? <Link to="/auth">Login </Link> </Text>
//     </Form>
//   )
// }

// export default Register

import { Button, Checkbox, Form, Input, Typography, Divider, notification } from "antd";
const { Title, Text } = Typography;

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import axios from "../../../api";
import { LOADING, REGISTER, ERROR } from "../../../redux/action/action";

import TelegramLoginButton from 'telegram-login-button'

const Register = () => {
  const navigate = useNavigate(); // to navigate
  const { loading } = useSelector((state) => state); // to get the loading state
  const dispatch = useDispatch(); // to dispatch actions
  const [ form ] = Form.useForm(); // to clear the form

  const onFinish = async (values) => {
    try {
      dispatch({ type: LOADING }); // to start the loading
      const { data } = await axios.post("/auth", values); // to send the register request
      dispatch({ type: REGISTER, token: data.payload.token, user: data.payload.user }); // to dispatch the register action

      // to navigate to the dashboard
      if(data?.payload?.token){
        navigate("/dashboard");
      }

      // to show a success notification
      notification.success({
        message: "Registration Successful",
        description: "You have registered successfully.",
      });
    } 
    catch (error) {
      dispatch({ type: ERROR, error: error.message }); // to stop the loading

      // to show an error notification
      notification.error({
        message: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    }

    // to clear the form
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      disabled={loading}
    >
      <Title className="text-center">Register</Title>
      <Form.Item
        label="Firstname"
        name="first_name"
        rules={[
          {
            required: true,
            message: "Please input your firstname!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 24 }}
      >
        <Button disabled={loading} className="w-full" type="primary" htmlType="submit" loading={loading}>Register</Button>
      </Form.Item>

      <Divider><span className="text-gray-500">Or</span></Divider>

      <div className="w-full flex justify-center items-center flex-col gap-[10px]">
        <GoogleLogin
          disabled={loading}
          onSuccess={async (credentialResponse) => { 
            const decode = credentialResponse.credential.split(".")[1]; // to decode the credential
            const userData = JSON.parse(atob(decode)); // to parse the decoded credential

            // to send the register request
            const user = {
              username: userData.email,
              password: userData.sub,
              first_name: userData.name
            }
            const response = await axios.post("/auth", user); // to send the register request
            console.log(response.data);
          }}
          onError={() => { console.log("Login Failed") }}
        />

        <TelegramLoginButton
          disabled={loading}
          botName={import.meta.env.VITE_TELEGRAM_BOT_USERNAME}
          dataOnauth={user => console.log(user)}
        />
      </div>

      <Text className="text-center mt-[16px] block">Already have an account? <Link to="/auth">Login</Link></Text>
    </Form>
  );
};

export default Register;