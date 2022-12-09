import React from 'react'

import FormCustomer from "../../components/admin/FormCustomer";
import NavBar from "../../components/admin/NavBar";

export default function AddCustomerAdmin () {
  return (
    <div className='flex'>
        <NavBar />
        <FormCustomer />
    </div>
  )
}
