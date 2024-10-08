import React, { useState } from 'react'
import { Alert, Button, Form, Input } from "antd"
import { NavLink } from 'react-router-dom'
import supabase from '../../supabase'

const Login = () => {

    const [state, setState] = useState({
        isLoading: false,
        isError: false
    })

    function handleSubmit(e) {
        const { email, password } = e

        // setLoading jadi true
        setState(prev => prev = {
            ...prev,
            isLoading: true
        })

        supabase.auth.signInWithPassword({
            email, password
        })
            .then(res => {

                // setLoading jadi false
                setState(prev => prev = {
                    ...prev,
                    isLoading: false
                })

                if (res.error) {
                    setState(prev => prev = {
                        ...prev,
                        isError: true
                    })
                    return
                }

            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-center items-center
        bg-gradient-to-tr from-blue-800 to-blue-500
    `}>

            {state.isError ? (
                <Alert
                    type='error'
                    message='Login Error !'
                    description="Silakan check kembali data login anda !"
                    closable
                    showIcon
                    className={`absolute top-2 right-auto left-auto`}
                    onClose={()=>{
                        setState(prev => prev = {
                            ...prev,
                            isError : false
                        })
                    }}
                />
            ) : null}

            <div className={`w-[850px] bg-white shadow-md rounded-md flex min-h-[300px]`}>

                <div className={`flex-1 h-full`}>
                    <img
                        src="https://images.pexels.com/photos/636353/pexels-photo-636353.jpeg?auto=compress&cs=tinysrgb&w=500" alt="background"
                        className={`object-cover w-full h-full`}
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
                        onFinish={handleSubmit}
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
                            disabled={state.isLoading}
                            loading={state.isLoading}
                        >
                            Login
                        </Button>

                        <NavLink to={'/register'}>
                            dont have account ? Register Here
                        </NavLink>

                    </Form>

                </div>

            </div>

        </main>
    )
}

export default Login
