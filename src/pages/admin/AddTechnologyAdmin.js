import React from 'react'
import FormTechnology from '../../components/admin/FormTechnology'
import NavBar from '../../components/admin/NavBar'

export default function AddTechnologyAdmin() {
  return (
    <div className='flex'>
        <NavBar/>
        <FormTechnology/>
    </div>
  )
}
