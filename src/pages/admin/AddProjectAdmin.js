import React from 'react'
import FormProject from '../../components/admin/FormProject'
import NavBar from '../../components/admin/NavBar'


export default function AddProjectAdmin() {
  return (
    <div className='flex'>
        <NavBar/>
        <FormProject/>
    </div>
  )
}
