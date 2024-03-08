import React from 'react'
import AdminLayout from '../../components/AdminLayout'

const AdminMainLayout = ({children} : any) => {
  return (
    <div>
        <AdminLayout>{children}</AdminLayout>
    </div>
  )
}

export default AdminMainLayout