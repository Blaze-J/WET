'use client'
import instance from '@/data/Instance'
import UserService from '@/services/UserService'
import { FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import React,{useEffect, useState} from 'react'

export default function SelectMc() {
    const [data, setData] = useState()
 
    useEffect(() => {
    
        UserService.getUserMc().then(x => { setData(x.data)}).catch(() => {
        })
        return () => {
        }
    }, [])
    if(!data) 
    return (
       <>
        <FormLabel id="user" >Select User</FormLabel>
       </>
    )
    return (
       <>
        <FormLabel htmlFor="user" >Select User</FormLabel>
        <Select
            labelId="user"
            id="user"
            name='user'
            label="User"
            defaultValue={data?data[0].id:null}
        >
            {data && data.map((item, i) => {
                return <MenuItem key={i} value={item.id}>{item.email}</MenuItem>
            })}

        </Select>
        </>
    )
}
