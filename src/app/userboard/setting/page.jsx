import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

function SettingsPage() {
  const user = {
    name: "Himal Hasan",
    email: "mdhimal2040@gmail.com",
    role: "User", // or "Admin"
    image: "https://lh3.googleusercontent.com/a/ACg8ocIwNa-fpFnbF5YIOpALkHtLkt_r7GDt5z2-Av6HzL28VtOjpYtS=s96-c"
  }

  return (
    <div className="p-4 sm:p-8 max-w-xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>

      <div className="flex flex-col items-center gap-4 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-blue-600 font-medium mt-1">{user.role}</p>
        </div>
      </div>

      <div className="text-center">
        <Button variant="destructive" className="w-full max-w-sm">
          Delete this account
        </Button>
      </div>
    </div>
  )
}

export default SettingsPage
