import React, { useEffect, useState } from 'react'
import supabase from '../../supabase'
import { Table } from 'antd'

const Attendances = () => {

    const [data,setData] = useState([])
    let column = [
        {   
            title : "id",
            dataIndex : 'id'
        },
        {
            title : "fullname",
            dataIndex : "fullname"
        },
        {
            title : "phone",
            dataIndex : "phone"
        },
        {
            title : "email",
            dataIndex : "email"
        },
        {
            title : "created_at",
            dataIndex : "created_at"
        }
    ]

    useEffect(()=>{
        supabase.from('attendances').select('*').then(res => {
            console.info(res)
            setData(res.data)
        })
    },[])

    return (
        <main className={`w-full p-6`}>
            <h1>Attendances</h1>

            <Table columns={column} dataSource={data} rowKey={'id'} />
        </main>
    )
}

export default Attendances
