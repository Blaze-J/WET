
'use client'
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, MenuItem, Select } from '@mui/material';
import SelectRole from '../ui/SelectRole';
import UserService from '@/services/UserService';
import { toast } from 'react-toastify';
import SelectMc from '../ui/SelectMc';
import FacultyService from '@/services/FacultyService';
import AcademicyearService from '@/services/AcademicyearService';
function toLocalISOString(date) {
  const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset

  // Optionally remove second/millisecond if needed
  localDate.setSeconds(null);
  localDate.setMilliseconds(null);
  return localDate.toISOString().slice(0, -1);
}

export default function UpdateAcademicyear({id}) {
  
  const [academicyear,setAcademicyear] = useState()
  const onSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    AcademicyearService.updateAcademicyear(id,formdata).then(x => {
      toast.success('Update success')

    }).catch(err => {
      console.log(err)
      toast.error('Update failed')
    })
  }
  useEffect(()=>{
    AcademicyearService.getAcademicyearById(id).then(x=>[
      setAcademicyear(x.data)
    ])
  },[])
  if(!academicyear) return
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} className='flex !flex-col' >
          <FormLabel htmlFor="name" required>
            Name
          </FormLabel>
          <OutlinedInput
            id="name"
            name="name"
            type="text"
            placeholder="enter name"
            autoComplete="name"
            required
            defaultValue={academicyear?.name||""}
          />
        </Grid>
  
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="finalclosuredate" required>
            Begin Date
          </FormLabel>
          <OutlinedInput
            id="begindate"
            name="begindate"
            type="datetime-local"
            placeholder="Select begin date"
            required
            defaultValue={toLocalISOString(new Date(academicyear?.beginDate))}
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="finalclosuredate" required>
            End Date
          </FormLabel>
          <OutlinedInput
            id="enddate"
            name="enddate"
            type="datetime-local"
            placeholder="Select begin date"
            required
            defaultValue={toLocalISOString(new Date(academicyear?.endDate))}
          />
        </Grid>
        <Grid item xs={12} md={12} className='flex !flex-col'>
          <FormLabel htmlFor="description" >Description</FormLabel>
          <textarea name="description" id="" cols="10" rows="5" defaultValue={academicyear?.description}></textarea>
        </Grid>
        {/* <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="name" required>
            Closure Date
          </FormLabel>
          <OutlinedInput
            id="closuredate"
            name="closuredate"
            type="datetime-local"
            placeholder="Select closure date"
          
            required
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="finalclosuredate" required>
            Final Closure Date
          </FormLabel>
          <OutlinedInput
            id="finalclosuredate"
            name="finalclosuredate"
            type="datetime-local"
            placeholder="Select final closure date"
    
            required
          />
        </Grid> */}
 


        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button type='submit' variant='contained' className='bg-primary'>Update</Button>
        </Grid>
        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button href='/admin/academicyear' type='button' variant='contained' color='error' className='bg-error'>Cancel</Button>
        </Grid>
      </Grid>
    </form >
  )
}
