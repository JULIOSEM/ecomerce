import UserOrders from '@/components/UserOrders'
import React from 'react'

export default function UserDashboard() {
  return (
    <div>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">  
        <UserOrders />
      </div>
    </div>
  )
}
