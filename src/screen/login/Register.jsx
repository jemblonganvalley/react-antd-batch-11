import React from 'react'
import { Button, Form, Input } from "antd"
import { NavLink } from 'react-router-dom'
import supabase from '../../supabase'

const Register = () => {


    function handleSubmit(e){
        
        let { email, password, repassword } = e

        // jika password dan repassword tidak sama
        if(password !== repassword){
            return alert("password harus sama !")
        }

        supabase.auth.signUp({
            email : email,
            password : password
        })
        .then(res => {
            console.info(res)
        })
        .catch(err => {
            console.info(err)
        })

    }


    return (
        <main className={`w-[100dvw] h-[100dvh] flex flex-col justify-center items-center
        bg-gradient-to-tr from-blue-800 to-blue-500
    `}>

            <div className={`w-[850px] bg-white shadow-md rounded-md flex min-h-[300px]`}>

                <div className={`flex-1 h-full`}>
                    <img
                        src="https://images.pexels.com/photos/636353/pexels-photo-636353.jpeg?auto=compress&cs=tinysrgb&w=500" alt="background"
                        className={`object-cover w-full h-full`}
                    />
                </div>

                <div className={`flex-1 p-6`}>

                    <h1 className={`text-2xl text-blue-500 font-bold`}>Register Page</h1>

                    <Form
                        name='register-form'
                        labelCol={{
                            span: 8
                        }}
                        wrapperCol={{
                            span: 16
                        }}
                        onFinish={ handleSubmit }
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

                        <Form.Item
                            label="repassword"
                            id='repassword'
                            name='repassword'
                            rules={[{
                                required: true,
                                message: "repassword wajib di isi.."
                            }]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>

                        <Button type='primary' htmlType='submit'
                            className={`ml-auto`}
                            size='large'
                        >
                            Register
                        </Button>

                        <NavLink to={'/'}>
                            have account ? Login Here
                        </NavLink>

                    </Form>

                </div>

            </div>

        </main>
    )
}

export default Register
