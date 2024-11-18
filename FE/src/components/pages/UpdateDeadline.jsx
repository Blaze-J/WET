
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

import DeadlineService from '@/services/DeadlineService';
function toLocalISOString(date) {
  const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset

  // Optionally remove second/millisecond if needed
  localDate.setSeconds(null);
  localDate.setMilliseconds(null);
  return localDate.toISOString().slice(0, -1);
}

export default function UpdateDeadline({ id }) {

  const [deadline, setDeadline] = useState()
  const onSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    DeadlineService.updateDeadline(id,formdata).then(x => {
      toast.success('Update success')
    }).catch(err => {
      toast.error('Update failed')
    })
  }
  useEffect(() => {
    DeadlineService.getDeadlineById(id).then(x => [
      setDeadline(x.data)
    ])
  }, [])
  if (!deadline) return
  return (
    <form onSubmit={onSubmit} className='mx-[200px]'>
      <input type="hidden" name="contributionid" value={deadline?.contributionId} />
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
            defaultValue={deadline?.name}
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="closuredate" required>
            Closure Date
          </FormLabel>
          <OutlinedInput
            id="closuredate"
            name="closuredate"
            type="datetime-local"
            placeholder="Select closure date"
            defaultValue={toLocalISOString(new Date(deadline?.closureDate))}
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
            defaultValue={toLocalISOString(new Date(deadline?.finalclosureDate))}
          />
        </Grid>
        <Grid item xs={12} md={12} className='flex !flex-col'>
          <FormLabel htmlFor="description" >Description</FormLabel>
          <textarea name="description" id="" cols="10" rows="5"
            defaultValue={deadline?.description}
          ></textarea>
        </Grid>

        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button type='submit' variant='contained' className='bg-primary'>Update</Button>
        </Grid>
        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button href='/coordinator/index' type='button' variant='contained' color='error' className='bg-error'>Cancel</Button>
        </Grid>
      </Grid>
    </form >
  )
}
