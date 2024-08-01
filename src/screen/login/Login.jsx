import React from 'react'
import { Button, Form, Input } from "antd"

const Login = () => {
    return (
        <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-center items-center
        bg-gradient-to-tr from-blue-800 to-blue-500
    `}>

            <div className={`w-[850px] bg-white shadow-md rounded-md flex min-h-[300px]`}>

                <div className={`flex-1 h-full`}>
                    <img
                        src="https://images.pexels.com/photos/636353/pexels-photo-636353.jpeg?auto=compress&cs=tinysrgb&w=500" alt="background"
                        className={`object-cover`}
                    />
                </div>

                <div className={`flex-1 p-6`}>

                    <h1 className={`text-2xl text-blue-500 font-bold`}>Login Page</h1>

                    <Form
                        name='login-form'
                        labelCol={{
                            span: 8
                        }}
                        wrapperCol={{
                            span: 16
                        }}
                        onFinish={(e) => { console.info(e) }}
                        className={`flex flex-col gap-4`}
                    >

                        <Form.Item
                            label="email"
                            id='email'
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: "email wajib di isi.."
                                },
                                {
                                    type: "email",
                                    message: "email tidak valid !"
                                }
                            ]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item
                            label="password"
                            id='password'
                            name='password'
                            rules={[{
                                required: true,
                                message: "password wajib di isi.."
                            }]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>

                        <Button type='primary' htmlType='submit'
                            className={`ml-auto`}
                            size='large'
                        >
                            Login
                        </Button>

                    </Form>

                </div>

            </div>

        </main>
    )
}

export default Login
