import React from 'react';
import { ConfigProvider } from 'antd';
import AdminLogin from '../../../components/AdminLogin';


const Login = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "alumni-regular",
                },
            }}
        >
            <AdminLogin />
        </ConfigProvider>
    )
}

export default Login